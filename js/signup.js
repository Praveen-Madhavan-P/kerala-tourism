let email = document.getElementById("email");
let erroremail = document.getElementById("erroremail");
let password = document.getElementById("password");
let errorpassword = document.getElementById("errorpassword") ;
let phone = document.getElementById("phone");
let errorphone = document.getElementById("errorphone");
let confirmpassword = document.getElementById("confirmpassword");
let errorconfirmpassword = document.getElementById("errorconfirmpassword");

function validate(){
    if(validateemail()){
        if(validatephone()){
            if(validatepassword()){
                if(passwordmatch()){
                return true;}
                else{
                    return false;}
                }else {
                return false;}
                }else{return false;}
            }else{return false;}
    
          

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
function validatephone(){
    let phoneFormat0 = /^[0-9]{10}$/;
    let phoneFormat1 = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    let phoneFormat2 = /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
    let phoneFormat3 = /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
    if(phoneFormat0.test(phone.value)||phoneFormat1.test(phone.value)||phoneFormat2.test(phone.value)||phoneFormat3.test(phone.value)){
        errorphone.innerHTML = "valid phone no";
        errorphone.style.color = "green";
        phone.style.border = "3px solid green";
        return true;
    }
    else{
        errorphone.innerHTML = "Invalid phone no";
        errorphone.style.color = "red";
        phone.style.border = "2px solid red";
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
function passwordmatch(){
    if(password.value===confirmpassword.value){
        errorconfirmpassword.innerHTML= "password match"
        errorconfirmpassword.style.color= "green"
        confirmpassword.style.border= "3px solid green"
        return true;
    }
    else{
        errorconfirmpassword.innerHTML= "password don't match"
        errorconfirmpassword.style.color= "red";
        confirmpassword.style.border= "2px solid red"
    }
}
    
}
    
