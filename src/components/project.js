import React from 'react';
import kh_project_img from '../images/kh_project_img.jpg';
import pf_project_img from '../images/pf_project_img.png'
import git_img from '../images/github.png';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const Projectdisplay = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background-color: #FBFBEF;
    height: auto;
`
const Index = styled.div`
    float: left;
    height: fit-content;
    white-space: pre-line;
    margin-top: 1.5vw;
    margin-left: 1.5vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.2vw;
    font-weight: 900;
`
const Project_h1 = styled.h1`
    margin: 0 auto;
`
const Project_title = styled.div`
    position: absolute;
    margin-top: 3vw;
    width: fit-content;
    height: fit-content;
    left: 50%;
    transform:translateX(-50%);
    text-decoration: none;
    border-bottom: 0.15vw solid #FACC2E;
    padding-bottom:0.5vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.5vw;

    ${customMedia.lessThan('maxmobile')`
        font-size: 3vw;
    `}
`
const Scroll_body = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    right: 0;
    overflow-x: hidden;
    align-items: center;
`
const Project_body = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3vw;
    width: 100%;
    height: auto;
    right: 0;
    flex-shrink: 0;

    ${customMedia.lessThan('maxmobile')`
        display: flex;
        flex-direction: column;
        margin-top: 5vw;
    `}
`
const Project_detail_title = styled.h1`
    margin-left: 2vw;
    margin-bottom: 1vw;
    width: 85%;
    font-family: JejuGothic, NanumGothic;
    font-size: 2vw;

    ${customMedia.lessThan('maxmobile')`
        margin-left: 0;
        margin-bottom: 3vw;
        text-align: center;
        width: 100%;
        font-size: 3vw;
    `}
`
const Project_detail = styled.div`
    border-radius: 0.5vw;

    // box-shadow:  x-positon(가로) 0, 
    //              y-position(세로) 10, 4px로 양옆으로 그림자생성,
    //              blur(흐림) 15, 6px로 흐림적용, 
    //              spread(그림자 확장) -3, -2px,
    //              color(색상) rgba로 투명도 적용
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),
                0 4px 6px -2px rgba(0,0,0,0.05);
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-left: 8vw;
    margin-right: 8vw;
    margin-bottom: 2vw;
    width: 90%;
    height: auto;

    ${customMedia.lessThan('maxmobile')`
        display: flex;
        flex-direction: column;
        width: 85%;
        margin-left: 7.5vw;
        margin-bottom: 5vw;
    `}
`
const Project_img = styled.div`
    display: flex;
    margin-left: 2vw;
    align-items: center;
    width: 35%;
    height: auto;
    margin-right: 1vw;

    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-bottom: 2vw;
        width: 80%;
        height: auto;
    `}
`
const Img = styled.img`
    width: 100%;
    height: auto;
`
const Project_content_title = styled.h1`
    margin-bottom: 1vw;
    width: 85%;
    font-family: JejuGothic, NanumGothic;
    font-size: 2vw;

    ${customMedia.lessThan('maxmobile')`
        margin-bottom: 1vw;
        width: 100%;
        font-family: JejuGothic, NanumGothic;
        font-size: 4vw;
    `}
`
const Project_content = styled.div`
    margin-left: 1vw;
    display: flex;
    flex-direction: column;
    text-align: justify;
    width: 60%;
    height: auto;

    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        width: 80%;
    `}
`
const Project_introduction = styled.div`
    margin-bottom: 4vw;
    white-space: pre-line;
    font-family: JejuGothic, NanumGothic;
    font-size: 1vw;
    line-height: 2vw;

    ${customMedia.lessThan('maxmobile')`
        margin-bottom: 3vw;
        font-size: 3vw;
        line-height: 4vw;
    `}
`
const Project_myrule = styled.div`
    white-space: pre-line;
    font-family: JejuGothic, NanumGothic;
    font-size: 1vw;
    line-height: 2vw;

    ${customMedia.lessThan('maxmobile')`
        font-size: 3vw;
        line-height: 4vw;
    `}
