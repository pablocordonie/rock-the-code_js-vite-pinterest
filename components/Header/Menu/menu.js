import './menu.css'
import todayTemplate from './Today/today';
import searchTemplate from './Search/search';
import enterpriseTemplate from './Enterprise/enterprise';
import userTemplate from './User/user';

const renderMenu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');

    menuDiv.innerHTML += `
        <ul class="rtc-header--nav-menu">
            ${todayTemplate()}
            ${searchTemplate()}
            ${enterpriseTemplate()}
            ${userTemplate()}
        </ul>
    `;
    return menuDiv;
};

export default renderMenu;