import React from 'react';
import styled from 'styled-components';
import kh_autocomplete from '../images/kh_project/kh_autocomplete.png';
import kh_search from '../images/kh_project/kh_search.png'
import { generateMedia } from 'styled-media-query';

// 반응형 웹
const customMedia = generateMedia({
    maxmobile: '575px',
    minmobile: '352px',
});

const Projectbody = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`
const Projectdetail = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3vw;
    width: 100%;
`
const Title = styled.div`
    margin-left: 2vw;
    font-family: JejuGothic, NanumGothic;
    font-size: 1.5vw;
`
const Img_flex = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2vw;
    margin-bottom: 2vw;
`
const Img_div = styled.div`
    width: 50%;
    margin-left: 2vw;
    margin-right: 2vw;
`
const Img = styled.img`
    border-radius: 1vw;
    width: 100%;
`
const Content = styled.div`
    display: flex;
    margin-right: 2vw;
    margin-left: 2vw;
    width: auto;
    font-family: JejuGothic, NanumGothic;
    font-size: 1vw;
    align-items: center;
    line-height: 2vw;
`

const Project_detail = ({ modalOpen }) => {
    return (
        <Projectbody>
            <Projectdetail>
                <Title>1. 검색어 자동완성 기능<br></br></Title>
                <Img_flex>
                    <Img_div>
                        <Img src = { kh_autocomplete }/>
                    </Img_div>
                    <Img_div>
                        <Img src = { kh_search }/>
                    </Img_div>
                </Img_flex>
                <Content>
                    1) 검색 버튼 누를 시 검색결과 페이지로 이동<br></br>
                    2) 검색어를 포함한 기업 리스트를 보여주고
                    선택하면 해당 기업 상세 정보 페이지로 이동
                </Content>
            </Projectdetail>
            <Projectdetail>
                <Title>2. 기업정보 게시판<br></br></Title>
                <Img_div>
                    <Img src = { kh_autocomplete }/>
                    <Img src = { kh_search }/>
                </Img_div>
                <Content>
                    1) 검색 버튼 누를 시 검색결과 페이지로 이동<br></br>
                    2) 검색어를 포함한 기업 리스트를 보여주고<br></br>
                    &emsp;선택하면 해당 기업 상세 정보 페이지로 이동
                </Content>
            </Projectdetail>
        </Projectbody>
    )
}
export default Project_detail;