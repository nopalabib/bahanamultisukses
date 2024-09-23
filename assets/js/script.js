let barToggle = document.getElementById("bar-toggle");
let navUl = document.querySelector("nav ul");
let a = document.getElementsByClassName("isi-a");
let text = document.getElementById("text");
for(let x = 0;x < a.length;x++){
    b = a[x];
    b.addEventListener("click",()=>{
        navUl.classList.toggle("slide");
    })
}

barToggle.addEventListener("click",()=>{
    navUl.classList.toggle("slide");
})

