import './enterprise.css'
import userTemplate from '../User/user';

const enterpriseAndUserTemplates = () => `
    <li class="rtc-header--nav-menu-enterprise_user_lists">
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
        ${userTemplate()}
    </li>
`;

export default enterpriseAndUserTemplates;