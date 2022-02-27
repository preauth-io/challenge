interface Factor {
    qualityFactor: number;
    canSellItem: boolean;
};

const getFactors = (itemName: string, sellIn: number, quality: number): Factor => {
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

export default getFactors;