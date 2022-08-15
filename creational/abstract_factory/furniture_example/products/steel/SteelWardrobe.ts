const SteelWardrobe: Wardrobe = {
  name: 'Un-named',

  getMaterialAmounts: function (): { [material: string]: number } {
    return { steel: 1000, wood: 100 };
  },
};

export { SteelWardrobe };
