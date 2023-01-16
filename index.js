const express = require("express");
//따로 설치 안 하고 쓸 수 있음 (path)
const path = require("path");
const app = express();

//routing (두가지 방식, 검색창에 치고 들어오는 것은 모두 get방식)
app.get("/", function (req, res) {
  res.send(`안녕하세요. 로그인 해주세요. <a href="/login">로그인</a>`);
});

app.get("/login", function (req, res) {
  //   res.send(`<form method="get" action="/loginOK">
  //   <input type="text"
  //    name="userID">
  //    <input type="password" name="userPW">
  //    <button>로그인</button>
  //    </form>`);
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/loginOK", function (req, res) {
  const id = req.query.userID;
  const userPW = req.query.userPW;
  const gender = req.query.gender;
  let _gender = "";
  if (gender === "male") {
    _gender = "남자";
  } else {
    _gender = "여자";
  }
  if (id === "yeiwon" && userPW === "1234") {
    res.send(`<h1>${_gender} 백예원님 </h1> 반갑습니다.`);
  } else {
    res.send("<h1>아이디 패스워드 확인해 주세요.</h1>");
  }
});

app.listen(3000, function () {
  console.log("3000번에서 서버 대기 중");
});
