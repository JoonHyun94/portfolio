import React from 'react';
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
    font-family:JejuGothic;
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
    font-family: JejuGothic;
    font-size: 1.5vw;

    ${customMedia.lessThan('maxmobile')`
        font-size: 3vw;
    `}
`
const Project_body = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3vw;
    width: 100%;
    height: auto;

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
    font-family: JejuGothic;
    font-size: 2vw;

    ${customMedia.lessThan('maxmobile')`
        margin-bottom: 3vw;
        text-align: center;
        width: 100%;
        font-size: 3vw;
    `}
`
const Kh_project = styled.div`
    border-radius: 0.5vw;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 
                0 4px 6px -2px rgba(0,0,0,.05);
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 2vw;
    width: 85%;

    ${customMedia.lessThan('maxmobile')`
        display: flex;
        flex-direction: column;
    `}
`
const Kh_project_img = styled.div`
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
const Kh_img = styled.img`
    width: 100%;
    height: auto;
`
const Project_content_title = styled.h1`
    margin-bottom: 1vw;
    width: 85%;
    font-family: JejuGothic;
    font-size: 2vw;

    ${customMedia.lessThan('maxmobile')`
        margin-bottom: 1vw;
        width: 100%;
        font-family: JejuGothic;
        font-size: 4vw;
    `}
`
const Kh_project_content = styled.div`
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
    font-family: JejuGothic;
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
    font-family: JejuGothic;
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
        margin: 0 auto;
        margin-top: 2vw;
        width: 80%;
    `}
`
const Skills = styled.span`
    cursor: pointer;
    background-color: rgb(31, 100, 165);
    margin-right: 2vw;
    width: fit-content;
    height: fit-content;
    font-family: JejuGothic;
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
        width: fit-content;
        height: auto;
        margin: 2vw;
        margin-left: 90%;
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

class Project extends React.Component {
    render() {
        return (
            <Projectdisplay id = "Projectdisplay">
                <Index>{this.props.index}</Index>
                <Project_title><Project_h1>{this.props.projectTitle}</Project_h1></Project_title>
                
                <Project_body>
                    <Kh_project>

                        <Project_detail_title>KHOB(취업정보 사이트)</Project_detail_title>
                        <Kh_project_img>
                            <Kh_img src = {this.props.image} alt = "kh_img"/>
                        </Kh_project_img>

                        <Kh_project_content>
                            <Project_content_title>Introduction</Project_content_title>
                            <Project_introduction>{this.props.khProjectIntroduction}</Project_introduction>
                            <Project_content_title>MyRule</Project_content_title>
                            <Project_myrule>{this.props.khProjectMyrule}</Project_myrule>
                        </Kh_project_content>

                        <Skill>
                            <Skills>#Java</Skills>
                            <Skills>#SpringFramework(MVC)</Skills>
                            <Skills>#JSP</Skills>
                            <Skills>#CSS</Skills>
                            <Skills>#JavaScript</Skills>
                            <Skills>#Ajax</Skills>
                            <Skills>#Oracle</Skills>
                        </Skill>

                        <a href = "www.naver.com">
                            <Git>
                                <Github src = {this.props.github} alt = "github"/>
                            </Git>
                        </a>

                    </Kh_project>
                </Project_body>
            </Projectdisplay>
        )
    }
}

export default Project;