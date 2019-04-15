import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import ProjectListItem from '../ProjectListItem/ProjectListItem';



class ProjectList extends Component {

    //Gets project info from the database to be used to display on DOM
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PROJECTS' });
    }

    render() {

        return (
            <div className="App">
                <ul>
                    {this.props.reduxState.projects.map( project =>
                        <ProjectListItem key={project.id} project={project} />
                    )}
                </ul>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(ProjectList);