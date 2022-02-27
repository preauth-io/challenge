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

interface Factor {
    qualityFactor: number;
    canSellItem: boolean;
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    getFactors(itemName: string, sellIn: number, quality: number): Factor {
        switch (itemName) {
            case 'Aged Brie':
                if(quality < 50) {
                    if(sellIn > 0) {
                        return {qualityFactor: 1, canSellItem: true};
                    }
                    
                    if(quality < 49) {
                        return {qualityFactor: 2, canSellItem: true};
                    }
                }

                return {qualityFactor: 0, canSellItem: true}
            case 'Sulfuras, Hand of Ragnaros':
                return {qualityFactor: 0, canSellItem: false};

            case 'Backstage passes to a TAFKAL80ETC concert':
                if(quality < 50 && quality > 0) {
                    if(sellIn > 10) {
                        return {qualityFactor: 1, canSellItem: true};
                    }

                    if(sellIn > 5 && quality < 49) {
                        return {qualityFactor: 2, canSellItem: true};
                    }

                    if(sellIn > 0) {
                        return {qualityFactor: 3, canSellItem: true};
                    }
                }

                return {qualityFactor: quality * -1, canSellItem: true};
            
            case 'Conjured':
                if(quality > 1) {
                    if(sellIn > 0) {
                        return {qualityFactor: -2, canSellItem: true};
                    }
                    
                    if(quality > 3) {
                        return {qualityFactor: -4, canSellItem: true};
                    }
                }

                return {qualityFactor: quality * -1, canSellItem: true}
            default:
                if(quality > 0) {
                    if(sellIn > 0) {
                        return {qualityFactor: -1, canSellItem: true};
                    }
                    
                    if(quality > 1) {
                        return {qualityFactor: -2, canSellItem: true};
                    }
                }

                return {qualityFactor: quality * -1, canSellItem: true}
        }
    }

    updateQuality() {
        this.items.forEach(item => {
            const {qualityFactor, canSellItem} = this.getFactors(item.name, item.sellIn, item.quality);
            item.quality += qualityFactor;
            if(canSellItem) {
                item.sellIn --;
            }
        });
        return this.items;
    }
}
