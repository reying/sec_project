'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import scrollImg from './modules/scrollImg';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calculator from './modules/calculator';
import command from './modules/command';
import validateForms from './modules/validateForms';
import sendForm from './modules/sendForm';

// Таймер
countTimer('11 march 2021');
// Меню
toggleMenu();
// popUp
togglePopUp();
// scroll btn img
scrollImg();
// Табы
tabs();
// Слайдер
slider();
//калькулятор
calculator();
// "наша команда"
command();
// формы (валидация)
validateForms();
// send-ajax-form
sendForm();