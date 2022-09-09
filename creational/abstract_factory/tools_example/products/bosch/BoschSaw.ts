import { BoschTool } from './BoschTool';

export class BoschSaw extends BoschTool implements Saw {
  price = 210;
  handle_material: Material = 'plastic';
  blade_material: Material = 'steel';
}
