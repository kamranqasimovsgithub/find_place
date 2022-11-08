const modali1 = document.querySelector(".box1 i");
const modali2 = document.querySelector(".box2 i");
const modali3 = document.querySelector(".box3 i");
const green = document.querySelector(".green");
const yellow= document.querySelector(".yellow");
const red= document.querySelector(".red");
modali1.addEventListener("click", function() {
    event.preventDefault();
    green.classList.toggle('greenblock');
})
modali2.addEventListener("click", function() {
    event.preventDefault();
    red.classList.toggle('redblock');   
})
modali3.addEventListener("click", function() {
    event.preventDefault();
    yellow.classList.toggle('yellowblock');
})

const simg = document.querySelector(".search-img");
const dimg = document.querySelector(".dimg");
const search = document.querySelector(".search-form form span i");
// console.log(search)
search.addEventListener("click", function() {
    if(simg.style.display = "block") {
        simg.style.display = "none";
        dimg.style.display = "block";
    }else {
        simg.style.display = "block";
        dimg.style.display = "none";
    }
})