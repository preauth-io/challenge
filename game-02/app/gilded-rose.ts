import getFactors from "./services/get-factors";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            const {qualityFactor, canSellItem} = getFactors(item.name, item.sellIn, item.quality);
            item.quality += qualityFactor;
            if(canSellItem) {
                item.sellIn --;
            }
        });
        return this.items;
    }
}
