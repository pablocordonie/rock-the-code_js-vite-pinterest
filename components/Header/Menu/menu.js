import './menu.css'

const renderMenu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');

    menuDiv.innerHTML += `
        <ul class="rtc-header--nav-menu">
            <li class="rtc-header--nav-menu-trending">
                <ul class="rtc-header--nav-menu-trending_links">
                    <li class="rtc-header--nav-menu-trending_item">
                        <a
                            href="https://www.pinterest.es/today/"
                            class="rtc-header--nav-menu-trending_item-link"
                            target="_blank"
                            aria-label="Entra aquí para consultar las últimas tendencias en Pinterest"
                            role="link">Hoy</a>
                    </li>
                    <li class="rtc-header--nav-menu-trending_item">
                        <a
                            href="https://www.pinterest.es/ideas/"
                            class="rtc-header--nav-menu-trending_item-link"
                            target="_blank"
                            aria-label="Entra aquí para explorar diferentes ideas en Pinterest"
                            role="link">Explorar</a>
                    </li>
                </ul>
            </li>    
            <li class="rtc-header--nav-menu-enterprise">
                <ul class="rtc-header--nav-menu-enterprise_links">
                    <li class="rtc-header--nav-menu-enterprise_item">
                        <a
                            href="https://help.pinterest.com/es/guide/all-about-pinterest"
                            class="rtc-header--nav-menu-enterprise_item-guide"
                            target="_blank"
                            aria-label="Entra aquí para saber cómo usar Pinterest"
                            role="link">Info</a>
                    </li>
                    <li>
                        <a
                            href="https://business.pinterest.com/es/"
                            class="rtc-header--nav-menu-enterprise_item-company"
                            target="_blank"
                            aria-label="Entra aquí para saber más sobre la empresa que dirige Pinterest"
                            role="link">Empresa</a>
                    </li>
                    <li>
                        <a
                            href="https://newsroom.pinterest.com/es"
                            class="rtc-header--nav-menu-enterprise_item-blog"
                            target="_blank"
                            aria-label="Entra en el blog de Pinterest"
                            role="link"
                            >Blog</a>
                    </li>
                </ul>
            </li>
            <li class="rtc-header--nav-menu-user">
                <img
                    class="rtc-header--nav-menu-user-image"
                    src="#"
                    alt="Imagen de usuario"
                >
            </li>
        </ul>
    `;
    return menuDiv;
};

export default renderMenu;