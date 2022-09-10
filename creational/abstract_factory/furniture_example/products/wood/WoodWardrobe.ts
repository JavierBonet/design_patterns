export class WoodWardrobe implements Wardrobe {
  name = 'Un-named';

  getMaterialAmounts(): { [material: string]: number } {
    return { wood: 1000, steel: 100 };
  }
}
