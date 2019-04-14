import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import AdminTableItem from '../AdminTableItem/AdminTableItem';

class AdminTable extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_PROJECTS'} );
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Project Name</td>
                            <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.projects.map( project => 
                                <AdminTableItem key={project.id} project={project} />
                            )}
                    </tbody>
                </table>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect( mapReduxStateToProps )(AdminTable);