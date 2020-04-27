import './styles/reset.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    window.mainModule = import('./js/main-module');
    window.mainModule.then(value => {
        const mainModule = value.default;
        mainModule.setCurrentYearToFooter();
        mainModule.initLoadAllProducts();
        mainModule.initScrollToTop();
    });
})
