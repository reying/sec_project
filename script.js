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

        const menu = document.querySelector('menu'),
            menuItems = menu.querySelectorAll('a[href*="#"]'),
            body = document.querySelector('body');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.menu')) {
                handlerMenu();
            } else {
                if (target.closest('menu')) {
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
                } else {
                    if (menu.classList.contains('active-menu')) { handlerMenu(); }
                }
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

    // Слайдер
    const slider = () => {
        const slider = document.querySelector('.portfolio-content'),
            slide = document.querySelectorAll('.portfolio-item'),
            btns = document.querySelectorAll('.portfolio-btn'),
            portfolioDots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval;

        const addDots = () => {
            slide.forEach((elem, index) => {
                let dot = document.createElement('li');
                dot.classList.add('dot');
                if (index === 0) { dot.classList.add('dot-active'); }
                portfolioDots.append(dot);
            });
        };

        addDots();

        const dots = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) { currentSlide = 0; }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) { return; }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dots.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) { currentSlide = 0; }
            if (currentSlide < 0) { currentSlide = slide.length - 1; }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide();

    };

    slider();

    //калькулятор
    const calculator = () => {
        const calcBlock = document.querySelector('.calc-block');

        calcBlock.addEventListener('input', (event) => {
            if (event.target.tagName === 'INPUT') {
                event.target.value = event.target.value.replace(/\D/, '');
            }
        });

        const calc = (price = 100) => {
            const calcType = document.querySelector('.calc-type'),
                calcSquare = document.querySelector('.calc-square'),
                calcDay = document.querySelector('.calc-day'),
                calcCount = document.querySelector('.calc-count'),
                totalValue = document.getElementById('total');

            const countSum = () => {
                let total = 0,
                    countValue = 1,
                    dayValue = 1;
                const typeValue = calcType.options[calcType.selectedIndex].value,
                    squareValue = +calcSquare.value;

                if (calcCount.value > 1) {
                    countValue += (calcCount.value - 1) / 10;
                }

                if (calcDay.value && calcDay.value < 5) {
                    dayValue *= 2;
                } else if (calcDay.value && calcDay.value < 10) {
                    dayValue *= 1.5;
                }

                if (typeValue && squareValue) {
                    total = price * typeValue * squareValue * countValue * dayValue;
                }

                totalValue.textContent = total;
            };

            calcBlock.addEventListener('change', (event) => {
                const target = event.target;
                if (target.matches('select') || target.matches('input')) {
                    countSum();
                }
            });

        };

        calc(100);
    };

    calculator();

    // "наша команда"
    const command = () => {
        const commandPhoto = document.querySelectorAll('.command__photo'),
            command = document.getElementById('command');

        command.addEventListener('mouseover', (event) => {
            if (event.target.classList.contains('command__photo')) {
                event.target.src = event.target.dataset.img;
            }
        });

        command.addEventListener('mouseout', (event) => {
            if (event.target.classList.contains('command__photo')) {
                event.target.src = event.target.dataset.img.replace(/\w(?=\.)/, '');
            }
        });
    };

    command();

    // формы (валидация)
    const validateForms = () => {
        const body = document.querySelector('body');

        body.addEventListener('input', (event) => {
            const target = event.target;
            if (target.classList.contains('form-name') || target.classList.contains('mess')) {
                target.value = target.value.replace(/[^а-яё\-\s]/gi, '');
            } else if (target.classList.contains('form-email')) {
                target.value = target.value.replace(/[^a-z@\-_.!~*']/gi, '');
            } else if (target.classList.contains('form-phone')) {
                target.value = target.value.replace(/[^\d()-]/gi, '');
            }
        });

        body.addEventListener('blur', (event) => {
            let target = event.target;

            const correctedValue = (target) => {
                target.value = target.value.trim();
                target.value = target.value.replace(/\s{2,}/g, ' ');
                target.value = target.value.replace(/-{2,}/g, '-');

                target.value = target.value.replace(/^-+/g, '');
                target.value = target.value.replace(/-+$/g, '');
                target.value = target.value.trim();
            };

            correctedValue(target);

            if (target.classList.contains('form-name')) {
                target.value = target.value.toLowerCase();
                target.value = target.value.replace(/(\s|^|-)[а-яё]/gi, (match) => match.toUpperCase());
            }
        }, true);
    };

    validateForms();
});