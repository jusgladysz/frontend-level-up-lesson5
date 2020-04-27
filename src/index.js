import './styles/reset.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import mainModule from './js/main-module';

document.addEventListener('DOMContentLoaded', () => {
    mainModule.setCurrentYearToFooter();
    mainModule.initLoadAllProducts();
    mainModule.initScrollToTop();
});
