import React, {Component} from 'react';
import Info_me from "./components/info_me";
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1000
  }
});

class App extends Component {
  state = {
    data: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({data: res}))
      .catch(err => console.log(err));
  }
  
  callApi = async() => {
    const response = await fetch('/api/info_me');
    const body = await response.json();
    return body;
  }

  render() {
    const {classes} = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          {/*테이블 헤더 부분*/}
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>

          {/*테이블 body 부분(info_me.js에서의 내용을 불러옴)*/}
          <TableBody>
            {this.state.data ? this.state.data.map(i => { return (<Info_me
              key = {i.id}
              id = {i.id}
              image = {i.image}
              name = {i.name}
              birthday = {i.birthday}
              gender = {i.gender}
              job = {i.job}
            />
            );
          }) : "" }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
