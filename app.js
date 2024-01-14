import './style.css'

import renderHeader from './components/Header/header';
import renderMain from './components/Main/main';

renderHeader();
renderMain(import.meta.env.VITE_KEY);
