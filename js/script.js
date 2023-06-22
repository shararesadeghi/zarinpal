const hamburgerIcon=document.querySelector(".hamburger-icon");
const crossIcon=document.querySelector(".cross-icon");
const hamburgerMenu=document.querySelector(".hamburger-menu");
const showProductMenu=document.querySelector("#show-product-menu");
const showMoreMenu=document.querySelector("#show-more-menu")

hamburgerIcon.addEventListener("click",()=>{
    hamburgerMenu.classList.add("show-hamburger-menu")
});

crossIcon.addEventListener("click",()=>{
    hamburgerMenu.classList.remove("show-hamburger-menu")
});

showProductMenu.addEventListener("mouseenter",(event)=>{
const div=event.target.childNodes[5];
div.style.animation="showUp 0.35s 1";
div.style.display="flex";
});

showProductMenu.addEventListener("mouseleave",(event)=>{
    const div=event.target.childNodes[5];
    div.style.display="none";
});

showMoreMenu.addEventListener("mouseenter",(event)=>{
    const ul=event.target.childNodes[5];
    ul.style.animation="showUp 0.35s 1";
    ul.style.display="block";
    });

showMoreMenu.addEventListener("mouseleave",(event)=>{
  const ul=event.target.childNodes[5];
  ul.style.display="none";
    });
