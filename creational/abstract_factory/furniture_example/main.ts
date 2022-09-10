import { WoodFurnitureFactory } from './factories/WoodFurnitureFactory';

function main() {
  const factory: FurnitureFactory = Object.create(WoodFurnitureFactory);

  const chair = factory.createChair('CHAIR');
  const table = factory.createTable('TABLE');
  const wardrobe = factory.createWardrobe('WARDROBE');

  console.log(chair);
  console.log(table);
  console.log(wardrobe);
}

main();
