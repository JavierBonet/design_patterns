const WoodWardrobe: Wardrobe = {
  name: 'Un-named',

  getMaterialAmounts: function (): { [material: string]: number } {
    return { wood: 1000, steel: 100 };
  },
};

export { WoodWardrobe };
