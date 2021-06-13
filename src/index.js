import './sass/main.scss';
import menuCards from './menu.json';
console.log(menuCards);

import cardMenuTpl from './templates/cards.hbs';
console.log(cardMenuTpl);

const container = document.querySelector('.js-menu');
console.log(container);
//  список тем 
// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };

function createMenuCards (menuCards) {
    return cardMenuTpl(menuCards);
}
const markupMenuCards = createMenuCards(menuCards);
console.dir(markupMenuCards);

container.innerHTML=markupMenuCards;