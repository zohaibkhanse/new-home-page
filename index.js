'use strict';

const openBtnEl = document.querySelector('.open-menu-btn');
const closeBtnEl = document.querySelector('.close-menu-btn');
const navEl = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

function hideMenu(){
    navEl.classList.add('hidden');
    overlay.classList.add('hidden');
}
function showMenu(){
    navEl.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
openBtnEl.addEventListener('click', showMenu);
closeBtnEl.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);
navEl.addEventListener('click', function(e){
    if(e.target.closest('a')){
        hideMenu();
    }
});

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        hideMenu();
    }
})

