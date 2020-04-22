import React from 'react';
import profile from '../images/JoonHyun.jpg';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress'
import { generateMedia } from 'styled-media-query';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const Me = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    ${customMedia.lessThan('maxmobile')`
        flex-wrap: wrap;
    `}
`
const Index = styled.div`
    height: fit-content;
    white-space: pre-line;
    margin-top: 1.5vw;
    margin-left: 1.5vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.2vw;
    font-weight: 900;
    ${customMedia.lessThan('maxmobile')`
        width: 100%;
    `}
`
const Img = styled.div`
    background: radial-gradient(
        rgba(255, 255, 255, 0) 55%, 
        rgba(255, 255, 255, 0.3) 60%, 
        rgba(255, 255, 255, 0.4) 61%, 
        rgba(255, 255, 255, 0.5) 62%, 
        rgba(255, 255, 255, 0.6) 63%, 
        rgba(255, 255, 255, 0.7) 64%, 
        rgba(255, 255, 255, 0.8) 65%, 
        rgba(255, 255, 255, 0.9) 66%, 
        rgba(255, 255, 255, 1) 70%, 
        rgba(255, 255, 255, 1) 100%
    ), url(${ profile });
    background-size: 100%;
    margin: 0 auto;
    margin-top: 7vw;
    margin-bottom: 3vw;
    margin-left: 5vw;
    margin-right: 8vw;
    overflow: hidden;
    border-radius: 50%;
    width: 15%;
    height: 20vw;
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-top: 5vw;
        margin-bottom: 3vw;
        width: 30%;
        height: 40vw;
        text-align: center;
    `}
`
const About = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 6vw;
    width: 65%;
    ${customMedia.lessThan('maxmobile')`
        display: flex;
        flex-direction: row;
        margin-top: 0;
        width: 100%;
    `}
`
const Profile = styled.div`
    margin-top: 3vw;
    margin-bottom: 3vw;
    margin-right: 5vw;
    width: 100%;
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-top: 5vw;
        width: 80%;
        height: auto;
        margin-bottom: 5vw;
    `}
`
const Title = styled.div`
    width: fit-content;
    height: fit-content;
    margin-bottom: 1.5vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 3vw;
    text-decoration: none;
    border-bottom: 0.15vw solid #FACC2E;
    padding-bottom:0.5vw;
    ${customMedia.lessThan('maxmobile')`
        font-size: 4vw;
        width: fit-content;
        margin: 0%;
    `}
`
const About_me = styled(Profile)`
`
const Profile_title = styled(Title)`
`
const About_title = styled(Title)`
`
const Profile_content = styled.div`
    text-align: justify;
    width: auto;
    line-height: 2.2vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.2vw;
    top: 32%;
    white-space: pre-line;
    ${customMedia.lessThan('maxmobile')`
        font-size: 3vw;
        line-height: 4vw;
        width: 100%;
        left: 50%;
        margin-top: 3vw;
    `}
`
const About_content = styled(Profile_content)`
`
const Name = styled.h2`
    margin: 0;
    display: inline;
`
const Skill = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 6vw;
    padding-top: 6vw;
    ${customMedia.lessThan('maxmobile')`
        width: 80%;
    `}
`
const Skill_title = styled(Title)`
    margin: 0 auto;
    margin-bottom: 4vw;
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-bottom: 4vw;
        font-size: 4vw;
        width: fit-content;
    `}
`
const Skill_body = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
    `}
`
const Skills = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    margin-left: 4vw;
    margin-right: 4vw;
    width: fit-content;
    align-items: center;
    justify-content: center;
    ${customMedia.lessThan('maxmobile')`
        margin-left: 3.4vw;
        margin-right: 3.4vw;
    `}
    ${customMedia.lessThan('maxmobile')`
        margin-left: 2.5vw;
        margin-right: 2.5vw;
    `}
`
const Skills_title = styled.div`
    margin: 0 auto;
    margin-bottom: 2.5vw;
    width: fit-content;
    font-family: JejuGothic, NanumGothic;
    font-size: 2vw;
`
const Skills_content = styled.div`
    position: absolute;
    margin: 0 auto;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.5vw;
    top: 60%;
    left: 50%;
    transform:translateX(-50%);
