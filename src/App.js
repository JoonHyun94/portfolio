import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import Header from './components/header';
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { withStyles } from '@material-ui/core/styles';
const Main = lazy(() => import('./components/main'));
const Info_me = lazy(() => import('./components/info_me'));
const Project = lazy(() => import('./components/project'));
const Contact_me = lazy(() => import('./components/contact_me'));

const Mainloading = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform:translateX(-50%);
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
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    completed: 0, // 로딩 애니메이션의 초기값: 0, 0 ~ 100까지 게이지가 채워짐
    loadingText: 0 // 로딩 텍스트
  }

  componentDidMount() {
    // 페이지 나갈 시 경고메시지 or 스크롤 상단
    window.onbeforeunload = (e) => {
      window.scrollTo(0, 0);
      return "페이지를 나가시겠습니까?";
    };
    setInterval(this.mainLoading);
    setInterval(this.progress, 20); // 0.02초마다 progress함수가 실행됨
    setInterval(this.loadingText, 20);
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
    const { completed } = this.state;

    return (
      <div>
        <Suspense fallback =
          {
            <Mainloading>
              <CircularProgress className = { classes.progress } variant = "determinate" value={ completed } size = {'10vw'}/>
  
              <Motion style={{ opacity: spring(this.state.loadingText) }}>
                    {
                    ({ opacity }) =>  <Loadingtext style={Object.assign({}, this.Loadingtext, { opacity })}>
                      Loading
                    </Loadingtext>
                    }
              </Motion>
            </Mainloading>
          }>
          {/* header */}
          <Header/>

          <div id = "body">
            {/* main */}
            <Main/>

            {/* about_me */}
            <Info_me/>

            {/* Project */}
            <Project/>

            {/* contact_me */}
            <Contact_me/>
          </div>
        </Suspense>
      </div>
    );
  }
}

export default withStyles(styles)(App);