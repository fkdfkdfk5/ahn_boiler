const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongdb Connected"))
  .catch((err) => console.log(err));

// mongodb+srv://dp81:<password>@cluster0.3knpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// 아이디 dp81 1111 이다

app.get("/", (req, res) => res.send("hello"));

app.post("/register", (req, res) => {
  //클라이언트에서 보낸것을 바디파서가 req.body 로 변환해서 보냄
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
