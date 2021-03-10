var email = document.getElementById("e")
var pass = document.getElementById("p")
var Login = document.getElementById("btn")
var loggedin = false

Login.addEventListener("onclick", function(){
    if(loggedin == false){
        if(email.innerHTML == "Asshole" && pass.innerHTML == "Bitch"){
            document.write("Logged in")
            email.innerHTML = ""
            pass.innerHTML = ""
    
        }else{
            window.alert("Failed! Try again.")
        }
    }else{
        window.alert("Already Logged in")
    }
})