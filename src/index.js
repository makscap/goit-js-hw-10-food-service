import menuCardTpl from "./templates/menu-item.hbs";
import cards from "./menu.json";

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
const bodyColor = document.querySelector('body');

const themeSwitcher = document.querySelector('.theme-switch__toggle')

themeSwitcher.addEventListener('change', clickHandler);
themeSwitcher.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);


function clickHandler(e) {
if (themeSwitcher.checked) {
    setDarkTheme()
} else {
    setLightTheme()
}
}

function setLocalStorage(e) {
    if (themeSwitcher.checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function getThemeFromLocalStorage() {
    const themeInLocalStrg = localStorage.getItem('theme');
    if (themeInLocalStrg === Theme.DARK) {
        bodyColor.classList.add(Theme.DARK);
        themeSwitcher.checked = true;
    }
}

function setDarkTheme() {
    bodyColor.classList.add(Theme.DARK);
    bodyColor.classList.remove(Theme.LIGHT);
}

function setLightTheme() {
    bodyColor.classList.add(Theme.LIGHT);
    bodyColor.classList.remove(Theme.DARK);
}

const menuContainer = document.querySelector(".js-menu");
const cardsMarkup = createColorCardsMarkup(cards);
menuContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createColorCardsMarkup(cards) {
    return menuCardTpl(cards);
}




