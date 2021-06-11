const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
function onLoginBtnClick(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();
}

function paintGreetings(){
    const input = localStorage.getItem(USERNAME_KEY)
    h1.classList.remove(HIDDEN_CLASSNAME);
    h1.innerText = `Hello ${input}`
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginBtnClick)
    // show the form
}else{
    paintGreetings();
    // show the greetings
}