`
const Skill = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 2vw;
    margin-left: 2vw;
    margin-bottom: 1vw;
    width: 85%;
    height: fit-content;

    ${customMedia.lessThan('maxmobile')`
        position: relative;
        margin-top: 2vw;
        margin-left: 0;
        width: 80%;
        left: 10%;
        right: 10%;
    `}
`
const Skills = styled.div`
    cursor: pointer;
    color: rgb(31, 100, 165);
    margin-right: 2vw;
    width: fit-content;
    height: fit-content;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.5vw;

    ${customMedia.lessThan('maxmobile')`
        font-size: 2.5vw;
        line-height: 3vw;
    `}
`
const Git = styled.div`
    width: fit-content;
    height: auto;
    margin: 2vw;
        
    ${customMedia.lessThan('maxmobile')`
        height: auto;
        margin: 2vw;
        margin-left: 90%;
        bottom: 1vw;
    `}
`
const Git_link = styled.a`
    ${customMedia.lessThan('maxmobile')`
        right: 0;
        width: 100%;
        height: 100%;
    `}
`
const Github = styled.img`
    width: 4vw;
    height: auto;
            
    ${customMedia.lessThan('maxmobile')`
        width: 6vw;
        height: auto;
    `}
`
const Left = styled.div`
    cursor: pointer;
    content: '';
    opacity: 0.7;
    &:before {
        content: '';
        position: absolute;
        top: 48%;
        left: 3vw;
        height: 3vw;
        border: solid black;
        border-radius: 5px;
        border-width: 0 0.7vw 0.7vw 0;
        transform: rotate(45deg);
    }
    &:after {
        content: '';
        position: absolute;
        top: 52%;
        left: 3vw;
        height: 3vw;
        border: solid black;
        border-radius: 5px;
        border-width: 0 0.7vw 0.7vw 0;
        transform: rotate(-45deg);
    }

    ${customMedia.lessThan('maxmobile')`
        &:before {
            top: 49%;
            border-width: 1.6vw 1vw 1vw 0;
        }
        &:after {
            top: 51%;
            border-width: 1.6vw 1vw 1vw 0;
        }
    `}
`
const Right = styled.div`
    cursor: pointer;
    content: '';
    opacity: 0.7;
    &:before {
        content: '';
        position: absolute;
        top: 48%;
        right: 3vw;
        height: 3vw;
        border: solid black;
        border-radius: 5px;
        border-width: 0 0.7vw 0.7vw 0;
        transform: rotate(-45deg);
    }
    &:after {
        content: '';
        position: absolute;
        top: 52%;
        right: 3vw;
        height: 3vw;
        border: solid black;
        border-radius: 5px;
        border-width: 0 0.7vw 0.7vw 0;
        transform: rotate(45deg);
    }

    ${customMedia.lessThan('maxmobile')`
        &:before {
            top: 49%;
            border-width: 1.6vw 1vw 1vw 0;
        }
        &:after {
            top: 51%;
            border-width: 1.6vw 1vw 1vw 0;
        }
    `}
`

class Project extends React.Component {

    // project 가로 스크롤
    // scrollLeft, Right(element: scroll, 변경할 값: 엘리먼트width, 종료시점: 10)
    scrollToLeft () {
        this.scrollHorizontal(document.getElementById('scroll'), -(document.getElementById('scroll').offsetWidth), 10);   
    }

    scrollToRight () {
        this.scrollHorizontal(document.getElementById('scroll'), document.getElementById('scroll').offsetWidth, 10);   
    }

    scrollHorizontal = (element, change, duration) => {
        var start = element.scrollLeft, // 스크롤 시작지점
            currentTime = 0, // 현재 시간
            increment = 0.5, // 현재 시간 증가 값
            aa = 100;
            
        console.log("start : " + start)
            
        var animateScroll = () => {
            currentTime += increment; // 현재시간에 0.5씩 증가
            var val = this.moveWidth(currentTime, start, change, duration); // 움직일 width값 구하기
            console.log(val);
            element.scrollLeft = val; // 스크롤 시작지점(움직여진 width값 부터 시작)
            if(currentTime < duration) { // 현재시간이 종료시점보다 작을 경우
                setTimeout(animateScroll, 0); // setTimeout으로 재귀함수 실행
            }
        };
        animateScroll(); // 화살표 클릭 시 animateScroll 첫 시작
    }

