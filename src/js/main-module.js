import {loadMoreTiles} from "./tile";
import {loadCarouselTiles} from "./carousel";
import {loadFeaturedTiles} from "./featured";
let arrivalsOffset = 8;
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
        _scrollButton.addEventListener('click', topFunction);
    },

    initLoadAllProducts: function () {
        loadMoreTiles();
    },

    initLoadCarouselItems: function () {
        loadCarouselTiles();
    },
    initLoadFeaturedTiles: function () {
        loadFeaturedTiles();
    },

    initLoadMoreProducts: function () {
        const button = document.getElementById('allProductsBtn');
        button.addEventListener('click', function () {
            let limit = 4;
            loadMoreTiles(limit, arrivalsOffset);
            arrivalsOffset += limit;
        })
    },

    updateFooterYear: function () {
        document.getElementById('footer-year').innerHTML = new Date().getFullYear().toString();
    }
}
