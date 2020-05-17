import {getProduct} from "./api";


export function loadFeaturedTiles() {

    const featured1 = document.getElementById('featured1');
    getProduct(12592338)
        .then(data => {
            fillData(featured1, data, true, 'offer__one');
        })
        .catch(error => {
            console.error(error);
            alert("Wystąpił błąd podczas komunikacji z serwerem. Spróbuj później.");
        });

    const featured2 = document.getElementById('featured2');
    getProduct(11072800)
        .then(data => {
            fillData(featured2, data, false, 'offer__two');
        })
        .catch(error => {
            console.error(error);
            alert("Wystąpił błąd podczas komunikacji z serwerem. Spróbuj później.");
        });

    const featured3 = document.getElementById('featured3');
    getProduct(12688919)
        .then(data => {
            fillData(featured3, data, false, 'offer__three');
        })
        .catch(error => {
            console.error(error);
            alert("Wystąpił błąd podczas komunikacji z serwerem. Spróbuj później.");
        });

    const featured4 = document.getElementById('featured4');
    getProduct(12566974)
        .then(data => {
            fillData(featured4, data, false, 'offer__four');
        })
        .catch(error => {
            console.error(error);
            alert("Wystąpił błąd podczas komunikacji z serwerem. Spróbuj później.");
        });

    function fillData(element, tileData, isFeatured, imageClass) {
        function addElementImage(element) {
            const img = document.createElement('img');
            img.classList.add(imageClass);
            img.classList.add('img-fluid');
            img.alt = tileData.name;
            img.src = `https://${tileData['media'].images[0].url}`;
            element.appendChild(img);
        }

        function addTitle(tile) {
            const title = document.createElement('span');
            title.classList.add('offer__title');
            if (isFeatured) {
                title.classList.add('offer__title--twoLine');
            }
            title.innerText = tileData.name;
            tile.appendChild(title);
        }

        function addShopNowLabel(tile) {
            const shopNowLabel = document.createElement('span');
            shopNowLabel.classList.add('offer__shop');
            if (isFeatured) {
                shopNowLabel.classList.add('offer__shop--border');
            }
            shopNowLabel.innerText = 'Shop now';
            tile.appendChild(shopNowLabel);
        }

        addElementImage(element);
        addTitle(element);
        addShopNowLabel(element);
    }
}


