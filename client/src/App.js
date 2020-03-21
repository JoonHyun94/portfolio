import React, {Component} from 'react';
import Info_me from "./components/info_me";
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress'
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
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    data: "",
    completed: 0 // 로딩 애니메이션의 초기값: 0, 0 ~ 100까지 게이지가 채워짐
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20); // 0.02초마다 progress함수가 실행됨
    this.callApi()
      .then(res => this.setState({data: res}))
      .catch(err => console.log(err));
  }
  
  callApi = async() => {
    const response = await fetch('/api/info_me');
    const body = await response.json();
    return body;
  }

  // 애니메이션 함수
  progress = () => {
    const {completed} = this.state;
    // completed가 100이되면 0으로 돌아가고 아닐 시 1씩 증가
    this.setState({completed: completed >= 100 ? 0 : completed + 1})
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
          }) :
          // 데이터를 불러 오지 못할 경우(로딩페이지)
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
            </TableCell>
          </TableRow>
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
