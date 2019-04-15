import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App/App.css';

import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';


class Admin extends Component {


    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li> <Link to="/" >Back to Projects</Link></li>
                    </ul>
                </nav>
                <hr />
                <AdminForm />
                <AdminTable />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect( mapReduxStateToProps )(Admin);