interface ToolsFactory {
  createScrewDriver: () => ScrewDriver;
  createHammer: () => Hammer;
  createTweezers: () => Tweezers;
  createPliers: () => Pliers;
  createSaw: () => Saw;
  createDrill: () => Drill;
}

interface Tool {
  brand: string;
  price: number;
}

interface ScrewDriver extends Tool {
  handle_material: Material;
}

interface Hammer extends Tool {
  handle_material: Material;
  head_material: Material;
}

interface Tweezers extends Tool {
  material: Material;
}

interface Pliers extends Tool {
  handle_material: Material;
  jaws_material: Material;
}

interface Drill extends Tool {
  minimum_bit_diameter: number;
  maximum_bit_diameter: number;
  voltage: Voltage;
}

interface Saw extends Tool {
  handle_material: Material;
  blade_material: Material;
}

type Material = 'steel' | 'wood' | 'plastic' | 'iron';

type Voltage = '12v' | '18v' | '20v';
