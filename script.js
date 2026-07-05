// ===========================
// Sticky Header
// ===========================

const header = document.querySelector("header");
window.addEventListener("scroll", function(){

    if(window.scrollY > 60){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
});
//========================
// Back To Top
//========================

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
if(window.scrollY>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});
topBtn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
}
//==========================
// Preloader
//==========================

window.addEventListener("load",()=>{
const loader=document.getElementById("preloader");
loader.style.opacity="0";
setTimeout(()=>{
loader.style.display="none";
},500);
});
// ===========================
// Scroll Animation
// ===========================

const revealElements = document.querySelectorAll(
".product-card, .why-card, .industry-item, .info-box"
);
function revealOnScroll(){
    revealElements.forEach(el=>{
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();