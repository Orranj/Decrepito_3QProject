function input(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    
    if(user==""&&pass==""){
        document.getElementById("please").innerHTML = "Please enter your username and password.";
        console.log("Login error.");
    }else if(user==""&&pass!=""){
        document.getElementById("please").innerHTML = "Please enter your username.";
        console.log("Login error.");
    }else if(user!=""&&pass==""){
        document.getElementById("please").innerHTML = "Please enter your password.";
        console.log("Login error.");
    }else if(user!=""&&pass!=""){
        document.getElementById("please").innerHTML = "";        
    }
}