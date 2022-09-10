export class SteelWardrobe implements Wardrobe {
  name = 'Un-named';

  getMaterialAmounts(): { [material: string]: number } {
    return { steel: 1000, wood: 100 };
  }
}
