import { StanleyTool } from './StanleyTool';

export class StanleyDrill extends StanleyTool implements Drill {
  price = 310;
  minimum_bit_diameter = 5;
  maximum_bit_diameter = 13;
  voltage: Voltage = '18v';
}
