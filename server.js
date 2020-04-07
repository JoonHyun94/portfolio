const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/*server의 port번호는 5000*/
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('', (req, res) => {
    res.send("Hello localhost:5000");
});

app.get('/api/info_me', (req, res) => {
    res.send(
        {
            'id' : 1,
            'image' : '/images/JoonHyun.jpg',
            'name' : '신준현(Shin Joon Hyun)',
            'birthday' : '940919',
            'gender' : '남자',
            'job' : '프로그래머',
            'index' : 'SHIN \n ; \n PORT \n FOLIO',
            'about': '한신대학교 e-비즈니스학 학사\n\n < KH 정보교육원 > 자바(JAVA) 프레임워크 개발자 양성과정',
            'aboutContent' : `어릴때 부터 호기심이 많은 성격에 만들어 보았던 간단한 계산기 프로그램으로 무언가를 만드는 것의 재미를 느끼게 되었고 그때부터 개발자를 꿈꾸게 되었습니다. 그래서 대학교에서 동아리활동을 통해 자연스럽게 많은것을 개발하게 될 수 있었습니다. 그 중 Javascript가 가지고 있는 가능성과 다양성에 매력을 느끼게 되어 웹 어플리케이션 개발자가 되기 위해 많은 노력을 하고 있습니다.
        
            저는 제 목표를 '잘하는' 개발자로 삼아서 더 공부하고 있습니다. 경력을 쌓은 개발자는 경력만 쌓이면 자연스럽게 되지만 '잘하는'개발자는 경력뿐만 아니라 매일 공부하여 개발자로써 더 높은 곳을 바라보고 있기 때문입니다 . 저는 계속 공부하여 '잘하는'개발자로써 남고 싶습니다.`
        }
    );
});

app.get('/api/project', (req, res) => {
    res.send(
        {
            'index' : 'SHIN \n ; \n PORT \n FOLIO',
            'projectTitle' : 'Project',
            'image' : '/images/kh_project_img.jpg',
            'khProjectIntroduction' : `주제 : 취업 정보 통합 포털사이트
                                    인원 : 5명(팀장 포함)
                                    배경 : 기업에 관한 정보와 취업 정보를 무료로 조회하는 사이트가 존재하지 않음 → "기업조회 + 정보 제공하는 웹사이트"
                                    참고 모델 사이트 : 크레딧잡 + 잡코리아 + 자소설 닷컴
                                    진행기간 : 2019.06.19 ~ 2019.08.12`,
            'khProjectMyrule' : `메인 홈페이지 기업검색 기능
                                검색한 기업의 간략한 정보 게시판
                                기업리뷰게시판 (게시글 CRUD, 게시글 추천, 댓글 작성 및 추천)`,
            'github' : '/images/github.png'
        }
    );
});

app.get('/api/contact_me', (req, res) => {
    res.send(
        {
            'index' : 'SHIN \n ; \n PORT \n FOLIO',
            'contact_title' : 'Contact Me',
            'contact_name' : '신준현(ShinJoonHyun)',
            'contact_email' : 'email : slio_7@naver.com',
            'contact_phone' : 'phone : 010-9582-9596'
        }
    );
});

/*5000번 포트로 app동작*/
/*동작중이면 콘솔로 포트 출력*/
app.listen(port, () => console.log(`Listening on port ${port}`));