    // 움직일 width값 계산
    moveWidth = (currentTime, start, change, duration) => {
        currentTime /= duration / 2; // 현재시간 0.1씩 증가
            if (currentTime < 1) {
                return change / 2 * currentTime * currentTime + start;
            }
            currentTime--;
            return -change / 2 * ( currentTime * ( currentTime - 2 ) - 1 ) + start;
    };

    render() {
        return (
             <Projectdisplay id = "Projectdisplay">
                <Index>SHIN <br></br> ; <br></br> PORT <br></br> FOLIO</Index>
                <Project_title><Project_h1>Project</Project_h1></Project_title>

                <Scroll_body id = "scroll">
                    { project_array.map(p => { 
                        return <Project_body key = { p.key }>
                            <Project_detail>
                                <Project_detail_title>{ p.project_detail_title }</Project_detail_title>
                                <Project_img>
                                    <Img src = { p.project_img } alt = "project_img"/>
                                </Project_img>

                                <Project_content>
                                    <Project_content_title>Introduction</Project_content_title>
                                    <Project_introduction>{ p.project_intriduction }</Project_introduction>
                                    <Project_content_title>MyRule</Project_content_title>
                                    <Project_myrule>{ p.project_myrule }</Project_myrule>
                                </Project_content>

                                <Skill>
                                    { p.skills.map(s => { 
                                        return <Skills>{ s }</Skills>
                                    })}
                                </Skill>

                                <Git>
                                    <Git_link href = { p.git_source }>
                                            <Github src = { git_img } alt = "github"/>
                                    </Git_link>
                                </Git>

                            </Project_detail>
                        </Project_body>
                    })}
                </Scroll_body>
                <Left onClick = { () => this.scrollToLeft() }></Left>
                <Right onClick = { () => this.scrollToRight() }></Right>
            </Projectdisplay>
        )
    }
}

// 프로젝트 배열
const project_array =  [
    {
        key : 1,
        project_detail_title: 'KHOB(취업정보 사이트)',
        project_img: kh_project_img,
        project_intriduction: `
                              주제 : 취업 정보 통합 포털사이트
                              인원 : 5명(팀장 포함)
                              배경 : 기업에 관한 정보와 취업 정보를 무료로 조회하는 사이트가 존재하지 않음 → "기업조회 + 정보 제공하는 웹사이트"
                              참고 모델 사이트 : 크레딧잡 + 잡코리아 + 자소설 닷컴
                              진행기간 : 2019.06.19 ~ 2019.08.12
                              `,
        project_myrule: `
                        메인 홈페이지 기업검색 기능
                        검색한 기업의 간략한 정보 게시판
                        기업리뷰게시판 (게시글 CRUD, 게시글 추천, 댓글 작성 및 추천)
                        `,
        skills: [
            '#Java',
            '#SpringFramework(MVC)',
            '#JSP',
            '#CSS',
            '#JavaScript',
            '#Ajax',
            '#Oracle'
        ],
        git_source: 'https://github.com/JoonHyun94/Final'
    },
    {
      key : 2,
      project_detail_title: 'Portfolio',
      project_img: pf_project_img,
      project_intriduction: `
                            주제 : 리액트 기반 포트폴리오 사이트
                            인원 : 1명(본인)
                            배경 : "프로젝트 관리를 위한 프로젝트 네비게이션 사이트"
                            참고 모델 사이트 : "이규한의 포트폴리오"
                            진행기간 : 2019.03 ~ 
                            `,
      project_myrule: `
                      전체적인 사이트 개발
                      `,
      skills: [
          '#React',
          '#Node.js',
          '#yarn',
          '#Component-style',
          '#React-Motion',
          '#React-scroll',
          '#styled-media-query'
      ],
      git_source: 'https://github.com/JoonHyun94/portfolio'
    }
  ]

export default Project;