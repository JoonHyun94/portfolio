import React from 'react';
import kh_project_img from '../images/kh_project_img.png';
import pf_project_img from '../images/pf_project_img.png'
import mobile from '../images/mobile.png'
import git_img from '../images/github.png';
import finger from '../images/finger.png';
import styled, { keyframes } from 'styled-components';
import Khdetail from "./kh_project";
import { generateMedia } from 'styled-media-query';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const click = keyframes`
    from { top: 0; }
    to { top: -0.5vw; }
`

const Projectdisplay = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    // background-color: #d2e6f1;
    height: auto;
`
const Index = styled.div`
    float: left;
    height: auto;
    white-space: pre-line;
    margin-top: 1.5vw;
    margin-left: 1.5vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.2vw;
    font-weight: 900;
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
    padding-bottom: 0.5vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 2vw;

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
    margin: 0 auto;
    margin-top: 3vw;
    margin-bottom: 3vw;
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
    margin-top: 2vw;
    margin-bottom: 2vw;
    margin-left: 4vw;
    width: 85%;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.2vw;

    ${customMedia.lessThan('maxmobile')`
        margin-left: 0;
        margin-bottom: 3vw;
        text-align: center;
        width: 100%;
        font-size: 2.5vw;
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
    margin-bottom: 2vw;
    width: 55%;
    height: auto;

    ${customMedia.lessThan('maxmobile')`
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: 0 auto;
        margin-bottom: 5vw;
    `}
`
const Project_img = styled.div`
    display: flex;
    position: relative;
    margin-left: 1vw;
    align-items: center;
    width: 43%;
    height: auto;
    margin-right: 3vw;
    bottom: ${ props => props.mobileImg ? '2vw' : ""};
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-bottom: 2vw;
        width: 80%;
        height: auto;
        bottom: ${ props => props.mobileImg ? '-2vw' : ""};
    `}
`
const Img = styled.img`
    filter: drop-shadow(10px 10px 10px black);
    border-radius: 1vw;
    width: 100%;
    height: auto;
`
const Project_content_title = styled.h1`
    margin-bottom: 1vw;
    width: 85%;
    font-family: JejuGothic, NanumGothic;
    font-size: 1vw;
    ${customMedia.lessThan('maxmobile')`
        margin-bottom: 1vw;
        width: 100%;
        font-family: JejuGothic, NanumGothic;
        font-size: 2.5vw;
    `}
`
const Project_content = styled.div`
    margin-left: 4vw;
    margin-right: 1vw;
    display: flex;
    flex-direction: column;
    text-align: justify;
    justify-content: center;
    width: 40%;
    height: auto;

    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        width: 80%;
    `}
`
const Project_introduction = styled.div`
    margin-bottom: 0.7vw;
    white-space: pre-line;
    font-family: JejuGothic, NanumGothic;
    font-size: 0.7vw;
    line-height: 1vw;

    ${customMedia.lessThan('900px')`
       line-height: 1.2vw;
    `}
    ${customMedia.lessThan('700px')`
        line-height: 1.3vw;
    `}
    ${customMedia.lessThan('maxmobile')`
        margin-bottom: 3vw;
        font-size: 1.5vw;
        line-height: 2.5vw;
    `}
`
const Project_myrule = styled.div`
    white-space: pre-line;
    font-family: JejuGothic, NanumGothic;
    font-size: 0.7vw;
    line-height: 1vw;

    ${customMedia.lessThan('900px')`
       line-height: 1.2vw;
    `}
    ${customMedia.lessThan('700px')`
        line-height: 1.3vw;
    `}
    ${customMedia.lessThan('maxmobile')`
        font-size: 1.5vw;
        line-height: 2.5vw;
    `}
`
const Skill = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 2vw;
    margin-left: 4vw;
    margin-bottom: 1vw;
    width: 80%;
    height: fit-content;

    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-top: 2vw;
        width: 80%;
    `}
`
const Skills = styled.div`
    cursor: pointer;
    color: rgb(31, 100, 165);
    margin-right: 2vw;
    width: fit-content;
    height: fit-content;
    font-family: JejuGothic, NanumGothic;
    font-size: 0.9vw;

    ${customMedia.lessThan('maxmobile')`
        font-size: 1.5vw;
        line-height: 3vw;
    `}
`
const Git = styled.div`
    width: auto;
    height: auto;
    margin: 2vw;
    margin-right: 4vw;
    margin-left: 0;
        
    ${customMedia.lessThan('maxmobile')`
        height: auto;
        margin: 2vw;
        margin-left: 85%;
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
    width: 2vw;
    height: auto;
            
    ${customMedia.lessThan('maxmobile')`
        width: 4vw;
        height: auto;
    `}
