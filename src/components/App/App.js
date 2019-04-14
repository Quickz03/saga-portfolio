import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import ProjectList from '../ProjectList/ProjectList';
import Admin from '../Admin/Admin';

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import theme from './theme';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={ProjectList} />
            <Route path = "/admin" component={Admin} />
          </div>
        </Router>
      // </MuiThemeProvider>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(App);
