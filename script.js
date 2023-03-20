document.querySelector(".Loginbtn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".ResLoginbtn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".Iconclose").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="none";
})

const bar = document.querySelector(".icon-bar");
const resheader = document.querySelector(".respon-header");

bar.addEventListener('click', ()=>{
    resheader.classList.toggle('mobile-menu')
})

