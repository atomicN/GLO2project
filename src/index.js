"use strict"

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validate from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';

timer('1 january 2022');
menu();
modal();
validate();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'dot', 'portfolio-item-active', 'dot-active');
calc();