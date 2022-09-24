let tagItem = document.querySelectorAll(".tag-item");
let items = document.querySelectorAll(".items");
let toggleTheme = document.querySelectorAll(".dark-mode-switch")[0];
let toggleTheme1 = document.querySelectorAll(".dark-mode-switch")[1];
function openUlmenu(){
    let ul = document.querySelector("#menu");
    ul.classList.toggle("open-ul");
}
toggleTheme.addEventListener("click",()=>{
    document.body.classList.toggle("black-theme");
})
toggleTheme1.addEventListener("click",()=>{
    document.body.classList.toggle("black-theme");
})
