import React from 'react';
import styled, { keyframes } from 'styled-components';
import kh_autocomplete from '../images/kh_project/kh_autocomplete.png';
import kh_search from '../images/kh_project/kh_search.png';
import cor_info from '../images/kh_project/cor_info.png';
import cor_info_2 from '../images/kh_project/cor_info_2.png';
import review from '../images/kh_project/review.png';
import review_detail from '../images/kh_project/review_detail.png';
import review_write from '../images/kh_project/review_write.png';
import review_modify from '../images/kh_project/review_modify.png';
import { generateMedia } from 'styled-media-query';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '700px',
    minmobile: '352px',
});

const opacityTransition = keyframes`
    from { opacity: 0; }
    to { opacity: 0.5; }
`
const widthTransition = keyframes`
    from { width: 0%; height: 0%; }
    to { width: 70%; height: 90%; }
`
const imgTransition = keyframes`
    from { width: 50%; }
    to { width: 80%; }
`
const reducImg = keyframes`
    from { width: 80%; }
    to { width: 50%; }
`

var ModalOverlay = styled.div`
`
var Projectbody = styled.div`
`
const CloseProject = styled.div`
    position: relative;
    cursor: pointer;
    top: 0.5vw;
    left: 93%;
    margin-right: 0;
    margin-bottom: 2vw;
    width: 2.5vw;
    height: 2.5vw;
    border: solid black;
    border-radius: 50%;
    opacity: 0.6;
    transform: translate(-10%);
    &:before {
        content: '';
        position: absolute;
        height: 1.5vw;
        border: solid black;
        border-width: 0 0.2vw 0.2vw 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
        content: '';
        position: absolute;
        height: 1.5vw;
        border: solid black;
        border-width: 0 0.2vw 0.2vw 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`
const Projectdetail = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3vw;
    width: 100%;
`
const Title_div = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-bottom: 2vw;
`
const Symbol = styled.div`
    margin-top: 2vw;
    align-self: flex-end;
    color: #FACC2E;
    font-size: 1.9vw;
    ${customMedia.lessThan('maxmobile')`
        font-size: 3vw;
    `}
`
const Number = styled.div`
    margin-top: 2vw;
    font-family: JejuGothic, NanumGothic;
    color: #FACC2E;
    font-size: 3vw;
    ${customMedia.lessThan('maxmobile')`
        font-size: 4.1vw;
    `}
`
const Title = styled.div`
    margin: 0 auto;
    margin-top: 2vw;
    align-self: flex-end;
    font-family: JejuGothic, NanumGothic;
    font-weight: 500;
    font-size: 1.2vw;
    ${customMedia.lessThan('maxmobile')`
        font-size: 2.3vw;
    `}
`
var Img_div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
    transition: width 0.3s;
    ${customMedia.lessThan('maxmobile')`
        width: 60%;
    `}
`
const Img = styled.img`
    cursor:pointer;
    margin-bottom: 3vw;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    border-radius: 1vw;
    width: 100%;
`
const Content = styled.div`
    display: flex;
    margin: 0 auto;
    width: 50%;
    font-family: JejuGothic, NanumGothic;
    font-size: 0.9vw;
    align-items: center;
    line-height: 2vw;
    ${customMedia.lessThan('maxmobile')`
        width: 60%;
        font-size: 1.2vw;
    `}
