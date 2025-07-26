let show=document.querySelector(".open");
let hide=document.querySelector(".close");
let input=document.querySelector(".input");

hide.addEventListener("click", function(e){
    e.preventDefault()
    hide.classList.add("down")
    show.classList.add("up")
    input.type='text';
})
show.addEventListener("click", function(e){
    e.preventDefault()
    hide.classList.remove("down")
    show.classList.remove("up")
    input.type='password';
})

let moon=document.querySelector(".moon");
let sun=document.querySelector(".sun");
let head=document.querySelector(".head")

moon.addEventListener("click", function(e){
    e.preventDefault();
    moon.classList.add("dark")
    sun.classList.add("light")
    document.body.classList.add("black")
    head.innerHTML='Switch light Theme'
    
})
sun.addEventListener("click", function(e){
    e.preventDefault();
    moon.classList.remove("dark")
    sun.classList.remove("light")
    document.body.classList.remove("black")
    head.innerHTML='Switch Dark Theme'
    
})