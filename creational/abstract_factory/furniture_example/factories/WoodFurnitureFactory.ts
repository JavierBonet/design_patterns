import { WoodChair } from '../products/wood/WoodChair';
import { WoodTable } from '../products/wood/WoodTable';
import { WoodWardrobe } from '../products/wood/WoodWardrobe';

const WoodFurnitureFactory: FurnitureFactory = {
  createChair: function (name: string): Chair {
    const chair: Chair = Object.create(WoodChair);
    chair.name = name;

    return chair;
  },

  createTable: function (name: string): Table {
    const table: Table = Object.create(WoodTable);
    table.name = name;

    return table;
  },

  createWardrobe: function (name: string): Wardrobe {
    const wardrobe: Wardrobe = Object.create(WoodWardrobe);
    wardrobe.name = name;

    return wardrobe;
  },
};

export { WoodFurnitureFactory };