`
const Left = styled.div`
    cursor: pointer;
    content: '';
    opacity: 0.6;
    &:before {
        content: '';
        position: absolute;
        top: 48%;
        left: 15vw;
        height: 2vw;
        border: solid black;
        border-radius: 15px;
        border-width: 0.15vw 0.2vw 0.7vw 0.1vw;
        transform: rotate(45deg);
    }
    &:after {
        content: '';
        position: absolute;
        top: 51.7%;
        left: 15vw;
        height: 2vw;
        border: solid black;
        border-radius: 15px;
        border-width: 0.15vw 0.2vw 0.7vw 0.1vw;
        transform: rotate(-45deg);
    }

    ${customMedia.lessThan('maxmobile')`
        &:before {
            top: 49%;
            left: 15vw;
            border-width: 0.15vw 0.2vw 1.5vw 0.2vw;
        }
        &:after {
            top: 50.8%;
            left: 15vw;
            border-width: 0.15vw 0.2vw 1.5vw 0.2vw;
        }
    `}
    ${customMedia.lessThan('408px')`
        &:before {
            top: 49%;
        }
        &:after {
            top: 50.6%;
        }
    `}
`
const Right = styled.div`
    cursor: pointer;
    content: '';
    opacity: 0.6;
    &:before {
        content: '';
        position: absolute;
        top: 48%;
        right: 15vw;
        height: 2vw;
        border: solid black;
        border-radius: 15px;
        border-width: 0.15vw 0.2vw 0.7vw 0.1vw;
        transform: rotate(-45deg);
    }
    &:after {
        content: '';
        position: absolute;
        top: 51.7%;
        right: 15vw;
        height: 2vw;
        border: solid black;
        border-radius: 15px;
        border-width: 0.15vw 0.2vw 0.7vw 0.1vw;
        transform: rotate(45deg);
    }

    ${customMedia.lessThan('maxmobile')`
        &:before {
            top: 49%;
            right: 15vw;
            border-width: 0.15vw 0.2vw 1.5vw 0.2vw;
        }
        &:after {
            top: 50.8%;
            right: 15vw;
            border-width: 0.15vw 0.2vw 1.5vw 0.2vw;
        }
    `}
    ${customMedia.lessThan('408px')`
        &:before {
            top: 49%;
        }
        &:after {
            top: 50.6%;
        }
    `}
`
const Project_popup = styled.a`
    position: relative;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 2vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.5vw;
    animation: ${ click } 0.4s infinite;
    animation-direction: alternate;
    ${customMedia.lessThan('maxmobile')`
        font-size: 2vw;
    `}
    &:hover {
        color: black;
        text-shadow: 2px 2px 2px gray;
    }
`
const Click_finger = styled.img`
    position: absolute;
    width: 20%;
    right: -3vw;

