import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
// import Card from '@material-ui/core/Card';


class ProjectListItem extends Component {

    render(){
        const project = this.props.project;
        return(
            // <Card key={project.id} className="Project-description">
            <>
                <img src={project.thumbnail} 
                    alt={project.name} className="thumb" />
            
                <div className="description">
                    <p>
                        <b>{project.name}</b> 
                        <a href="{project.github}" >{project.github}</a>
                        <a href="{project.website}" >{project.website}</a> 
                        {project.tag_name}
                    </p>
                    
                    <p className="text-description">{project.description}</p>
                </div>
            </>
            // </Card>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect( mapReduxStateToProps )(ProjectListItem);