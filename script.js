let tagItem = document.querySelectorAll(".tag-item");
let items = document.querySelectorAll(".items");
let toggleTheme = document.querySelector(".dark-mode-switch");
function openUlmenu(){
    let ul = document.querySelector("#menu");
    ul.classList.toggle("open-ul");
}
toggleTheme.addEventListener("click",()=>{
    document.body.classList.toggle("black-theme");
})