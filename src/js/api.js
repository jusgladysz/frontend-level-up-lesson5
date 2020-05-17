import {API_HOST, API_KEY} from "./config";

function getInit() {
    return {
        "method": 'GET',
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        }
    };
}

export function getProducts(categoryId, limit = 8, offset = 0) {
    return fetch(`https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=${offset}&categoryId=${categoryId}&limit=${limit}&store=US`, getInit())
        .then(response => response.json())
        .catch(error => console.error(error));
}


export function getProduct(productId = 9851612) {
    return fetch(`https://asos2.p.rapidapi.com/products/v3/detail?store=US&sizeSchema=US&lang=en-US&currency=USD&id=${productId}`, getInit())
        .then(response => response.json())
        .catch(error => console.error(error));
}
