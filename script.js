let tagBox = document.querySelector(".tag-box");
let contentItems = document.querySelector(".content-items")
let toggleTheme = document.querySelectorAll(".dark-mode-switch");
let tagItemArr = Array.from(tagBox.children);
let contentItemArr = Array.from(contentItems.children);
function openUlmenu() {
	let ul = document.querySelector("#menu");
	ul.classList.toggle("open-ul");
}
 if (document.body.className!=="black-theme") {
            bgWhiteOfTagItems();
}
[toggleTheme[0],toggleTheme[1]].forEach((toggleItem)=>{
    toggleItem.addEventListener("click",()=>{
        document.body.classList.toggle('black-theme');
        if (document.body.className=="black-theme") {
           bgBlackOfTagItems(); 
        }
        else{
            bgWhiteOfTagItems();           
        }       
    })
});

function bgBlackOfTagItems(){
    tagItemArr.forEach((tagItem)=>{
        tagItem.style.background="rgba(299,299,299,0.07)";
    })
}
function bgWhiteOfTagItems(){
    tagItemArr.forEach((tagItem)=>{
        tagItem.style.background="var(--tag-bg)";
    }
  )
}

tagItemArr.forEach((elem,index,arr)=>{ 
     elem.addEventListener("click",function (){
     arr.forEach((item)=>{
         item.classList.remove("hover-effect")
     }) 
         this.classList.add("hover-effect");       
    })
})

contentItemArr.forEach((elem,index,arr)=>{   
     elem.addEventListener("click",function (){
     arr.forEach((item)=>{
         item.classList.remove("hover-effect")
     })     
        this.classList.add("hover-effect");       
    })
})

let goTop = document.querySelector(".go-top a");

function scrollYBody() {
  if (window.scrollY >= 400) {
    goTop.style.visibility="visible";
    goTop.style.opacity="1";
  } else if(window.scrollY <= 50) {
     goTop.style.visibility="hidden";
    goTop.style.opacity="0";
  }
}