let form = document.querySelector("form");

let signupArr = JSON.parse(localStorage.getItem("signupData")) ||[];

form.addEventListener("submit",function(event){
   event.preventDefault();
   let obj = {
    name: form.name.value,
    email: form.email.value,
    re_email: form.re_email.value,
    password: form.password.value

   }
   signupArr.push(obj);
   localStorage.setItem("signupData",JSON.stringify(signupArr));
   window.location.replace("login.html")
})
