//firstexpress.js
// DAYRIT, CARL IVAN P.
// 02/07/2022
// WD - 202
var express = require("Express");
var app = express();

app.get("/", function(request, response){
    response.send("Hello World!");
});

app.listen(3000, function(){
    console.log('Server is running at http://localhost:3000');
});