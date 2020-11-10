document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("menuButton").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
        document.getElementById("mask").classList.toggle("active");
    })
    
});

const targetElement = document.querySelectorAll(".animationTarget");
    console.log("画面の高さ",window.innerHeight);
    document.addEventListener("scroll",function() {
        for(let i = 0; i < targetElement.length; i++) {
            const getElementDistance = targetElement[i].getBoundingClientRect().top
            if (i === 1) {
                console.log(getElementDistance)
            }
            if ( window.innerHeight > getElementDistance) {
                targetElement[i].classList.add('show');
            }
        }
    })
