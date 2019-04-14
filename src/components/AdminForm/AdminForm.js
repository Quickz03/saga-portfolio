import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'


const emptyProject = {
    name: '',
    date: '',
    tag_id: '',
    github: '',
    website: '',
    description: '',
    thumbnail: '',
}

class AdminForm extends Component {

    state = {
        newProject: {
            name: '',
            date: '',
            tag_id: '',
            github: '',
            website: '',
            description: '',
            thumbnail: '',
        }
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_TAGS'} );
    }
    
    handleChange = (event) => {
        // console.log( `in handleChange`, this.state.newProject );
        this.setState({
            newProject: {
                ...this.state.newProject,
                [event.target.name]: event.target.value,
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log( `in handleSubmit` );
        // TODO! POST new project to DB
        this.props.dispatch( {type: 'ADD_PROJECTS', payload: this.state.newProject} );
        this.setState({
            newProject: {
                ...emptyProject
            }
        })
    }

    render(){
        return(
            <div>
                <Typography variant = "h4" > Admin </Typography>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="name" name="name"
                            onChange={this.handleChange} />
                    <input type="text" placeholder="date" name="date_completed"
                            onChange={this.handleChange} />
                    <select onChange={this.handleChange} name="tag_id" >
                        <option selected disabled >Select a Tag</option>
                        {this.props.reduxState.tags.map( tag => 
                            <option  value={tag.id} key={tag.id}>{tag.name}</option>
                            )}
                    </select>
                    <br />
                    <input type="text" placeholder="GitHub URL" name="github"
                            onChange={this.handleChange} />
                    <input type="text" placeholder="Website URL" name="website"
                            onChange={this.handleChange} />
                    <br />
                    <input type="text" placeholder="Description" name="description"
                            onChange={this.handleChange} />
                    <br />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect( mapReduxStateToProps )(AdminForm);