import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import Typist from 'react-typist';
import {Motion, spring} from 'react-motion';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const Maindisplay = styled.div`
    background-color: black;
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    z-index: 1;
    overflow: hidden;
    /* 배경 상단고정 및 화면 전체 표시 */
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    &:after {
        background-color: black;
        background-image: url(./images/main.png);
        width: 100%;
        max-width: 100%;
        height: 100vh;
        content: "";
        transform: scale(1.02);
        filter: blur(3px);
        -ms-filter: blur(3px);
        -o-filter: blur(3px);
        -moz-filter: blur(3px);
        z-index: -9999;
        /* 배경 상단고정 및 화면 전체 표시 */
        background-attachment: fixed;
        background-size: cover;
        position: absolute;
        display: flex;
    }
    ${customMedia.lessThan('maxmobile')`
      height: 100vmax;
      width: 100vmax;
      &:after {
        height: 100vmax;
        width: 100vmax;
      }
  `}
`
const Main_h1 = styled.h1`

  margin-top: 0;
  margin-bottom: 0;
  margin-left: 5vw;
  margin-right: 5vw;
`
var Main_title_hello = styled.span`
    color: white;
    font-family: Noto Sans KR,sans-serif;
    font-size: 2vw;
    /* 글자 이미지 정가운데 배치 */
    position: absolute;
    top: 45%;
    left: 50%;
    transform:translateX(-50%);
    ${customMedia.lessThan('maxmobile')`
      top: 50%;
      font-size: 3vw;
    `}
  `
var Main_title_about = styled.span`
    color: white;
    white-space: pre;
    font-family: Noto Sans KR,sans-serif;
    font-size: 2vw;

    /* 글자 이미지 정가운데 배치 */
    position: absolute;
    top: 55%;
    left: 50%; 
    transform:translateX(-50%);
    ${customMedia.lessThan('maxmobile')`
      top: 50%;
      font-size: 3vw;
  `}
`
const styles = {
  hello: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
    width: 'fit-content',
  },
  about: {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
    width: 'fit-content',
  }
}
class Main extends React.Component {

    state = {
      helloHeight: 0,
      aboutHeight: 0
    }
    
    animateHello = () => {
      const { helloHeight } = this.state;
      this.setState({ helloHeight: helloHeight === 100 ? 100 : helloHeight + 1 })
    }
    animateAbout = () => {
      const { aboutHeight } = this.state;
      this.setState({ aboutHeight: aboutHeight === 100 ? 100 : aboutHeight + 1 })
    }

    componentDidMount() {
        setInterval(this.animateHello);
        setTimeout(() => {
          setInterval(this.animateAbout)
        }, 2000);
    }

    render() {
        return (
            <Maindisplay id = "Maindisplay">

                <Motion style={{ height: spring(this.state.helloHeight) }}>
                  {
                  ({ height }) => <Main_title_hello className = "main_title_hello" style={Object.assign({}, styles.hello, { height } )}>
                    <Main_h1>안녕하세요</Main_h1>
                  </Main_title_hello>
                  }
                </Motion>

                <Motion style={{ height: spring(this.state.aboutHeight) }}>
                  {
                  ({ height }) => <Main_title_about className = "main_title_about" style={Object.assign({}, styles.about, { height } )}>
                    <Main_h1>신준현의 포트폴리오입니다</Main_h1>
                  </Main_title_about>
                  }
                </Motion>

            </Maindisplay>
        )
    }
}

export default Main;