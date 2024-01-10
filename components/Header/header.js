import './header.css'
import renderLogo from './Logo/logo';
import renderMenu from './Menu/menu';
import renderSearch from './Search/search';

const renderHeader = () => {
    const header = document.querySelector('#app > header');

    const nav = document.createElement('nav');
    nav.className = 'rtc-header--nav';

    nav.appendChild(renderLogo());
    nav.appendChild(renderMenu());

    header.appendChild(nav);
    header.appendChild(renderSearch());

    return header;
};

export default renderHeader;