`

class Project extends React.Component {
    state = {
        modalOpen: false,
        divPosition: 0,
        zzz: false
    }

    componentDidUpdate () {
        this.state.divPosition = document.body.offsetWidth;
    }

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
            increment = 0.5 // 현재 시간 증가 값
                        
        var animateScroll = () => {
            currentTime += increment; // 현재시간에 0.5씩 증가
            var val = this.moveWidth(currentTime, start, change, duration); // 움직일 width값 구하기
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

    goBack (changeText) {
        if(changeText === 'Project 상세보기') {
            this.setState({ text: 'Project 닫기' });
        } else {
            this.props.history.go(-1);
            this.setState({ text: 'Project 상세보기' });
        }
    }
    
    openModal = () => {
        this.setState({ modalOpen: true });
    }
    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    render() {
        return (
             <Projectdisplay id = "Projectdisplay">
                <Index>SHIN <br></br> ; <br></br> PORT <br></br> FOLIO</Index>
                <Project_title>Project</Project_title>

                <Scroll_body id = "scroll">
                    { project_array.map(p => {
                        return <Project_body key = { p.key }>
                            <Project_detail>
                                <Project_detail_title>{ p.project_detail_title }</Project_detail_title>
                                { this.state.divPosition > 575 ?
                                    <React.Fragment>
                                        <Project_content>
                                            <Project_content_title>Introduction</Project_content_title>
                                            <Project_introduction>{ p.project_intriduction }</Project_introduction>
                                            <Project_content_title>MyRule</Project_content_title>
                                            <Project_myrule>{ p.project_myrule }</Project_myrule>
                                        </Project_content>

                                        <Project_img>
                                            <Img src = { p.project_img }/>
                                            { p.key === 2 ?
                                                <Project_img mobileImg style = {{ position: 'absolute', width: '30%', right: '-3vw', bottom: '0' }}>
                                                    <Img src = { p.mobile_img }/>
                                                </Project_img> 
                                                : ""
                                            }
                                        </Project_img>
                                    </React.Fragment> :
                                    <React.Fragment>
                                        <Project_img>
                                            <Img src = { p.project_img }/>
                                            { p.key === 2 ?
                                                <Project_img mobileImg style = {{ position: 'absolute', width: '30%', right: '-3vw', bottom: '0' }}>
                                                    <Img src = { p.mobile_img }/>
                                                </Project_img> 
                                                : ""
                                            }
                                        </Project_img>

                                        <Project_content>
                                            <Project_content_title>Introduction</Project_content_title>
                                            <Project_introduction>{ p.project_intriduction }</Project_introduction>
                                            <Project_content_title>MyRule</Project_content_title>
                                            <Project_myrule>{ p.project_myrule }</Project_myrule>
                                        </Project_content>
                                    </React.Fragment>
                                }
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

                                { p.key === 1 ?
                                    <React.Fragment>
                                        <Project_popup onClick = { () => this.openModal() }>
                                            Project 상세보기
                                            <Click_finger src = { finger }/>
                                        </Project_popup>
                                        <Khdetail modalOpen = { this.state.modalOpen } modalClose = { this.closeModal }/>
                                    </React.Fragment>
                                    : ""
                                }
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

// project_array
const project_array =  [
    {
        key: 1,
        project_detail_title: 'KHOB(취업정보 사이트)',
        project_img: kh_project_img,
        project_intriduction: `주제 : 취업 정보 통합 포털사이트
                              인원 : 5명(팀장 포함)
                              배경 : 기업에 관한 정보와 취업 정보를 무료로 조회하는 사이트가 존재하지 않음 → "기업조회 + 정보 제공하는 웹사이트"
                              참고 모델 사이트 : 크레딧잡 + 잡코리아 + 자소설 닷컴
                              진행기간 : 2019.06.19 ~ 2019.08.12
                              `,
        project_myrule: `메인 홈페이지 기업검색 기능
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
        git_source: 'https://github.com/yjayo0124/Final'
    },
    {
      key: 2,
      project_detail_title: 'Portfolio',
      project_img: pf_project_img,
      mobile_img: mobile,
      project_intriduction: `주제 : 리액트 기반 포트폴리오 사이트
                            인원 : 1명(본인)
                            배경 : "프로젝트 관리를 위한 정적인 네비게이션 사이트"
                            진행기간 : 2019.03 ~ 
                            `,
      project_myrule:   `전체적인 디자인 및 반응형 웹 적용
                        메인화면 애니메이션
                        Loading 화면 및 Skill progress(Material-ui적용)
                        Project 스크롤 애니메이션
                        `,
      skills: [
          '#React',
          '#JavaScript',
          '#HTML',
          '#CSS',
          '#styled-media-query'
      ],
      git_source: 'https://github.com/JoonHyun94/portfolio'
    }
]

export default Project;