import { MilwakeeTool } from './MilwakeeTool';

export class MilwakeeDrill extends MilwakeeTool implements Drill {
  price = 370;
  minimum_bit_diameter = 5;
  maximum_bit_diameter = 13;
  voltage: Voltage = '18v';
}
