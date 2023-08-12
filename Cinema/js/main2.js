function log_into(){
    var firstinput = document.getElementById("username").value;
    var secondinput = document.getElementById("passwrd").value;
    var thirdinput = document.getElementById("passwrd2").value;
    if(firstinput == "Gunel" && secondinput == "2006" && thirdinput == "2006"){
        window.open("web_login.html");
    }
    else if(firstinput=="Ariz" && secondinput=="2003" && thirdinput == "2003"){
        window.open("web_login.html");
    }
    else if(firstinput=="Emil" && secondinput=="2005" && thirdinput == "2005"){
        window.open("web_login.html");
    }
    else if(firstinput=="Adil" && secondinput=="2009" && thirdinput == "2009"){
        window.open("web_login.html");
    }
    else if(firstinput=="Fidan" && secondinput=="2004" && thirdinput == "2004"){
        window.open("web_login.html");
    }
    else{
        window.alert("Incorrect username or password");
    }
}

function sign_up(){
    window.open("web_login.html");
}