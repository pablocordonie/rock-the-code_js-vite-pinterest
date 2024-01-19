import './style.css'
import renderHeader from './components/Header/header';
import renderMain from './components/Main/main';
import renderFooter from './components/Footer/footer';
import searchImagesByQuery from './utils/query';

renderHeader();
renderMain(import.meta.env.VITE_KEY);
renderFooter();
searchImagesByQuery();
