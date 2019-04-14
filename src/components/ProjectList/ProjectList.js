import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import ProjectListItem from '../ProjectListItem/ProjectListItem';


class ProjectList extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_PROJECTS'} );
      }

    render(){
        return(
            <div className="projectList">
                <br/>

                {this.props.reduxState.projects.map( project =>
                    <ProjectListItem key={project.id} project={project} />
                )}
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect( mapReduxStateToProps )(ProjectList);