import React, {Component} from 'react';
import Header from './components/header';
import Main from './components/main';
import Info_me from "./components/info_me";
import Project from "./components/project";
import Contact_me from "./components/contact_me";
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { withStyles } from '@material-ui/core/styles';

const Mainloading = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform:translateX(-50%);
  text-align: center;

`
const Loading = styled.div`
  position: relative;
  text-align: center;
`
const Loadingtext = styled.div`
  position: absolute;
  font-family: JejuGothic, NanumGothic;
  font-size: 1.5vw;
  top: 43%;
  left: 50%;
  transform:translateX(-50%);
`

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
    mainLoading: 0,
    project_data: "",
    about_data: "",
    contact_data: "",
    completed: 0, // 로딩 애니메이션의 초기값: 0, 0 ~ 100까지 게이지가 채워짐
    loadingText: 0 // 로딩 텍스트
  }

  componentDidMount() {
    setInterval(this.mainLoading);

    setInterval(this.progress, 20); // 0.02초마다 progress함수가 실행됨

    setInterval(this.loadingText, 20);

    // this.callApi_about()
    //   .then(res => this.setState({about_data: res}))
    //   .catch(err => console.log(err));
      
    // this.callApi_project()
    //   .then(res => this.setState({project_data: res}))
    //   .catch(err => console.log(err));

    // this.callApi_contact()
    //   .then(res => this.setState({contact_data: res}))
    //   .catch(err => console.log(err));
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

  mainLoading = () => {
    const { mainLoading } = this.state;
    this.setState({ mainLoading: mainLoading >= 10 ? 10 : mainLoading + 0.005 })
  }

  // 애니메이션 함수
  progress = () => {
    const { completed } = this.state;
    // completed가 100이되면 0으로 돌아가고 아닐 시 1씩 증가
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }

  // 로딩 텍스트
  loadingText = () => {
    const { loadingText } = this.state;
    this.setState({ loadingText: loadingText >= 1.0 ? 0 : loadingText + 0.01 })
  }

  render() {
    const { classes } = this.props;
    const { mainLoading, about_data, project_data, contact_data, completed } = this.state;

    return (
      <div>
        {/* 첫 로딩 페이지 */}
        {mainLoading < 2 ?
        <Mainloading>
          <CircularProgress className = {classes.progress} variant = "determinate" value={ completed } size = {'10vw'}/>

          <Motion style={{ opacity: spring(this.state.loadingText) }}>
                {
                ({ opacity }) =>  <Loadingtext style={Object.assign({}, this.Loadingtext, { opacity })}>
                  Loading
                </Loadingtext>
                }
          </Motion>
        </Mainloading> :
        // 첫 로딩 페이지 이후
        <div>         
          {/* header */}
          <Header />

          <div id = "body">
            {/* main */}
            <Main/>

            {/* about_me */}
            <Info_me/>
            {/* {about_data ? <Info_me
              image = {about_data.image}
              name = {about_data.name}
              index = {about_data.index}
              about = {about_data.about}
              aboutContent = {about_data.aboutContent}
            /> :
            <Loading>
              <CircularProgress className = {classes.progress} variant = "determinate" value={ completed } size = {'10vw'}/>

              <Motion style={{ opacity: spring(this.state.loadingText) }}>
                    {
                    ({ opacity }) =>  <Loadingtext style={Object.assign({}, this.Loadingtext, { opacity })}>
                      Loading
                    </Loadingtext>
                    }
              </Motion>
            </Loading>
            } */}
            
            {/* Project */}
            <Project/>
            {/* {project_data ? <Project
              index = {project_data.index}
              projectTitle = {project_data.projectTitle}
              image = {project_data.image}
              khProjectIntroduction = {project_data.khProjectIntroduction}
              khProjectMyrule = {project_data.khProjectMyrule}
              github = {project_data.github}
            /> :
            <Loading>
              <CircularProgress className = {classes.progress} variant = "determinate" value={ completed } size = {'10vw'}/>

              <Motion style={{ opacity: spring(this.state.loadingText) }}>
                    {
                    ({ opacity }) =>  <Loadingtext style={Object.assign({}, this.Loadingtext, { opacity })}>
                      Loading
                    </Loadingtext>
                    }
              </Motion>
            </Loading>
            } */}

            {/* contact_me */}
            <Contact_me/>
            {/* {contact_data ? <Contact_me
              index = {contact_data.index}
              contact_title = {contact_data.contact_title}
              contact_name = {contact_data.contact_name}
              contact_email = {contact_data.contact_email}
              contact_phone = {contact_data.contact_phone}
            /> :
            <Loading>
              <CircularProgress className = {classes.progress} variant = "determinate" value={ completed } size = {'10vw'}/>

              <Motion style={{ opacity: spring(this.state.loadingText) }}>
                    {
                    ({ opacity }) =>  <Loadingtext style={Object.assign({}, this.Loadingtext, { opacity })}>
                      Loading
                    </Loadingtext>
                    }
              </Motion>
            </Loading>
            } */}

          </div>
        </div>
        }
      </div>
    );
  }
}

export default withStyles(styles)(App);