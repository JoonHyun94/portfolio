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
    float: left;
    width: 100%;
    height: 0;
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
const Me_body = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin: 0 auto;
    ${customMedia.lessThan('maxmobile')`
        width: 70%;
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
    margin-right: 5vw;
    overflow: hidden;
    border-radius: 50%;
    width: 17%;
    height: 14vw;
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-top: 5vw;
        margin-bottom: 3vw;
        width: 30%;
        height: 25vw;
        text-align: center;
    `}
`
const About = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 6vw;
    width: 70%;
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
    width: 100%;
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-top: 2vw;
        margin-bottom: 6vw;
        width: 80%;
        height: auto;
    `}
`
const Title = styled.div`
    display:table;
    margin-bottom: 2vw;
    width: auto;
    height: auto;
    font-family: JejuGothic, NanumGothic;
    font-size: 2vw;
    text-decoration: none;
    border-bottom: 0.15vw solid #FACC2E;
    padding-bottom:0.5vw;
    ${customMedia.lessThan('maxmobile')`
        display:table;
        margin-bottom: 2vw;
        font-size: 3vw;
        width: auto;
        white-space: pre;
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
    line-height: 1.5vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 0.9vw;
    top: 32%;
    white-space: pre-line;
    ${customMedia.lessThan('maxmobile')`
        font-size: 2vw;
        line-height: 4vw;
        width: 100%;
        left: 50%;
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
    width: 60%;
    margin: 0 auto;
    margin-bottom: 6vw;
    padding-top: 6vw;
    ${customMedia.lessThan('maxmobile')`
        width: 70%;
    `}
`
const Skill_title = styled(Title)`
    margin: 0 auto;
    margin-bottom: 0.9vw;
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
        margin-bottom: 4vw;
        font-size: 3vw;
        width: fit-content;
    `}
`
const Skill_body = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    align-items: center;
    justify-content: center;
    ${customMedia.lessThan('maxmobile')`
        margin: 0 auto;
    `}
`
const Skills = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    margin-left: 2vw;
    margin-right: 2vw;
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
    margin-top: 2.5vw;
    margin-bottom: 2.5vw;
    width: fit-content;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.2vw;
    ${customMedia.lessThan('maxmobile')`
        font-size: 1.6vw;
    `}
`
const Skills_content = styled.div`
    position: absolute;
    margin: 0 auto;
    font-family: JejuGothic, NanumGothic;
    font-size: 0.9vw;
    top: 70%;
    left: 50%;
    transform:translateX(-50%);
    ${customMedia.lessThan('maxmobile')`
        top: 68%;
        font-size: 1.2vw;
    `}
`

class Info_me extends React.Component {
    state = {
        scrollTop: 0,
        Java: 0,
        Oracle: 0, 
        JavaScript: 0, 
        HTML5: 0, 
        CSS3: 0, 
        NodeJS: 0, 
        ReactJS: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        setInterval(this.progress, 20); // 0.02초마다 progress함수가 실행됨
    }

    onScroll = () => {
        const moveScroll = (window.scrollY || document.documentElement.scrollTop); // 크로스 브라우징(IE)
        this.setState({ scrollTop: moveScroll });
    }

    progress = () => {
        const { scrollTop, Java, HTML5, Oracle, CSS3, JavaScript, NodeJS, ReactJS } = this.state;
        const skillHeight = document.querySelector("#Skill").offsetHeight; // skill element height(높이)
        const skillTop = document.querySelector("#Skill").offsetTop; // skill element top(최상단 과의 거리)
        const windowHeight = window.innerHeight; // viewport 높이

        if(scrollTop + windowHeight >= skillTop + skillHeight) {
            this.setState(
                { Java: Java >= 70 ? 70 : Java + 10,
                Oracle: Oracle >= 60 ? 60 : Oracle + 10,
                HTML5: HTML5 >= 70 ? 70 : HTML5 + 10,
                CSS3: CSS3 >= 70 ? 70 : CSS3 + 10,
                JavaScript: JavaScript >= 60 ? 60 : JavaScript + 10,
                NodeJS: NodeJS >= 40 ? 40 : NodeJS + 10,
                ReactJS: ReactJS >= 40 ? 40 : ReactJS + 10 }
            )
        }
    }

    render() {
        const { classes } = this.props;
        const { Java, Oracle, HTML5, CSS3, JavaScript, NodeJS, ReactJS } = this.state;
        
        // skills_array
        const skills_array = [
            {
                key: 1,
                skills_title: 'Java',
                skills_content: Java,
            },
            {
                key: 2,
                skills_title: 'Oracle',
                skills_content: Oracle,
            },
            {
                key: 3,
                skills_title: 'HTML5',
                skills_content: HTML5,
            },
            {
                key: 4,
                skills_title: 'CSS3',
                skills_content: CSS3,
            },
            {
                key: 5,
                skills_title: 'JavaScript',
                skills_content: JavaScript,
            },
            {
                key: 6,
                skills_title: 'NodeJS',
                skills_content: NodeJS,
            },
            {
                key: 7,
                skills_title: 'ReactJS',
                skills_content: ReactJS,
            }
        ]

        return (
            <Me id = "Me">
                <Index>SHIN <br></br> ; <br></br> PORT <br></br> FOLIO</Index>
                
                <Me_body>
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
                </Me_body>

                <Skill id = "Skill">
                    <Skill_title>Skill</Skill_title>
                    <Skill_body>
                        { skills_array.map(s => {
                            return <Skills key = { s.key }>
                                <Skills_title>{ s.skills_title }</Skills_title>
                                <Skills_content>{ Math.floor(s.skills_content) }%</Skills_content>
                                <CircularProgress className = { classes } variant = "static" value = { s.skills_content } color = "secondary" size = { '7vw' }/>
                            </Skills>
                        })}
                    </Skill_body>
                </Skill>
            </Me>
        )
    }
}

export default Info_me;