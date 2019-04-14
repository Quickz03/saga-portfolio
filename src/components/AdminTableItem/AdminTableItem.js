import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class AdminTable extends Component {

    deleteProject = (event) => {
        console.log( `in deleteProject` );
        // TODO DELETE project item from DB
        let id = event.target.value;
        this.props.dispatch( { type: 'DELETE_PROJECT', payload: id } );
    }
    
    render(){
        return(
            <tr>
                <td>{this.props.project.name}</td>
                <td>
                    <button onClick={this.deleteProject} value={this.props.project.id}>Delete!</button>
                </td>
            </tr>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
export default connect( mapReduxStateToProps )(AdminTable);