import { MilwakeeTool } from './MilwakeeTool';

const MilwakeeDrill: Drill = Object.create(MilwakeeTool, {
  price: { value: 370 },
  minimum_bit_diameter: { value: 5 },
  maximum_bit_diameter: { value: 13 },
  voltage: { value: '18v' },
});

export { MilwakeeDrill };
