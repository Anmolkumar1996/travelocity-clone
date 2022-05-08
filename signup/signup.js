
var myform = document.querySelector("#myform");
myform.addEventListener("submit", function (event) {
    event.preventDefault();

    var Data = {
        email:myform.email.value,
        firstname:myform.firstname.value,
        lastname:myform.lastname.value,
        password:myform.password.value,
    }
    console.log(Data)
    localStorage.setItem("userData",JSON.stringify(Data));
    // window.location.href="signin.html";
})