let navIcon = document.getElementById('nav-icon');
let closeBtn = document.getElementById('close-btn');
let popUp = document.querySelector('.nav-pop-up');

// A function to display the pop-up
navIcon.addEventListener('click', ()=>{
    popUp.style.display="block";
})

// A function to close the pop-up
closeBtn.addEventListener('click', ()=>{
    popUp.style.display="none";
})