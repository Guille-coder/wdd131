document.addEventListener("DOMContentLoaded", 
    function() {
        const menu= document.querySelector(".navbutton");
        const navLinks = document.querySelector(".links");
        menu.addEventListener("click",function(){
            navLinks.classList.toggle("active");
        });
    }
);
var typed = new Typed('#typed', {
    strings: ["a Philippines explorer.", "a beach lover.", "your travel guide."],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

AOS.init({
    duration: 1000, 
    once: true 
});