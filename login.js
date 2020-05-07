function signUp()
{
    const login=document.getElementsByClassName("login")[0].style;
    const signup=document.getElementsByClassName("signup")[0].style;
    login.display="none";
    signup.display="block";

}
function logIn()
{
    const login=document.getElementsByClassName("login")[0].style;
    const signup=document.getElementsByClassName("signup")[0].style;
    signup.display="none";
    login.display="block";
}