import hotImgUrl from "../assets/kz-fire.svg";
import onlyAFewLeftImgUrl from "../assets/kz-few.svg";
import {getProducts} from "./api";


export function loadMoreTiles(limit = 8, offset = 0) {
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
            img.alt = tileData.name;
            img.src = `https://${tileData['imageUrl']}`;
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

            function resolvePromotionImage(price) {
                if (price['isMarkedDown']) {
                    return hotImgUrl;
                }
                if (price['isOutletPrice']) {
                    return onlyAFewLeftImgUrl;
                }
                return "";
            }

            function addPromotion(tileBody) {
                const promotion = document.createElement('p');
                promotion.classList.add('tile__promotion');

                const promotionImage = document.createElement('img');
                promotionImage.classList.add('tile__promotion--icon')
                promotionImage.alt = 'icon';
                promotionImage.src = resolvePromotionImage(tileData.price);

                promotion.appendChild(promotionImage);
                promotion.appendChild(document.createTextNode(tileData.promotionType));

                tileBody.appendChild(promotion);
            }

            function addTileName(tileBody) {
                const tileName = document.createElement('p');
                tileName.classList.add('tile__name');
                tileName.innerText = tileData['name'];
                tileBody.appendChild(tileName);
            }

            function addTilePrice(tileBody) {
                const tilePrice = document.createElement('p');
                tilePrice.classList.add('tile__price');
                tilePrice.innerText = tileData.price.current.text;
                tileBody.appendChild(tilePrice);
            }

            const tileBody = createTileBodyContainer();

            if (tileData.price['isOutletPrice'] || tileData.price['isMarkedDown']) {
                addPromotion(tileBody);
            }

            addTileName(tileBody);
            addTilePrice(tileBody);

            tile.appendChild(tileBody);
        }


        const tile = createTileContainer();

        addTileImage(tile);

        if (tileData['isSellingFast']) {
            addSaleLabel(tile);
        }

        addTileBody(tile);

        return tile;
    }

    const row = createRow();

    getProducts(4209, limit, offset)
        .then(data => {
            data['products'].forEach(value => {
                row.appendChild(createTile(value));
            });
        });
    const arrivalsProductsSection = document.getElementById('arrivalsProducts');
    arrivalsProductsSection.appendChild(row);
}
