import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const Me = styled.div`
    display: flex;
    ${customMedia.lessThan('maxmobile')`
        flex-wrap: wrap;
        width: 100%;
        height: auto;
    `}
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
const Infome = styled.div`
    width: fit-content;
    text-align: center;
    margin-right: 5vw;
    margin-top: 5vw;
    margin-bottom: 5vw;
    ${customMedia.lessThan('maxmobile')`
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        margin-top: 2vw;
        width: 100%;
        height: auto;
        text-align: justify;
    `}
    ${customMedia.lessThan('minmobile')`
        display: flex;
        flex-direction: column;
        margin-left: 0;
    `}
`
const Img = styled.div`
    margin: 0 auto;
    margin-bottom: 3vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 50%;
    height: 50%;
    ${customMedia.lessThan('maxmobile')`
        margin-right: 2vw;
        margin-left: 5vw;
        width: 25%;
        height: auto;
    `}
    ${customMedia.lessThan('minmobile')`
        margin: 0 auto;
        width: 30%;
        text-align: center;
    `}
`
const Photo = styled.img`
    width: 100%;
    height: auto;
`
const Info_me_child = styled.div`
    ${customMedia.lessThan('minmobile')`
        margin: 0 auto;
    `}
`
const Name = styled.div`
    text-align:center;
    margin-bottom: 5vw;
    white-space: pre;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.5vw;
    ${customMedia.lessThan('maxmobile')`
        white-space: pre-line;
        text-align: justify;
        margin-top: 8vw;
        font-size: 4vw;
    `}
    ${customMedia.lessThan('minmobile')`
        text-align: center;
    `}
`
const Info = styled.div`
    text-align:center;
    white-space: pre;
    font-family: JejuGothic, NanumGothic;
    font-size: 1vw;
    ${customMedia.lessThan('maxmobile')`
        white-space: pre-line;
        text-align: justify;
        width: fit-content;
        margin-top: 10vw;
        font-size: 2.5vw;
    `}
    ${customMedia.lessThan('minmobile')`
        text-align: center;
        margin-bottom: 5vw;
    `}
`
const About_me = styled.div`
    position: relative;
    margin-right: 5vw;
    width: 100%;
    ${customMedia.lessThan('maxmobile')`
        position: unset;
        margin: 0 auto;
        margin-top: 5vw;
        width: 80%;
        left: 50%;
        height: auto;
        margin-bottom: 5vw;
    `}
`
const About_title = styled.div`
    position: absolute;
    width: auto;
    top: 17%;
    font-family: JejuGothic, NanumGothic;
    font-size: 3vw;
    text-decoration: none;
    border-bottom: 0.15vw solid #FACC2E;
    padding-bottom:0.5vw;
    ${customMedia.lessThan('maxmobile')`
        position: unset;
        font-size: 4vw;
        width: fit-content;
        margin: 0%;
    `}
`
const About_content = styled.div`
    position: absolute;
    text-align: justify;
    width: auto;
    line-height: 2.2vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.2vw;
    top: 32%;
    white-space: pre-line;
    ${customMedia.lessThan('maxmobile')`
        position: unset;
        font-size: 3vw;
        line-height: 4vw;
        width: 100%;
        left: 50%;
        margin-top: 3vw;
    `}
`

class Info_me extends React.Component {
    render() {
        return (
            <Me id = "Me">
                <Index>{this.props.index}</Index>

                <Infome>
                    <Img><Photo src = {this.props.image} alt = "profile"/></Img>
                    <Info_me_child>
                        <Name><b>{this.props.name}</b></Name>
                        <Info>{this.props.about}</Info>
                    </Info_me_child>
                </Infome>

                <About_me>
                    <About_title>About Me</About_title>
                    <About_content>{this.props.aboutContent}</About_content>
                </About_me>
            </Me>
        )
    }
}

export default Info_me;