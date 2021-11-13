let email = document.getElementById("email");
let erroremail = document.getElementById("erroremail");
let password = document.getElementById("password");
let errorpassword = document.getElementById("errorpassword") ;

function validate(){
    if(validateemail()){
        if(validatepassword()){
            return true;
        }
        else{
            return false;
        }}
        else {return false;
    }

function validateemail(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if(regexp.test(email.value)){
        erroremail.innerHTML = "valid";
        erroremail.style.color = "green";
        email.style.border ="3px solid green";
        return true;
    }
    else
    {
    erroremail.innerHTML= "Username incorrect";
    erroremail.style.color="red";
    email.style.border="2px solid red"
    return false;
    }
}
function validatepassword(){
    let regexp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")
    if(password.value.length >= 8)
        if(regexp.test(password.value)){
            errorpassword.innerHTML = "valid";
            errorpassword.style.color = "green";
            password.style.border ="3px solid green";
            return true;
    }
        else{
            errorpassword.innerHTML= "Incorrect password format"
            errorpassword.style.color= "red"
            password.style.border= "2px solid red"
        }
    else{
        errorpassword.innerHTML= "password too small";
        errorpassword.style.color= "red"
        password.style.border= "3px solid red"
    }
}
}
