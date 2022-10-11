const loginForm=document.getElementById("login-form")
const loginButtom=document.getElementById("login-form-submit")
const loginErrorMsg=document.getElementById("login-error-msg")

loginButtom.addEventListener("click",(e)=>
{
    e.preventDefault();
    const username=loginForm.username.value;
    const password=loginForm.password.value;

    if(username === "yichen774" && password === "wilson6514")
    {
        alert("you have successful logged in");
        location.reload()
    }
    else
    {
        loginErrorMsg.style.opacity=1;
    }
})