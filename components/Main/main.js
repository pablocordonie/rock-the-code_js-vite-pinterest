
const renderMain = async (key) => {
    const main = document.querySelector('#app > main');
    const images = await fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${key}`).then((res) => res.json()).then((res) => {
        console.log(res);
        for (const image of res) {
            const img = document.createElement('img');
            img.src = `${image.urls.regular}`;
            img.alt = `${image.alt_description}`;
            img.className = `rtc-main--${image.user.username}_img`;
            img.setAttribute('loading', 'lazy');
            main.appendChild(img);
        }
    }).catch(error => console.log(error));

    return images;
};

export default renderMain;