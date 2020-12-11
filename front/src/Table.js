import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class MyTable extends Component {
  constructor() {
    super();
    this.state = {
      title:[],
      result:[]
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.query_id > 0) {
      fetch("/api/" + nextProps.query_id+"?query_string="+nextProps.query_string, {
        method: 'GET',
        accept: 'application/json',
        headers: {
          'content-type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              title: result?Object.keys(result[0]):[],
              result:
                result.map((i) => {
                  return Object.values(i)
                })
            });
          });
    }
  }

  render() {
    return (
      <TableContainer component={Paper} elevation={3} xs={10}>
        {this.state.title.length===0?"No query":"Query: "+this.props.query_id}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {this.state.title.map((i)=>{
              return (<TableCell align="center">{i}</TableCell>);
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.result.map((row)=>(
            <TableRow key={row.name}>
              {row.map((i)=>(
                <TableCell align="center">{i}</TableCell>
              ))}
            </TableRow>
            ))}

        </TableBody>
      </Table>
    </TableContainer>
    )
  }

}

export default MyTable;