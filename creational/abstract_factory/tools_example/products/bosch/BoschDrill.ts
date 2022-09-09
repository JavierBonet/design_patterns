import { BoschTool } from './BoschTool';

export class BoschDrill extends BoschTool implements Drill {
  price = 330;
  minimum_bit_diameter = 5;
  maximum_bit_diameter = 13;
  voltage: Voltage = '18v';
}
