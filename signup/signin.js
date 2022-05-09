
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
         window.location.href="/travelocity-clone/index.html"
    }
    else
    {
        alert("User Does not exist")
    }
});

