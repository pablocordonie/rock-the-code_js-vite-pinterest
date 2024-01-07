import './today.css'

const todayTemplate = () => `
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
`;

export default todayTemplate;