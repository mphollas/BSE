// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var $nav = $("#nav-area");
function toggleNavMenu(event){
    $nav.toggleClass("collapse");
}

(function(){
    const images = [
        "IMG_2534.jpg", 
        "IMG_2537.jpg", 
        "IMG_2731.jpg",
        "IMG_2726.jpg",
        "IMG_2643.jpg",
        "IMG_7787.JPG", 
        "IMG_7786.JPG", 
        "IMG_2274.JPG",
     ];
    let imageIndex = 0
    setInterval(()=>{
        if(images.length-1>imageIndex)
            imageIndex++
        else
            imageIndex = 0;

        let image = images[imageIndex]
        $("#slider").fadeOut(function(){
            $(this).attr("src", `img/${image}`).fadeIn();
        })
    },1000*2)
})();

$(".nav-link").on("click", function(event){
    let target = $(this).data("scroll-to");
    let box = document.querySelector(`#${target}`).getBoundingClientRect();
    let offset  = window.innerWidth > 768 ? 60 : 200;
    //compensate for sticky header
    let scrollTarget = box.top+window.scrollY-offset;
    //this works because css property 'scroll-behavior' is set on html tag
    window.scrollTo(0,scrollTarget);
})

let navbar = document.querySelector(".navbar-collapse");
let navbaritems = document.querySelectorAll(".nav-item")
navbaritems.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        navbar.classList.remove("show");
    })
})

