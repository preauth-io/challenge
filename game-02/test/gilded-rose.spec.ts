import { expect } from 'chai';
import { Item, GildedRose } from "../app/gilded-rose";

const testItems: Array<Item> = [
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
        sellIn: 0,
        quality: 50
    },
    {
        name: 'Other item',
        sellIn: 0,
        quality: 10
    },
    {
        name: 'Conjured',
        sellIn: 10,
        quality: 50
    },
    {
        name: 'Another item',
        sellIn: 0,
        quality: 0
    },
];

const gildedRose = new GildedRose(testItems);
const result = gildedRose.updateQuality();

describe('updateQuality()', function () {
    it('should return an array', function() {
        expect(result).to.be.an('array');
    });

    it('Ragnaros should have quality of 80 and SellIn of 999', function() {
        expect(result.find(item => item.name === 'Sulfuras, Hand of Ragnaros')).to.have.property('quality').eql(80)
        expect(result.find(item => item.name === 'Sulfuras, Hand of Ragnaros')).to.have.property('sellIn').eql(999)
    });

    it('Aged Brie should have quality of 2 and SellIn of 14', function() {
        expect(result.find(item => item.name === 'Aged Brie')).to.have.property('quality').eql(2)
        expect(result.find(item => item.name === 'Aged Brie')).to.have.property('sellIn').eql(14)
    });

    it('Backstage passes to a TAFKAL80ETC concert should have quality of 0 and SellIn of -1', function() {
        expect(result.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert')).to.have.property('quality').eql(0)
        expect(result.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert')).to.have.property('sellIn').eql(-1)
    });

    it('Other item should have quality of 8 and SellIn of -1', function() {
        expect(result.find(item => item.name === 'Other item')).to.have.property('quality').eql(8)
        expect(result.find(item => item.name === 'Other item')).to.have.property('sellIn').eql(-1)
    });

    it('Conjured should have quality of 48 and SellIn of 9', function() {
        expect(result.find(item => item.name === 'Conjured')).to.have.property('quality').eql(48)
        expect(result.find(item => item.name === 'Conjured')).to.have.property('sellIn').eql(9)
    });

    it('Another item should have quality of 0 and SellIn of -1', function() {
        expect(result.find(item => item.name === 'Another item')).to.have.property('quality').eql(0)
        expect(result.find(item => item.name === 'Another item')).to.have.property('sellIn').eql(-1)
    });
});
