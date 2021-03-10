const scrollImg = () => {
    const scroll = (item, event) => {
        event.preventDefault();
        const idBlock = item.getAttribute('href').substring(1),
            block = document.getElementById(idBlock);

        block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const btnImg = document.querySelector('main>a[href = "#service-block"]');
    btnImg.addEventListener('click', (event) => {
        scroll(btnImg, event);
    });
};

export default scrollImg;