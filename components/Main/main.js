import './main.css'

const renderMain = async (key) => {
    const main = document.querySelector('#app > main');
    const imagesList = document.createElement('ul');
    imagesList.className = 'rtc-main--images_list';

    const images = await fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${key}`).then((res) => res.json()).then((res) => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
            const image = res[i];
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
    }).catch(error => console.log(error));

    return images;
};

export default renderMain;