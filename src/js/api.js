import {API_HOST, API_KEY} from "./config";

function getInit(method) {
    return {
        "method": method,
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        }
    };
}

export function getProducts(limit = 8, offset = 0) {
    return fetch(`https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=${offset}&categoryId=4209&limit=${limit}&store=US`, getInit('GET'));
}
