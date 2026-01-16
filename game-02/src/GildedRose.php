<?php

declare(strict_types=1);

namespace GildedRose;

final class GildedRose
{
    private const MAX_QUALITY = 50;
    private const MIN_QUALITY = 0;
    
    private const AGED_BRIE = 'Aged Brie';
    private const SULFURAS = 'Sulfuras, Hand of Ragnaros';
    private const BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert';
    private const CONJURED = 'Conjured Mana Cake';

    /**
     * @param Item[] $items
     */
    public function __construct(
        private array $items  
    ) {
    }


    public function updateQuality(): void
    {
        foreach ($this->items as $item) {
            $this->updateItem($item);
        }
    }

    private function updateItem(object $item): void
    {
        $this->updateItemQuality($item);
        $this->updateSellIn($item);
    }

    private function updateItemQuality(object $item): void
    {
        switch (true) {
            case $item->name === self::SULFURAS:
                // Legeary item
                break;
                
            case $item->name === self::AGED_BRIE:
                $this->updateAgedBrie($item);
                break;
                
            case $item->name === self::BACKSTAGE_PASS:
                $this->updateBackstagePass($item);
                break;
                
            case $item->name === self::CONJURED:
                $this->updateConjured($item);
                break;
                
            default:
                $this->updateNormalItem($item);
                break;
        }
    }

    private function updateSellIn(object $item): void
    {
            $item->sellIn--;
    }

    private function updateAgedBrie(object $item): void
    {
        $this->increaseQuality($item);
    }

    private function updateBackstagePass(object $item): void
    {
        if ($item->sellIn <= 0) {
            $item->quality = 0;
            return;
        }

        $this->increaseQuality($item);

        if ($item->sellIn <= 10) {
            $this->increaseQuality($item);
        }

        if ($item->sellIn <= 5) {
            $this->increaseQuality($item);
        }
    }

    private function updateNormalItem(object $item): void
    {
        $this->decreaseQuality($item);
        
        if ($item->sellIn <= 0) {
            $this->decreaseQuality($item);
        }
    }

    private function updateConjured(object $item): void
    {
        $this->decreaseQuality($item, 2);
        
        if ($item->sellIn <= 0) {
            $this->decreaseQuality($item, 2);
        }
    }

    private function increaseQuality(object $item, int $amount = 1): void
    {
        $item->quality = min($item->quality + $amount, self::MAX_QUALITY);
    }

    private function decreaseQuality(object $item, int $amount = 1): void
    {
        $item->quality = max($item->quality - $amount, self::MIN_QUALITY);
    }

}
