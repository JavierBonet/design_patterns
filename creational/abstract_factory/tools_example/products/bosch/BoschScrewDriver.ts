import { BoschTool } from './BoschTool';

export class BoschScrewDriver extends BoschTool implements ScrewDriver {
  price = 135;
  handle_material: Material = 'plastic';
}
