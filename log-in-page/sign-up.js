var http = require('http');
var fs = require('fs');
var user, pass, confirmPass;
function test(){
    
    if(event.keycode){
        
        user = document.getElementById("user").value;
        pass = document.getElementById("pass").value;
        confirmPass = document.getElementById("confirmPass").value;
        if(user.length < 4 || pass.length < 4){
            alert("username or password too short (has to be at least 4 characters)");
        }
        if(pass == confirmPass){
            module.exports.user = user;
            module.exports.pass = pass;
        }
        else{
            alert("password doesn't match");
        }
    }
    
}

function button(){
    
        user = document.getElementById("user").value;
        pass = document.getElementById("pass").value;
        confirmPass = document.getElementById("confirmPass").value;
        if(user.length < 4 || pass.length < 4){
            alert("username or password too short (has to be at least 4 characters)");
        }
        if(pass == confirmPass){
            module.exports.user = user;
            module.exports.pass = pass;
        }
        else{
            alert("password doesn't match");
        }
        
}

http.createServer(function(request, response){
    response.writeHead(200);
    fs.readFile('home.html', function(error, contents){
        response.write(contents);
    })
    response.end();
}).listen(8080);

