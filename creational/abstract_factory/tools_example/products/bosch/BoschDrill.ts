import { BoschTool } from './BoschTool';

const BoschDrill: Drill = Object.create(BoschTool, {
  price: { value: 330 },
  minimum_bit_diameter: { value: 5 },
  maximum_bit_diameter: { value: 13 },
  voltage: { value: '18v' },
});

export { BoschDrill };
