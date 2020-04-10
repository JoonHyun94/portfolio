import React from 'react';
import main_img from '../images/main.png';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import {Motion, spring} from 'react-motion';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const Maindisplay = styled.div`
    background-image: url(${ main_img });
    background-color: black;
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
    /* 배경 상단고정 및 화면 전체 표시 */
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    &:before {
        content: "";
        position: absolute;
        top: 0; left: 0; bottom: 0;
        background: inherit;
        background-color: black;
        width: 100%;
        max-width: 100%;
        height: 100vh;
        content: "";
        transform: scale(1.02);
        filter: url(#blur);
        -webkit-filter: blur(3px);
        -ms-filter: blur(3px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
        z-index: -9999;
        /* 배경 상단고정 및 화면 전체 표시 */
        background-attachment: fixed;
        background-size: cover;
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
var Main_title_hello = styled.span`
  color: white;
  font-family: Noto Sans KR,sans-serif;
  font-size: 2vw;
  /* 글자 이미지 정가운데 배치 */
  position: absolute;
  top: 43%;
  left: 50%;
  transform:translateX(-50%);
  ${customMedia.lessThan('maxmobile')`
    top: 46%;
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
  top: 57%;
  left: 50%; 
  transform:translateX(-50%);
  ${customMedia.lessThan('maxmobile')`
    top: 54%;
    font-size: 3vw;
  `}
`
const Main_h1 = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 5vw;
  margin-right: 5vw;
`
const Leftdiv = styled.div`
  position: absolute;
  left: 0vw;
  background-color: white;
  width: 50%;
  height: 100vh;
`
const Rightdiv = styled.div`
  position: absolute;
  right: 0vw;
  background-color: white;
  width: 50%;
  height: 100vh;
`

class Main extends React.Component {
    state = {
      width: 740,
      zIndex: 9999,
      opacity: 0,
      paddingTop: 100
    }

    mainWidth = () => {
      setInterval(this.animateMainWidth, 10);
    }

    mainInterval = () => {
      setInterval(this.animateMainTitle, 20);
    }

    animateMainWidth = () => {
      const { width, zIndex } = this.state;

      if(width === 0) {
        this.setState({ zIndex: zIndex === 9999 ? -1 : "" });
        this.mainInterval();
      }
      this.setState({ width: width === 0 ? 0 : width - 20 });
    }

    animateMainTitle = () => {
      const { opacity, paddingTop } = this.state;
      if(opacity < 1.0 || paddingTop > 0) {
        this.setState(
          { 
            opacity: opacity === 1.0 ? 1.0 : opacity + 0.003,
            paddingTop: paddingTop === 0 ? 0 : paddingTop - 0.3
          }
        )
      }
    }

    componentDidMount() {
      this.mainWidth();
    }

    render() {
        return (
          <Motion style={{ zIndex: spring(this.state.zIndex) }}> 
            {
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <filter id = "blur">
                  <feGaussianBlur stdDeviation = "3"/>
                </filter>
              </svg>,
              ({ zIndex }) => <Maindisplay id = "Maindisplay" style={Object.assign({}, this.Maindisplay, { zIndex })}>
                <Motion style={{ width: spring(this.state.width) }}>
                  {
                    ({ width }) => <Leftdiv style={Object.assign({}, this.Leftdiv, { width })}></Leftdiv>
                  }
                </Motion>
                <Motion style={{ width: spring(this.state.width) }}>
                  {
                    ({ width }) => <Rightdiv style={Object.assign({}, this.Rightdiv, { width })}></Rightdiv>
                  }
                </Motion>

                <Motion style={{ opacity: spring(this.state.opacity), paddingTop: spring(this.state.paddingTop) }}>
                  {
                    ({ opacity, paddingTop }) => <Main_title_hello className = "main_title_hello" style={Object.assign({}, this.Main_title_hello, { opacity, paddingTop })}>
                      <Main_h1>안녕하세요</Main_h1>
                    </Main_title_hello>
                  }
                </Motion>

                <Motion style={{ opacity: spring(this.state.opacity), paddingTop: spring(this.state.paddingTop) }}>
                  {
                    ({ opacity, paddingTop }) => <Main_title_about className = "main_title_about" style={Object.assign({}, this.Main_title_about, { opacity, paddingTop } )}>
                      <Main_h1>신준현의 포트폴리오입니다</Main_h1>
                    </Main_title_about>
                  }
                </Motion>
              </Maindisplay>
            }
          </Motion>
        )
    }
}

export default Main;