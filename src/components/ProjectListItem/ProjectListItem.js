import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
const moment = require('moment');

class ProjectListItem extends Component {
         // Renders the entire app on the DOM
    render() {
        return (
            <div className="ProjectItem">
               <img src={this.props.project.thumbnail} alt={this.props.project.name} />
                    <div>
                        <p>{this.props.project.name}</p>
                        <p><span>Date Completed: {moment(this.props.project.date).format('YYYY-MM-DD')}</span></p>
                        <p>{this.props.project.description}</p>
                        <a href={this.props.project.github} target="_blank ">Github</a>
                        <p>{this.props.project.website}</p>
                        <p>{this.props.project.tags}</p>
                    </div>
            </div>
        );
    }
}



export default connect()(ProjectListItem);