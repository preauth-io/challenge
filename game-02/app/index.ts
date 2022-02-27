import { Item, GildedRose } from "./gilded-rose";

const items: Array<Item> = [
    {
        name: 'Sulfuras, Hand of Ragnaros',
        sellIn: 999,
        quality: 80
    },
    {
        name: 'Aged Brie',
        sellIn: 15,
        quality: 1
    },
    {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 15,
        quality: 1
    },
    {
        name: 'Other item',
        sellIn: 15,
        quality: 50
    },
    {
        name: 'Conjured',
        sellIn: 15,
        quality: 50
    }
];

const gildedRose = new GildedRose(items);

for (let index = 0; index < 50; index++) {
    const items: Array<Item> = gildedRose.updateQuality();
    // if(index === 5 || index === 10 || index === 15 || index === 20 || index === 49)
    console.log(`Iteration: ${index + 1}`, items);
}