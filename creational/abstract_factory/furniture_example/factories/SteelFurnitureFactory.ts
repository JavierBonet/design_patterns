import { SteelChair } from '../products/steel/SteelChair';
import { SteelTable } from '../products/steel/SteelTable';
import { SteelWardrobe } from '../products/steel/SteelWardrobe';

const SteelFurnitureFactory: FurnitureFactory = {
  createChair: function (name: string): Chair {
    const chair: Chair = Object.create(SteelChair);
    chair.name = name;

    return chair;
  },

  createTable: function (name: string): Table {
    const table: Table = Object.create(SteelTable);
    table.name = name;

    return table;
  },

  createWardrobe: function (name: string): Wardrobe {
    const wardrobe: Wardrobe = Object.create(SteelWardrobe);
    wardrobe.name = name;

    return wardrobe;
  },
};

export { SteelFurnitureFactory };
