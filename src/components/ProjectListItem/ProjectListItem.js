import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';


class ProjectListItem extends Component {
         // Renders the entire app on the DOM
    render() {
        return (
            <div className="ProjectItem">
               <img src={this.props.project.thumbnail} alt={this.props.project.name} />
                    <div>
                        <li>{this.props.project.name}</li>
                        <li>{this.props.project.description}</li>
                        <a href={this.props.project.github} target="_blank ">Github</a>
                        <li>{this.props.project.website}</li>
                        <li>{this.props.project.tags}</li>
                    </div>
            </div>
        );
    }
}



export default connect()(ProjectListItem);