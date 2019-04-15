import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import AdminTableItem from '../AdminTableItem/AdminTableItem';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class AdminTable extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_PROJECTS'} );
    }

    render(){
        return(
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Project Name</TableCell>
                                <TableCell>Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.reduxState.projects.map( project => 
                                    <AdminTableItem key={project.id} project={project} />
                                )}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default connect(mapReduxStateToProps); withStyles(styles)(SimpleTable)(AdminTable);