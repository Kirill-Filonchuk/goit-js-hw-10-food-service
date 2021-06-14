import './sass/main.scss';
import menuCards from './menu.json';

import cardMenuTpl from './templates/cards.hbs';


const container = document.querySelector('.js-menu');
function createMenuCards (menuCards) {
    return cardMenuTpl(menuCards);
}
const markupMenuCards = createMenuCards(menuCards);

container.innerHTML=markupMenuCards;


const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
      };

const refs={
    checkStatus : document.getElementById('theme-switch-toggle'),
    mainPage : document.querySelector('body'),
}

console.log(refs.checkStatus);

const onCheckTheme = (e) =>{ 
   localStorage.setItem("status", '');

if(e.target.checked){
    localStorage.setItem("status", 'checked');
    const readDataLS=localStorage.getItem("status");
    console.log(readDataLS);  
    getAttribute(readDataLS)

} else {
     removeAttribute()
}
    
    console.log(e.target.checked)
}

localStorage.getItem("status") !== null && getAttribute(localStorage.getItem("status"))

function  getAttribute(readDataLS) {
    refs.checkStatus.setAttribute(readDataLS,'')

    refs.mainPage.classList.remove(Theme.LIGHT);
    refs.mainPage.classList.add(Theme.DARK);
}

function  removeAttribute() {
    refs.checkStatus.removeAttribute('checked')
    localStorage.removeItem("status")


    refs.mainPage.classList.remove(Theme.DARK);
    refs.mainPage.classList.add(Theme.LIGHT);
}

// слушатель события - статус check - box
refs.checkStatus.addEventListener('change', onCheckTheme);


