const input = document.querySelector("input");
const loginbtn = document.querySelector(".login");
const logoutbtn = document.querySelector(".logout");
const status = document.querySelector("h1");

console.log("Worked")
console.log(input.value)

loginbtn.onclick = () => {
    if (input.value) {
        console.log(input.value)
        localStorage.setItem("Token",input.value);
        location.reload()
        input.value= ""

    };
};

logoutbtn.onclick = () => {
        console.log(input.value)
        localStorage.clear();
        location.reload()

};

if (localStorage.key(0)){
    status.innerText = "Welcome " + localStorage.getItem("Token");
    loginbtn.style.visibility = 'hidden';
    input.style.visibility = 'hidden';
}
else {
    logoutbtn.style.visibility = 'hidden';
    status.innerText = "Please Login"; 
}