const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dp81:1111@cluster0.3knpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Mongdb Connected"))
  .catch((err) => console.log(err));

// mongodb+srv://dp81:<password>@cluster0.3knpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// 아이디 dp81 1111 이다

app.get("/", (req, res) => res.send("hello"));

app.listen(port, () => console.log(`listening on port ${port}`));
