const _scrollButton = document.getElementById('myBtn');

function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        _scrollButton.style.display = 'block';
    } else {
        _scrollButton.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default {
    initScrollToTop: function () {
        window.onscroll = scrollFunction;
        _scrollButton.addEventListener('click', topFunction)
    },

    initLoadAllProducts: function () {
        const button = document.getElementById('allProductsBtn');
        const section = document.getElementById('allProducts');
        button.addEventListener('click', function () {
            section.hidden = false;
        })
    },

    setCurrentYearToFooter: function () {
        document.getElementById('footer-year').innerHTML = new Date().getFullYear().toString();
    }
}
