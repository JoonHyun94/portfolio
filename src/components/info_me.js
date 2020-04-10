import React from 'react';
import profile from '../images/JoonHyun.jpg';
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
                <Index>SHIN <br></br> ; <br></br> PORT <br></br> FOLIO</Index>

                <Infome>
                    <Img><Photo src = { profile } alt = "profile"/></Img>
                    <Info_me_child>
                        <Name><b>신준현(Shin Joon Hyun)</b></Name>
                        <Info>
                            한신대학교 e-비즈니스학 학사<br></br><br></br>
                            &lt; KH 정보교육원 &gt; 자바(JAVA) 프레임워크 개발자 양성과정
                        </Info>
                    </Info_me_child>
                </Infome>

                <About_me>
                    <About_title>About Me</About_title>
                    <About_content>
                        어릴때 부터 호기심이 많은 성격에 만들어 보았던 간단한 계산기 프로그램으로 무언가를 
                        만드는 것의 재미를 느끼게 되었고 그때부터 개발자를 꿈꾸게 되었습니다. 
                        그래서 대학교에서 동아리활동을 통해 자연스럽게 많은것을 개발하게 될 수 있었습니다.
                        그 중 Javascript가 가지고 있는 가능성과 다양성에 매력을 느끼게 되어
                        웹 어플리케이션 개발자가 되기 위해 많은 노력을 하고 있습니다.<p></p>
                        저는 제 목표를 '잘하는' 개발자로 삼아서 더 공부하고 있습니다. 
                        경력을 쌓은 개발자는 경력만 쌓이면 자연스럽게 되지만 
                        '잘하는'개발자는 경력뿐만 아니라 매일 공부하여 개발자로써 더 높은 곳을 바라보고 있기 때문입니다. 
                        저는 계속 공부하여 '잘하는'개발자로써 남고 싶습니다.
                    </About_content>
                </About_me>
            </Me>
        )
    }
}

export default Info_me;