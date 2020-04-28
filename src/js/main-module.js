import {PromotionType, Tile} from "./tile";
import bestSellerImgUrl from '../assets/kz-number-one.svg';
import topRateImgUrl from '../assets/kz-star-line.png';
import hotImgUrl from '../assets/kz-fire.svg';
import onlyAFewLeftImgUrl from '../assets/kz-few.svg';
import newImgUrl from '../assets/kz-bolt-line.svg';

const _scrollButton = document.getElementById('myBtn');

const productsToAdd = [];
productsToAdd.push(new Tile(
    "9",
    "https://via.placeholder.com/309x390?text=9",
    false,
    PromotionType.NONE,
    'Extra exclusive item',
    "$189"
))
productsToAdd.push(new Tile(
    "10",
    "https://via.placeholder.com/309x390?text=10",
    false,
    PromotionType.HOT,
    'Extra exclusive item',
    "$111"
))
productsToAdd.push(new Tile(
    "11",
    "https://via.placeholder.com/309x390?text=11",
    true,
    PromotionType.BEST_SELLER,
    'Extra exclusive item',
    "$139"
))
productsToAdd.push(new Tile(
    "12",
    "https://via.placeholder.com/309x390?text=12",
    false,
    PromotionType.NONE,
    'Extra exclusive item',
    "$179"
))


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

function loadAllProducts() {
    function createRow() {
        const row = document.createElement('div');
        row.classList.add('row');
        return row;
    }

    function createTile(tileData) {
        function createTileContainer() {
            const tile = document.createElement('div');
            tile.classList.add('col-6', 'col-md-3', 'card', 'tile');
            return tile;
        }


        function addTileImage(tile) {
            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.alt = tileData.imageAltText;
            img.src = tileData.imageSrc;
            tile.appendChild(img);
        }

        function addSaleLabel(tile) {
            const saleLabel = document.createElement('span');
            saleLabel.classList.add('tile__imgText');
            saleLabel.innerText = 'Sale';
            tile.appendChild(saleLabel);
        }

        function addTileBody(tile) {
            function createTileBodyContainer() {
                const tileBody = document.createElement('div');
                tileBody.classList.add('card-body', 'tile__body');
                return tileBody;
            }

            function resolvePromotionImage(promotionType) {
                switch (promotionType) {
                    case PromotionType.BEST_SELLER:
                        return bestSellerImgUrl;
                    case PromotionType.HOT:
                        return hotImgUrl;
                    case PromotionType.NEW:
                        return newImgUrl;
                    case PromotionType.ONLY_A_FEW_LEFT:
                        return onlyAFewLeftImgUrl;
                    case PromotionType.TOP_RATE:
                        return topRateImgUrl;
                    default:
                        return "";
                }
            }

            function addPromotion(tileBody) {
                const promotion = document.createElement('p');
                promotion.classList.add('tile__promotion');

                const promotionImage = document.createElement('img');
                promotionImage.classList.add('tile__promotion--icon')
                promotionImage.alt = 'icon';
                promotionImage.src = resolvePromotionImage(tileData.promotionType);

                promotion.appendChild(promotionImage);
                promotion.appendChild(document.createTextNode(tileData.promotionType));

                tileBody.appendChild(promotion);
            }

            function addTileName(tileBody) {
                const tileName = document.createElement('p');
                tileName.classList.add('tile__name');
                tileName.innerText = tileData.tileName;
                tileBody.appendChild(tileName);
            }

            function addTilePrice(tileBody) {
                const tilePrice = document.createElement('p');
                tilePrice.classList.add('tile__price');
                tilePrice.innerText = tileData.price;
                tileBody.appendChild(tilePrice);
            }

            const tileBody = createTileBodyContainer();

            if (PromotionType.NONE !== tileData.promotionType) {
                addPromotion(tileBody);
            }

            addTileName(tileBody);
            addTilePrice(tileBody);

            tile.appendChild(tileBody);
        }


        const tile = createTileContainer();

        addTileImage(tile);

        if (tileData.isSale) {
            addSaleLabel(tile);
        }

        addTileBody(tile);

        return tile;
    }

    const row = createRow();

    productsToAdd.forEach(value => {
        row.appendChild(createTile(value));
    })

    const newArrivalsSection = document.getElementById('newArrivals');
    newArrivalsSection.appendChild(row);
}

export default {
    initScrollToTop: function () {
        window.onscroll = scrollFunction;
        _scrollButton.addEventListener('click', topFunction)
    },

    initLoadAllProducts: function () {
        const button = document.getElementById('allProductsBtn');
        const section = document.getElementById('allProductsLoader');
        button.addEventListener('click', function () {
            section.hidden = true;
            loadAllProducts();
        })
    },

    updateFooterYear: function () {
        document.getElementById('footer-year').innerHTML = new Date().getFullYear().toString();
    }
}
