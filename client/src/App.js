import React, {Component} from 'react';
import Info_me from "./components/info_me";
import Project from "./components/project";
import Contact_me from "./components/contact_me";
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress'
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


// 메인 타이틀 interval animation
var mainTitle = document.getElementsByClassName('main_title_hello');
var toggle = false;
var handle = true;
// 윈도우 시작 시 interval()함수 실행
window.onload = function() {
  interval();
}
// 0.2후 main_title 출력
function interval() {
  setTimeout(function() {
    mainTitle[0].style.backgroundSize = "180% 400%";
  }, 200);
  // 이후 interval 시작
  startInterval();
}

function startInterval() {
  // interval
  setInterval(function() {
    if(handle) { // handle이 'true'일 경우 2초 후 interval_title()함수 실행
      handle=setTimeout(function() {
        interval_title(); // 'main_title_hello' 출력 및 'main_title_about' 사라짐
        mainTitle = document.getElementsByClassName('main_title_about'); // 'mainTitle' 변경
        handle = false; // handle 변경
      }, 3000);
    } else { // handle이 'false'일 경우 2초 후 interval_title()함수 실행
      handle=setTimeout(function() {
        interval_title(); // 'main_title_about' 출력 및 'main_title_hello' 사라짐
        mainTitle = document.getElementsByClassName('main_title_hello'); // 'mainTitle' 변경
        handle = true; // handle 변경
      }, 3000);
    }
  }, 3000)
}
function interval_title() {
  if(toggle) {
    mainTitle[0].style.backgroundSize = "180% 400%";
  } else {
    mainTitle[0].style.backgroundSize = "0% 0%";
  }
  toggle = !toggle;
}
// 메인 타이틀 interval animation


class App extends Component {
  state = {
    skill_data: "",
    about_data: "",
    contact_data: "",
    completed: 0 // 로딩 애니메이션의 초기값: 0, 0 ~ 100까지 게이지가 채워짐
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20); // 0.02초마다 progress함수가 실행됨

    this.callApi_about()
      .then(res => this.setState({about_data: res}))
      .catch(err => console.log(err));
      
    this.callApi_project()
      .then(res => this.setState({project_data: res}))
      .catch(err => console.log(err));

    this.callApi_contact()
      .then(res => this.setState({contact_data: res}))
      .catch(err => console.log(err));
  }

  

  callApi_about = async() => {
    const about_response = await fetch('/api/info_me');
    const about_body = await about_response.json();
    return about_body;
  }

  callApi_project = async() => {
    const project_response = await fetch('/api/project');
    const project_body = await project_response.json();
    return project_body;
  }

  callApi_contact = async() => {
    const contact_response = await fetch('/api/contact_me');
    const contact_body = await contact_response.json();
    return contact_body;
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
      <div id = "body">
        {/* main */}
        <div class = "main">
          <div class = "title">
            <span class = "main_title_hello"><h1 class = "main_h1">안녕하세요</h1></span>
            <span class = "main_title_about"><h1 class = "main_h1">신준현의 포트폴리오입니다</h1></span>
          </div>
        </div>
        {/* about_me */}
        {this.state.about_data ? this.state.about_data.map(i => { return (<Info_me
              key = {i.id}
              image = {i.image}
              name = {i.name}
              index = {i.index}
              about = {i.about}
              aboutContent = {i.aboutContent}
            />
            );
          }) :
          // 데이터를 불러 오지 못할 경우(로딩페이지)
          <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
        }

        {/* skills */}
        {this.state.project_data ? this.state.project_data.map(i => { return (<Project
              index = {i.index}
              projectTitle = {i.projectTitle}
              image = {i.image}
              khProjectIntroduction = {i.khProjectIntroduction}
              khProjectMyrule = {i.khProjectMyrule}
              github = {i.github}
            />
            );
          }) :
          // 데이터를 불러 오지 못할 경우(로딩페이지)
          <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
        }

        {/* contact_me */}
        {this.state.contact_data ? this.state.contact_data.map(i => { return (<Contact_me
              index = {i.index}
              contact_title = {i.contact_title}
              contact_name = {i.contact_name}
              contact_email = {i.contact_email}
              contact_phone = {i.contact_phone}
            />
            );
          }) :
          // 데이터를 불러 오지 못할 경우(로딩페이지)
          <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
        }
      </div>
    );
  }
}

export default withStyles(styles)(App);