`
const state = {
    count: 0,
    imgExpand: true,
    currentTag: null,
    beforeTag: null,
    imgPercent: null
};

const expand = (tagId) => {
    state.currentTag = document.querySelector("[id = " + tagId + "]");
    if(document.body.offsetWidth > 700) {
        state.imgPercent = 50;
    }

    if(document.body.offsetWidth < 700) {
        state.imgPercent = 60;
    }

    if(state.beforeTag === null) {
        state.beforeTag = document.querySelector("[id = " + tagId + "]");
    }
    if(state.currentTag === state.beforeTag) {
        if(state.imgExpand === true) {
            state.currentTag.style.width = "80%";
            state.imgExpand = false;
            state.beforeTag = document.querySelector("[id = " + tagId + "]");
        } else if(state.imgExpand === false) {
            state.currentTag.style.width = state.imgPercent + "%";
            state.imgExpand = true;
            state.beforeTag = document.querySelector("[id = " + tagId + "]")
        }
    } else if(state.currentTag != state.beforeTag) {
        state.beforeTag.style.width = state.imgPercent + "%";
        state.currentTag.style.width = "80%";
        state.beforeTag = document.querySelector("[id = " + tagId + "]");
        if(state.imgExpand === true) {
            state.imgExpand = false;
        } else if(state.imgExpand === false) {
            state.imgExpand = true;
        }
    } 
}

const Kh_project = ({ modalOpen, modalClose }) => {
    if(state.count === 0) {
        ModalOverlay = styled.div`
            position: fixed;
            z-index: 10;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: black;
            opacity: 0;
            animation: ${ opacityTransition } 0.3s forwards;
            animation-iteration-count: 1;
        `
        Projectbody = styled.div`
            position: fixed;
            z-index: 10;
            overflow: scroll;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0%;
            height: 0%;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
            animation: ${ widthTransition } 0.3s forwards;
            animation-iteration-count: 1;
        `
        state.count = 1;
    }
    
    return (
        <React.Fragment>
            {modalOpen === true ?
                <React.Fragment>
                    <ModalOverlay onClick = { modalClose }/>
                    <Projectbody id = "modal">
                        <CloseProject onClick = { modalClose }/>

                        <Projectdetail>
                            <Title>#이미지 클릭 시 이미지 확대, 축소가 가능합니다.</Title><p></p>
                            <Title_div>
                                <Number>01</Number><Symbol>/</Symbol>&nbsp;
                                <Title>검색어 자동완성 기능</Title>
                            </Title_div>
                            <Img_div id = "first"  onClick = {() => expand("first") }>
                                <Img src = { kh_autocomplete }/>
                            </Img_div>
                            <Img_div id = "second"  onClick = {() => expand("second") }>
                                <Img src = { kh_search }/>
                            </Img_div>
                            <Content>
                                1) 검색 버튼 누를 시 검색결과 페이지로 이동<br></br>
                                2) 검색어를 포함한 기업 리스트를 보여주고
                                선택하면 해당 기업 상세 정보 페이지로 이동
                            </Content>
                        </Projectdetail>

                        <Projectdetail>
                            <Title_div>
                                <Number>02</Number><Symbol>/</Symbol>&nbsp;
                                <Title>기업정보 게시판</Title>
                            </Title_div>
                            <Img_div id = "third"  onClick = {() => expand("third") }>
                                <Img src = { cor_info }/>
                            </Img_div>
                            <Title style = {{ marginTop: 0 }}>2019년 4월 기준 국민연금 데이터 이용</Title>
                            <Content style = {{ marginTop: '1vw', marginBottom: '2vw' }}>
                                1) 기업이 지불해야할 해당 월 국민연금을 이용하여 계산<br></br>
                                    &emsp;((국민연금 * 11.1) / 인원 수) x 12<br></br>
                                2) 해당기업의 간략한 정보<br></br>
                                3) 해당기업의 인원, 업력, 입사율, 퇴사율 (2019년 4월 기준)<br></br>
                                4) 인원, 업력, 입사율, 퇴사율 div클릭 시 hide, show로 클릭한 정보로 바뀌며<br></br>
                                    &emsp;jQuery의 animate함수를 사용하여 그래프가 동적으로 변환
                            </Content>
                            <Img_div id = "four"  onClick = {() => expand("four") }>
                                <Img src = { cor_info_2 }/>
                            </Img_div>
                            <Content>
                            기업 정보 게시판에서 해당 기업의 리뷰 확인 가능하며
                            리뷰의 태그 클릭 시 해당 태그의 리뷰게시판 리스트 이동
                            또한 글쓰기 버튼 클릭 시 해당기업 리뷰 글쓰기가 가능<br></br>
                            기업 정보 게시판에서 해당 기업의 채용공고 확인 가능하며
                            채용공고의 제목 클릭 시 해당기업 채용공고 상세페이지 이동
                            </Content>
                        </Projectdetail>

                        <Projectdetail>
                            <Title_div>
                                <Number>03</Number><Symbol>/</Symbol>&nbsp;
                                <Title>기업 리뷰게시판</Title>
                            </Title_div>
                            <Img_div id = "five"  onClick = {() => expand("five") }>
                                <Img src = { review }/>
                            </Img_div>
                            <Content>
                                1) 왼쪽 상단의 태그 클릭시 해당 태그 리뷰리스트로 변환<br></br>
                                2) 기업 검색기능을 통하여 검색한 기업의 리뷰리스트 조회 가능<br></br> 
                                3) 글쓰기 버튼 클릭 시 리뷰 글쓰기 가능<br></br>
                                4) 추천수, 조회수 작성일을 보여주며 추천기능은 Ajax를 이용하여 로그인한 회원만 가능<br></br>
                                5) 한 페이지당 최대 10개의 리뷰를 보여주며 다음표시 클릭 시 다음 10개의 리뷰 페이지로 이동<br></br>
                            </Content>
                        </Projectdetail>

                        <Projectdetail>
                            <Title_div>
                                <Number>04</Number><Symbol>/</Symbol>&nbsp;
                                <Title>리뷰 상세페이지</Title>
                            </Title_div>
                            <Img_div id = "six"  onClick = {() => expand("six") }>
                                <Img src = { review_detail }/>
                            </Img_div>
                            <Content>
                                1) 태그 클릭 시 해당 태그 리뷰리스트로 이동<br></br>
                                2) 기업 검색기능을 통하여 검색한 기업의 리뷰리스트 조회 가능<br></br>
                                3) 글쓰기 버튼 클릭 시 리뷰 글쓰기 가능<br></br>
                                4) 수정, 삭제 버튼은 해당글을 작성한 작성자에게만 보이며 수정버튼 클릭 시 수정 페이지 이동, 삭제 버튼 클릭 시 alert를 이용하여 게시글 삭제<br></br>
                                5) Ajax를 이용한 댓글의 추천기능과 댓글 삭제기능, 추천기능은 로그인한 회원만 가능하며 댓글삭제 버튼 클릭 시prompt창으로 비밀번호 요구<br></br>
                                6) Ajax를 이용하여 익명으로 댓글작성 가능<br></br>
                            </Content>
                        </Projectdetail>

                        <Projectdetail>
                            <Title_div>
                                <Number>05</Number><Symbol>/</Symbol>&nbsp;
                                <Title>리뷰 글쓰기(팝업)</Title>
                            </Title_div>
                            <Img_div id = "seven"  onClick = {() => expand("seven") }>
                                <Img src = { review_write }/>
                            </Img_div>
                            <Content>
                                1) 글쓰기 시 태그 선택가능<br></br>
                                2) 기업검색으로 리뷰를 작성할 기업 선택 가능(자동완성기능 추가)<br></br>
                                3) 기업 상세 페이지에서 글 작성시 기업은 자동입력 되며 리뷰게시판에서 글 작성시 기업검색 후 선택 시 입력<br></br>
                                4) Summernote를 이용한 글쓰기 구현<br></br>
                                5) 글쓰기 버튼 클릭 시 글 작성 완료<br></br>
                            </Content>
                        </Projectdetail>

                        <Projectdetail>
                            <Title_div>
                                <Number>06</Number><Symbol>/</Symbol>&nbsp;
                                <Title>리뷰 수정페이지</Title>
                            </Title_div>
                            <Img_div id = "eight"  onClick = {() => expand("eight") }>
                                <Img src = { review_modify }/>
                            </Img_div>
                            <Content>
                                1) 리뷰 수정 시 태그 변경 가능<br></br>
                                2) Summernote를 이용하여 글 수정 가능<br></br>
                                3) 수정 버튼 클릭 시 글 수정 완료<br></br>
                            </Content>
                        </Projectdetail>

                    </Projectbody>
                </React.Fragment>
                : ""
            }
        </React.Fragment>
    )
}

export default Kh_project;