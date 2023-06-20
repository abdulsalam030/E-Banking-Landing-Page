const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelector('#hLink');
const fasolid = document.querySelector('.fa-solid');


hamburger.addEventListener('click', ()=> {
    menu.classList.toggle('hidden');
    fasolid.classList.toggle('fa-xmark')
})

hLink.forEach(link => {
    link.addEventListener('click',()=> {
        menu.classList.toggle('hidden');
        fasolid.classList.toggle('fa-xmark')
    })
})





