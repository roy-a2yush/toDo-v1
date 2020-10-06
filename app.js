const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.set("view engine","ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let item = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];

app.get("/", function(req, res) {

  let dated = date.getDate();
  let day = date.getDay();
  res.render("list",{listTitle: dated, newItems: item, addRedirect: "/"});

  //res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {
  item.push(req.body.toDo);
  console.log(item);
  res.redirect("/")
});

app.get("/work", function(req, res) {
  res.render("list",{listTitle: "Work List", newItems: workItems, addRedirect: "/work"})
});

app.post("/work", function(req, res) {
  workItems.push(req.body.toDo);
  res.redirect("/work");
})

app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
