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

app.get('/api/main', (req, res) => {
    res.send(
        [
            {
                'main_title' : '신준현의 포트폴리오입니다.'
            }
        ]
    );
});

app.get('/api/info_me', (req, res) => {
    res.send(
        [
            {
                'id' : 1,
                'image' : '/images/JoonHyun.jpg',
                'name' : '신준현(Shin Joon Hyun)',
                'birthday' : '940919',
                'gender' : '남자',
                'job' : '프로그래머',
                'index' : 'SHIN \n ; \n PORT \n FOLIO',
                'about': `한신대학교 e-비즈니스학 학사\n < KH 정보교육원 > 자바(JAVA) 프레임워크 개발자 양성과정`
            }
        ]
    );
});

/*5000번 포트로 app동작*/
/*동작중이면 콘솔로 포트 출력*/
app.listen(port, () => console.log(`Listening on port ${port}`));