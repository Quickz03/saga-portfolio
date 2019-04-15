import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Button from '@material-ui/core/Button'

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
                    <Button onClick={this.deleteProject} value={this.props.project.id}
                    color="primary" variant="contained" size="small">Delete!</Button>
                </td>
            </tr>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
export default connect( mapReduxStateToProps )(AdminTable);