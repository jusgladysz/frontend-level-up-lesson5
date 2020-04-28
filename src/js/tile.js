export class Tile {

    constructor(
        imageAltText,
        imageSrc,
        isSale,
        promotionType,
        tileName,
        price
    ) {
        this.imageAltText = imageAltText;
        this.imageSrc = imageSrc;
        this.isSale = isSale;
        this.promotionType = promotionType;
        this.tileName = tileName;
        this.price = price;
    }
}

export class PromotionType {
    static get BEST_SELLER() {
        return "best seller";
    }

    static get NEW() {
        return "New";
    }

    static get HOT() {
        return "Hot";
    }

    static get TOP_RATE() {
        return "Top rate";
    }

    static get ONLY_A_FEW_LEFT() {
        return "Only a few left";
    }

    static get NONE() {
        return "NONE";
    }
}

