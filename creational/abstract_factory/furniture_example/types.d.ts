interface FurnitureFactory {
  createChair: (name: string) => Chair;
  createTable: (name: string) => Table;
  createWardrobe: (name: string) => Wardrobe;
}

interface Chair {
  name: string;
  getNumberOfLegs: () => number;
  getMaterialAmount: () => number;
}

interface Table {
  name: string;
  getNumberOfLegs: () => number;
  getMaterialAmount: () => number;
}

interface Wardrobe {
  name: string;
  getMaterialAmounts: () => { [material: string]: number };
}
