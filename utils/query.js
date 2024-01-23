const renderImagesByQuery = async (query, key) => {
    const main = document.querySelector('#app > main');
    main.innerHTML = '';

    const imagesList = document.createElement('ul');
    imagesList.className = 'rtc-main--images_list';

    const newImages = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${key}`).then((res) => res.json()).then((res) => {
        const imagesArray = res.results;
        console.log(imagesArray);
        if (!imagesArray.length) {
            main.innerHTML += '<h3 class="rtc-main--no_images-h3">No se han encontrado las imágenes requeridas</h3>';
        } else {
            for (let i = 0; i < imagesArray.length; i++) {
                const image = imagesArray[i];
                const imgLi = document.createElement('li');
                imgLi.className = 'rtc-main--images-item';
                imgLi.classList.add(`item-${i + 1}`);

                const img = document.createElement('img');
                img.src = `${image.urls.regular}`;
                img.alt = `${image.alt_description}`;
                img.className = `rtc-main--${image.user.username}_img`;
                img.classList.add('rtc-main--images-item-img');
                img.setAttribute('loading', 'lazy');

                imgLi.appendChild(img);
                imagesList.appendChild(imgLi);
                main.appendChild(imagesList);
            }
        }
    }).catch(error => console.error('Revisa el siguiente error, puede que el límite de peticiones al servidor se haya sobrepasado -> ', error));

    return newImages;
};

const searchImagesByQuery = () => {
    const desktopInput = document.querySelector('.rtc-header--nav-menu-desktop_search-form-input');
    const desktopSearchButton = document.querySelector('.rtc-header--nav-menu-desktop_search-form-input_svg');
    const input = document.querySelector('.rtc-header--nav-menu-search-form-input');
    const searchButton = document.querySelector('.rtc-header--nav-menu-search-form-input_svg');

    desktopInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && desktopInput.value !== '') {
            renderImagesByQuery(desktopInput.value, import.meta.env.VITE_KEY);
            desktopInput.value = '';
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && input.value !== '') {
            renderImagesByQuery(input.value, import.meta.env.VITE_KEY);
            input.value = '';
        }
    });

    desktopSearchButton.addEventListener('click', (event) => {
        if (event.type === 'click' && desktopInput.value !== '') {
            renderImagesByQuery(desktopInput.value, import.meta.env.VITE_KEY);
            desktopInput.value = '';
        }
    });

    searchButton.addEventListener('click', (event) => {
        if (event.type === 'click' && input.value !== '') {
            renderImagesByQuery(input.value, import.meta.env.VITE_KEY);
            input.value = '';
        }
    });
};

export default searchImagesByQuery;