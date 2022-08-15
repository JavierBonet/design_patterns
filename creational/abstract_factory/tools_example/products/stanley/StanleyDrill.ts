import { StanleyTool } from './StanleyTool';

const StanleyDrill: Drill = Object.create(StanleyTool, {
  price: { value: 310 },
  minimum_bit_diameter: { value: 5 },
  maximum_bit_diameter: { value: 13 },
  voltage: { value: '18v' },
});

export { StanleyDrill };
