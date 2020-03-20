const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/*server의 port번호는 5000*/
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*사용자가 /api/hello로 접속할 경우*/
app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

/*5000번 포트로 app동작*/
/*동작중이면 콘솔로 포트 출력*/
app.listen(port, () => console.log(`Listening on port ${port}`));