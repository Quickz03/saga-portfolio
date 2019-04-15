import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../App/App.css';
import AdminTableItem from '../AdminTableItem/AdminTableItem';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 6,
        // overflowX: 'auto',
    },
    table: {
        width: 350,
        minWidth: 350,
    },

});

class AdminTable extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_PROJECTS'} );
    }

    render(){
        const { classes } = this.props;
        return(
            // <div>
                <Grid container justify="center" alignItems="center" direction="column" color="primary">
                    <Grid item xs={12}>
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
                    </Grid>
                </Grid>
            // </div>
        );
    }
}

AdminTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
 export default connect(mapReduxStateToProps)(withStyles(styles)(AdminTable));