import './footer.css'

const renderFooter = () => {
    const footer = document.querySelector('#app > footer');

    const footerLinks = document.createElement('ul');
    footerLinks.className = 'rtc-footer--list';
    footerLinks.innerHTML += `
        <li class="rtc-footer--terms_item">
            <a
                href="https://policy.pinterest.com/es/terms-of-service"
                class="rtc-footer--terms_item-link"
                target="_blank"
                aria-label="Entra aquí para consultar los términos acerca de nuestros servicios"
                role="link">Términos del servicio</a>
        </li>
        <li class="rtc-footer--privacy_policy_item">
            <a
                href="https://policy.pinterest.com/es/privacy-policy"
                class="rtc-footer--privacy_policy_item-link"
                target="_blank"
                aria-label="Entra aquí para consultar nuestras políticas de privacidad"
                role="link">Política de privacidad</a>
        </li>
        <li class="rtc-footer--help_item">
            <a
                href="https://help.pinterest.com/es"
                class="rtc-footer--help_item-link"
                target="_blank"
                aria-label="Entra para consultar nuestro centro de asistencia al cliente"
                role="link"
                >Ayuda</a>
        </li>
        <li class="rtc-footer--iphone_app_item">
            <a
                href="https://apps.apple.com/us/app/pinterest/id429047995"
                class="rtc-footer--iphone_app_item-link"
                target="_blank"
                aria-label="Entra aquí para descargar nuestra app para dispositivos Iphone"
                role="link">Aplicación para Iphone</a>
        </li>
        <li class="rtc-footer--android_app_item">
            <a
                href="https://play.google.com/store/apps/details?id=com.pinterest&pli=1"
                class="rtc-footer--android_app_item-link"
                target="_blank"
                aria-label="Entra aquí para descargar nuestra app para dispositivos Android"
                role="link">Aplicación para Android</a>
        </li>
        <li class="rtc-footer--users_item">
            <a
                href="https://www.pinterest.es/html_sitemap/pinners_a.html"
                class="rtc-footer--users_item-link"
                target="_blank"
                aria-label="Entra para consultar el directorio de usuarios registrados en Pinterest"
                role="link"
                >Usuarios</a>
        </li>
        <li class="rtc-footer--collections_item">
            <a
                href="https://www.pinterest.es/html_sitemap/boards_a.html"
                class="rtc-footer--collections_item-link"
                target="_blank"
                aria-label="Entra para consultar el directorio de publicaciones registradas en Pinterest"
                role="link">Colecciones</a>
        </li>
        <li class="rtc-footer--shoppings_item">
            <a
                href="https://www.pinterest.es/html_sitemap/shopping_0.html"
                class="rtc-footer--shoppings_item-link"
                target="_blank"
                aria-label="Entra para consultar el directorio de compras registradas en Pinterest"
                role="link">Compras</a>
        </li>
        <li class="rtc-footer-today_item">
            <a
                href="https://www.pinterest.es/today/"
                class="rtc-footer--today_item-link"
                target="_blank"
                aria-label="Entra aquí para consultar las últimas tendencias en Pinterest"
                role="link">Hoy</a>
        </li>
        <li class="rtc-footer-explore_item">
            <a
                href="https://www.pinterest.es/ideas/"
                class="rtc-footer-explore_item-link"
                target="_blank"
                aria-label="Entra aquí para explorar diferentes ideas en Pinterest"
                role="link">Explorar</a>
        </li>
    `;

    footer.appendChild(footerLinks);
    return footer;
};

export default renderFooter;