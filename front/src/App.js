import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import './App.css';
import MyTable from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query_id:0,
      query_string:""
    }
  }
  componentDidMount() {
  }
  handleClick(query_id) {
    this.setState({query_id})

  }
  handleChange(query_string){
    this.setState({query_string})
  }
  render() {
    // const {items} = this.state;
    return (
      <div className="App">
        <Grid container spacing={3} justify="center" alignItems="center" style={{marginTop: 20}}>
          <Grid item xs={10}>
            <Paper elevation={3}>
              <Typography component="h1" variant="h5">
                Welcome to Sketch
              </Typography>
              <Grid container xs={12} justify="center" alignItems="center" style={{height: 200}}>
                <Grid item xs={3} justify="center" alignItems="center">
                  <Button variant="contained" color="primary" onClick={()=>this.handleClick(1)}>
                    Query1: List of students in (user input) course type
                  </Button>
                </Grid>
                <Divider orientation="vertical" flexItem style={{margin:20}}/>
                <Grid item xs={3} justify="center" alignItems="center">
                  <Button variant="contained" color="primary" onClick={()=>this.handleClick(2)}>
                    Query2: Assignment grades of students in (user input) course type
                  </Button>
                </Grid>
                <Divider orientation="vertical" flexItem style={{margin:20}}/>
                <Grid item xs={3} justify="center" alignItems="center">
                  <Button variant="contained" color="primary" onClick={()=>this.handleClick(3)}>
                    Query3: Fall2020 TA email addresses
                  </Button>
                </Grid>
                <Grid item xs={3} justify="center" alignItems="center">
                  <TextField id="standard-search" label="Query String" type="search" onChange={(e)=>this.handleChange(e.target.value)} />
                  <Button variant="contained" color="primary" onClick={()=>this.handleClick(4)}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center" alignItems="center" style={{marginTop: 20}}>
        <Grid item xs={10}>
            <MyTable query_id={this.state.query_id} query_string={this.state.query_string}></MyTable>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;