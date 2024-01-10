import './search.css'

const renderSearch = () => {
    const search = document.createElement('search');
    search.setAttribute('id', 'search');

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.className = 'rtc-header--nav-menu-search-form';
    search.appendChild(form);

    const input = document.createElement('input');
    input.setAttribute('type', 'search');
    input.className = 'rtc-header--nav-menu-search-form-input';
    input.setAttribute('name', 'search');
    input.setAttribute('placeholder', 'Busca una temática concreta');
    form.appendChild(input);

    form.innerHTML += `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="rtc-header--nav-menu-search-form-input_svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
            />
        </svg>
    `;

    search.appendChild(form);
    return search;
};

export default renderSearch;