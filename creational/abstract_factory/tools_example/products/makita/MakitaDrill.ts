import { MakitaTool } from './MakitaTool';

export class MakitaDrill extends MakitaTool implements Drill {
  price = 350;
  minimum_bit_diameter = 5;
  maximum_bit_diameter = 13;
  voltage: Voltage = '18v';
}
