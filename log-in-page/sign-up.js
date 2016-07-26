function test(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confirmPass = document.getElementById("confirmPass").value;
    if(user.length < 4 || pass.length < 4){
        alert("username or password too short");
    }
    if(pass == confirmPass){
        module.exports.user = user;
        module.exports.pass = pass;
    }
    else{
        alert("password doesn't match");
    }
    
}

