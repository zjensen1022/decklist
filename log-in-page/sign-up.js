var http = require('http');

function test(){
    
    if(event.keycode){
        
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        var confirmPass = document.getElementById("confirmPass").value;
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
    
    var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        var confirmPass = document.getElementById("confirmPass").value;
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
    
    response.write("I hope this works");
    
}).listen(8080);

