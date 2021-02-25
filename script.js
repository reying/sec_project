window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Таймер
    const countTimer = (deadline) => {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            idInterval;

        const getTimerRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, seconds, minutes, hours };
        };

        const updateClock = () => {
            let timer = getTimerRemaining();
            timerHours.textContent = (timer.hours < 10) ? `0${timer.hours}` : timer.hours;
            timerMinutes.textContent = (timer.minutes < 10) ? `0${timer.minutes}` : timer.minutes;
            timerSeconds.textContent = (timer.seconds < 10) ? `0${timer.seconds}` : timer.seconds;

            if (timer.timeRemaining < 0) {
                clearInterval(idInterval);
                timerHours.textContent = timerMinutes.textContent = timerSeconds.textContent = '00';
            }
        };
        idInterval = setInterval(updateClock);
    };

    countTimer('8 march 2021');

    // scroll
    const scroll = (item, event) => {
        event.preventDefault();
        const idBlock = item.getAttribute('href').substring(1),
            block = document.getElementById(idBlock);

        block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            menuItems = menu.querySelectorAll('a[href*="#"]');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        menu.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('menu');

            if (target) {
                menuItems.forEach((item) => {
                    if (item === event.target) {
                        if (item.getAttribute('href').substring(1) !== 'close') {
                            handlerMenu();
                            scroll(item, event);
                        } else {
                            handlerMenu();
                        }
                    }
                });
            }
        });
    };

    toggleMenu();

    // popUp
    const togglePopUp = () => {
        const popUp = document.querySelector('.popup'),
            popUpBtn = document.querySelectorAll('.popup-btn');

        const animate = () => {
            let count = 0,
                idInterval;
            const width = document.documentElement.clientWidth;

            popUp.style.display = 'block';

            const ascent = () => {
                count += 0.02;
                if (count < 1) {
                    popUp.style.opacity = count;
                } else {
                    clearInterval(idInterval);
                }
            };
            if (width >= 768) { idInterval = setInterval(ascent); }
        };

        popUpBtn.forEach((elem) => elem.addEventListener('click', animate));

        popUp.addEventListener('click', (event) => {
            let target = event.target;
            // if (target.classList.contains('popup-close') || target.classList.contains('form-btn'))
            if (target.tagName === "BUTTON") {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) { popUp.style.display = 'none'; }
            }
        });
    };

    togglePopUp();

    // scroll btn img
    const scrollImg = () => {
        const btnImg = document.querySelector('main>a[href = "#service-block"]');
        btnImg.addEventListener('click', (event) => {
            scroll(btnImg, event);
        });
    };

    scrollImg();

    // Табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tabs = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            tabContent.forEach((item, i) => {
                if (index === i) {
                    tabs[i].classList.add('active');
                    item.classList.remove('d-none');
                } else {
                    tabs[i].classList.remove('active');
                    item.classList.add('d-none');
                }
            });
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tabs.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();
});