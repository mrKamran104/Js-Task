const express = require("express");

const app = express();
app.set("port", process.env.PORT || 3001);

const cb0 = (req, res, next) => {
  console.log("CB0");
  next();
};

const cb1 = (req, res, next) => {
  console.log("CB1");
  next();
};

app.get(
  "/example/d",
  [cb0, cb1],
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from D!");
  }
);

app.listen(app.get("port"), () => {
  console.log(`Server Started on: http://localhost:${app.get("port")}`);
});
