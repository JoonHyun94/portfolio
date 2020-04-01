import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

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
    z-index: 1; /* after의 index 값 */
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
        z-index: -1; /* after의 index 값 */
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
  margin-left: 2vw;
  margin-right: 2vw;
`
var Main_title_hello = styled.span`
    font-family: Noto Sans KR,sans-serif;
    font-size: 2vw;
    background-image: radial-gradient(circle farthest-corner at center center, #fff 0%, #fff 50%, transparent 50.1%);
    background-position: 50% 50%;
    background-size: 0% 0%;
    /* 글자 이미지 정가운데 배치 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translateX(-50%);
    ${customMedia.lessThan('maxmobile')`
      top: 50%;
      font-size: 3vw;
    `}
  `
var Main_title_about = styled.span`
    white-space: pre;
    font-family: Noto Sans KR,sans-serif;
    font-size: 2vw;
    background-image: radial-gradient(circle farthest-corner at center center, #fff 0%, #fff 50%, transparent 50.1%);
    background-position: 50% 50%;
    background-size: 0% 0%;
    /* 글자 이미지 정가운데 배치 */
    position: absolute;
    top: 50%;
    left: 50%; 
    transform:translateX(-50%);
    ${customMedia.lessThan('maxmobile')`
      top: 50%;
      font-size: 3vw;
  `}
`

class Main extends React.Component {
    render() {
        return (
            <Maindisplay id = "Maindisplay">
                <Main_title_hello className = "main_title_hello"><Main_h1>안녕하세요</Main_h1></Main_title_hello>
                <Main_title_about className = "main_title_about"><Main_h1>신준현의 포트폴리오입니다</Main_h1></Main_title_about>
            </Maindisplay>
        )
    }
}

// 메인 타이틀 interval animation
var mainTitle = document.getElementsByClassName('main_title_hello');
var toggle = false;
var handle = true;
// 윈도우 시작 시 interval()함수 실행
window.onload = function() {
  console.log(mainTitle);
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

export default Main;