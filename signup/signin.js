
var myform=document.querySelector("#myform");
var userData=JSON.parse(localStorage.getItem("userData"));

myform.addEventListener("submit",function(event){
    event.preventDefault();

    var data={
        email:myform.email.value,
        password:myform.password.value,
    }

    if(userData===null){
        alert("Please Create an account")
    }
    else if(userData.email==data.email && userData.password==data.password){
        alert("sign in Successful")
        localStorage.setItem("signin",JSON.stringify(userData))
         window.location.href="http://127.0.0.1:5500/travelocity-clone/homePage/homepage.html"
    }
    else
    {
        alert("User Does not exist")
    }
});

