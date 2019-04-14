import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// projectList render - will hold projects from server
// action SET_PROJECTS sent by saga with payload
// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// projectList render - will hold tags from server
// action SET_TAGS sent by saga with payload
// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}


// this will get our projects from the server! 
// and pass them off to the project list reducer to update 
// the redux store
function* getProjectList(action) {
    console.log(`Hit the getProjectList saga`, action);
    try {
        const getResponse = yield axios.get('/portfolio');
        console.log(`getResponse is: `, getResponse);
        const action = {
            type: 'SET_PROJECTS',
            payload: getResponse.data
        };
        yield put(action);
        console.log('sent off SET_PROJECTS action');

    } catch (error) {
        console.log(`Couldn't get projects`, error);
        alert(`Sorry, couldn't get the projects. Try again later`);
    }
} //   end getProjectList


function* getTagsList(action) {
    console.log(`Hit the getTagsList saga`, action);
    try {
        const response = yield axios.get('/portfolio/tags');
        yield put({
            type: 'SET_TAGS',
            payload: response.data
        });
    } catch (error) {
        console.log(`Couldn't get tags.`, error);
        alert(`Sorry couldn't get tags. Try again later.`);
    }
}   // end getTagsList

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
