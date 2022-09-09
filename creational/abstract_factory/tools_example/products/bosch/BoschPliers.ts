import { BoschTool } from './BoschTool';

export class BoschPliers extends BoschTool implements Pliers {
  price = 175;
  handle_material: Material = 'plastic';
  jaws_material: Material = 'steel';
}
