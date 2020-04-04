import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const Contactdisplay = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background-color: #F2F2F2;
    height: auto;
`
const Index = styled.div`
    float: left;
    height: fit-content;
    white-space: pre-line;
    margin-top: 1.5vw;
    margin-left: 1.5vw;
    font-family:JejuGothic, NanumGothic;
    font-size: 1.2vw;
    font-weight: 900;
`
const Contact_h1 = styled.h1`
    margin: 0 auto;
        
    ${customMedia.lessThan('maxmobile')`

    `}
`
const Contact_title = styled.div`
    position: absolute;
    margin: 0 auto;
    margin-top: 3vw;
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
const Contact_body = styled.div`
    width: 100%;
    height: auto;
    margin-top: 3vw;

    ${customMedia.lessThan('maxmobile')`
        margin-top: 5vw;
    `}
`
const Contact_content = styled.div`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 3vw;
    width: 40%;
    border-radius: 1vw;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 
    0 4px 6px -2px rgba(0,0,0,.05);
    
    ${customMedia.lessThan('maxmobile')`
        margin-bottom: 5vw;
        width: 70%;
        height: auto;
    `}
`
const Contact_detail = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2vw;
    text-align: justify;
`
const Contact_name = styled.h1`
    font-family: JejuGothic, NanumGothic;
    font-size: 2.5vw;
    margin-bottom: 4vw;
        
    ${customMedia.lessThan('maxmobile')`
        font-family: JejuGothic, NanumGothic;
        font-size: 4vw;
        margin-bottom: 6vw;
    `}
`
const Contact_email_phone = styled.div`
    font-family: JejuGothic, NanumGothic;
    font-size: 1.5vw;
    line-height: 3vw;
    
    ${customMedia.lessThan('maxmobile')`
        font-family: JejuGothic, NanumGothic;
        font-size: 3vw;
        line-height: 4vw;
    `}
`
const Send_mail = styled.button`
    position: absolute;
    top: 75%;
    left: 70%;
    width: auto;
    height: fit-content;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.5vw;

    ${customMedia.lessThan('maxmobile')`
        left: 75%;
        font-size: 2.5vw;
    `}

    ${customMedia.lessThan('minmobile')`
        top: 70%;
        left: 70%;
        font-size: 2.5vw;
    `}
`

class Contact_me extends React.Component {
    render() {
        return (
            <Contactdisplay id = "Contactdisplay">
                <Index>{this.props.index}</Index>
                <Contact_title><Contact_h1>{this.props.contact_title}</Contact_h1></Contact_title>
                
                <Contact_body>
                    <Contact_content>
                        <Contact_detail>
                            <Contact_name>{this.props.contact_name}</Contact_name>
                            <Contact_email_phone>{this.props.contact_email}</Contact_email_phone>
                            <Contact_email_phone>{this.props.contact_phone}</Contact_email_phone>
                        </Contact_detail>
                        <Send_mail>Send-mail</Send_mail>
                    </Contact_content>
                </Contact_body>
            </Contactdisplay>
        )
    }
}

export default Contact_me;