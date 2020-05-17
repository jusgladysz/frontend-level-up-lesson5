import {getProducts} from "./api";
import {showError} from "./alerts";


export function loadCarouselTiles() {
    function createRow() {
        const row = document.createElement('div');
        row.classList.add('row');
        return row;
    }

    function createCarouselItem(isActive = false) {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        if (isActive) {
            div.classList.add('active');
        }
        return div;
    }

    function createTileContainer(isFeatured) {
        const tileContainer = document.createElement('div');
        tileContainer.classList.add('col-md-4');
        if (!isFeatured) {
            tileContainer.classList.add('clearfix', 'd-none', 'd-md-block');
        }
        return tileContainer;
    }

    function createTile(tileData, isFeatured) {

        function addTileBody(tile) {
            function createTileBodyContainer() {
                const tileBody = document.createElement('div');
                tileBody.classList.add('featuredProduct');
                return tileBody;
            }

            function addTileImage(tileBody) {
                const img = document.createElement('img');
                img.classList.add('featuredProduct__image');
                img.alt = tileData.name;
                img.src = `https://${tileData['imageUrl']}`;
                tileBody.appendChild(img);
            }

            function addTileName(tileBody) {
                const tileName = document.createElement('span');
                tileName.classList.add('featuredProduct__title');
                tileName.innerText = tileData['name'];
                tileBody.appendChild(tileName);
            }

            function addTilePrice(tileBody) {
                const tilePrice = document.createElement('span');
                tilePrice.classList.add('featuredProduct__price');
                tilePrice.innerText = tileData.price.current.text;
                tileBody.appendChild(tilePrice);
            }


            const tileBody = createTileBodyContainer();

            addTileImage(tileBody);
            addTileName(tileBody);
            addTilePrice(tileBody);

            tile.appendChild(tileBody);
        }


        const tile = createTileContainer(isFeatured);

        addTileBody(tile);

        return tile;
    }

    function createCarouselSet(isActive, offset) {
        const carouselItem = createCarouselItem(isActive);
        const carouselItemRow = createRow();

        getProducts(4210, 3, offset)
            .then(data => {
                let isFirst = true;
                data['products'].forEach(value => {
                    carouselItemRow.appendChild(createTile(value, isFirst));
                    isFirst = false;
                });
            })
            .catch(error => {
                console.error(error);
                showError();
            })
        carouselItem.appendChild(carouselItemRow);
        return carouselItem;
    }

    const firstCarouselSet = createCarouselSet(true, 0);
    const secondCarouselSet = createCarouselSet(false, 3);
    const thirdCarouselSet = createCarouselSet(false, 6);

    const carouselSlidesSection = document.getElementById('carouselSlides');
    carouselSlidesSection.appendChild(firstCarouselSet);
    carouselSlidesSection.appendChild(secondCarouselSet);
    carouselSlidesSection.appendChild(thirdCarouselSet);
}


