let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("signupData")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
       email: form.email.value,
       password: form.password.value
    }
    let flag = false;
    userData.forEach(function(elem){
        if(elem.email==obj.email && elem.password==obj.password){
            alert("Login Successful")
            flag = true;
        }
    })
if(!flag){
    alert("User Not Found")
}
   
})