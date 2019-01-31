var burgers=require("./controllers/burgers_controller.js");
var express=require("express");
var app = express();
var path = require('path');
var PORT=process.env.PORT||3000
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set your static files

app.use(express.static(__dirname + '/public'));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars");

app.use('/', burgers);

app.listen(PORT,function(){
    console.log("app is listening "+PORT);
});