`

class Info_me extends React.Component {
    state = {
        scrollTop: 0,
        HTML5: 0,
        CSS3: 0,
        JavaScript: 0,
        NodeJS: 0,
        ReactJS: 0
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        setInterval(this.progress, 20); // 0.02초마다 progress함수가 실행됨
    }

    onScroll = (e) => {
        const { scrollTop } = this.state;
        this.scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        this.setState({ scrollTop: this.scrollTop });
    }

    // 애니메이션 함수
    progress = () => {
        const { HTML5, CSS3, JavaScript, NodeJS, ReactJS } = this.state;
        const skillHeight = document.querySelector("#Skill").offsetHeight;
        const skillTop = document.querySelector("#Skill").offsetTop;

        if(skillTop - skillHeight < this.scrollTop) {
            this.setState(
                { HTML5: HTML5 >= 80 ? 80 : HTML5 + 1,
                CSS3: CSS3 >= 50 ? 50 : CSS3 + 1,
                JavaScript: JavaScript >= 70 ? 70 : JavaScript + 1,
                NodeJS: NodeJS >= 30 ? 30 : NodeJS + 1,
                ReactJS: ReactJS >= 20 ? 20 : ReactJS + 1 }
            )
        }
    }

    render() {
        const { classes } = this.props;
        const { HTML5, CSS3, JavaScript, NodeJS, ReactJS } = this.state;
        return (
            <Me id = "Me">
                <Index>SHIN <br></br> ; <br></br> PORT <br></br> FOLIO</Index>

                <Img></Img>

                <About>
                    {/* profile */}
                    <Profile>
                        <Profile_title>Profile</Profile_title>
                        <Profile_content>
                            <Name>신준현 Shin Joon Hyun</Name>&emsp;1994.09.19<p></p>
                            한신대학교 e-비즈니스학 학사<br></br>
                            &lt; KH 정보교육원 &gt; JAVA 프레임워크 개발자 양성과정 수료<p></p>
                            <b>#ETC</b><br></br>
                            정보처리기사
                        </Profile_content>
                    </Profile>
                    
                    {/* about_me */}
                    <About_me>
                        <About_title>About Me</About_title>
                        <About_content>
                            대학교3학년 새로운 학과환경 속에서 아두이노를 통해 코딩을 처음 접하게 되었습니다. 
                            제가 직접 프로그래밍하여 결과물을 만들어 내는것에 재미를 느끼게 되었고 
                            대학교 동아리 활동을 통해 학과 전시회에 직접 참여하여 기본적인 코딩실력을 길러왔습니다.
                            이후 웹 프로그래밍 수업을 통해 Java와 JavaScript라는 언어를 접하여 
                            웹 개발에 대해 흥미를 느끼게 되었고 웹 개발자의 꿈을 가지게 되었습니다. <p></p>
                            졸업 후 개발자의 꿈에 더 다가가기 위하여 국비지원 학원을 선택하게 되었고 직접 프로젝트에
                            참여하여 웹 개발에 대한 지식을 늘려갔습니다.
                            현재는 제가 가진 프로젝트를 관리하기 위하여 리액트 독학하여 정적인 포트폴리오 사이트를
                            개발하고 있습니다. 앞으로 front-end와 back-end가리지 않고 모든 부분을 담당할 수 있는
                            개발자를 목표로 꾸준히 공부하여 회사와 같이 성장할 수 있는 사원이 되겠습니다.
                        </About_content>
                    </About_me>
                </About>

                <Skill id = "Skill">
                    <Skill_title>Skill</Skill_title>

                    <Skill_body>
                        <Skills>
                            <Skills_title>HTML5</Skills_title>
                            <Skills_content>{ Math.floor(HTML5) }%</Skills_content>
                            <CircularProgress className = { classes } variant = "static" value = { HTML5 } color = "secondary" size = { '10vw' }/>
                        </Skills>

                        <Skills>
                            <Skills_title>CSS3</Skills_title>
                            <Skills_content>{ Math.floor(CSS3) }%</Skills_content>
                            <CircularProgress className = { classes } variant = "static" value = { CSS3 } color = "secondary" size = { '10vw' }/>
                        </Skills>

                        <Skills>
                            <Skills_title>JavaScript</Skills_title>
                            <Skills_content>{ Math.floor(JavaScript) }%</Skills_content>
                            <CircularProgress className = { classes } variant = "static" value = { JavaScript } color = "secondary" size = { '10vw' }/>
                        </Skills>

                        <Skills>
                            <Skills_title>NodeJS</Skills_title>
                            <Skills_content>{ Math.floor(NodeJS) }%</Skills_content>
                            <CircularProgress className = { classes } variant = "static" value = { NodeJS } color = "secondary" size = { '10vw' }/>
                        </Skills>

                        <Skills>
                            <Skills_title>ReactJS</Skills_title>
                            <Skills_content>{ Math.floor(ReactJS) }%</Skills_content>
                            <CircularProgress className = { classes } variant = "static" value = { ReactJS } color = "secondary" size = { '10vw' }/>
                        </Skills>
                    </Skill_body>

                </Skill>
            </Me>
        )
    }
}

export default Info_me;