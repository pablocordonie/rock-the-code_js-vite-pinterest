import './menu.css'
import todayTemplate from './Today/today';
import searchTemplate from './Search-Desktop/search-desktop';
import enterpriseAndUserTemplates from './Enterprise/enterprise';

const renderMenu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');
    menuDiv.className = 'rtc-header--nav-menu';

    menuDiv.innerHTML += `
        <ul class="rtc-header--nav-menu_list">
            ${todayTemplate()}
            ${searchTemplate()}
            ${enterpriseAndUserTemplates()}
        </ul>
    `;
    return menuDiv;
};

export default renderMenu;