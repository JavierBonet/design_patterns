import { MakitaTool } from './MakitaTool';

const MakitaDrill: Drill = Object.create(MakitaTool, {
  price: { value: 350 },
  minimum_bit_diameter: { value: 5 },
  maximum_bit_diameter: { value: 13 },
  voltage: { value: '18v' },
});

export { MakitaDrill };
