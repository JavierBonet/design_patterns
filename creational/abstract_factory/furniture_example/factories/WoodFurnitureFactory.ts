import { WoodChair } from '../products/wood/WoodChair';
import { WoodTable } from '../products/wood/WoodTable';
import { WoodWardrobe } from '../products/wood/WoodWardrobe';

export class WoodFurnitureFactory implements FurnitureFactory {
  createChair(name: string): Chair {
    const chair: Chair = Object.create(WoodChair);
    chair.name = name;

    return chair;
  }

  createTable(name: string): Table {
    const table: Table = Object.create(WoodTable);
    table.name = name;

    return table;
  }

  createWardrobe(name: string): Wardrobe {
    const wardrobe: Wardrobe = Object.create(WoodWardrobe);
    wardrobe.name = name;

    return wardrobe;
  }
}
