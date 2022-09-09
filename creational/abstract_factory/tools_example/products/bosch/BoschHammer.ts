import { BoschTool } from './BoschTool';

export class BoschHammer extends BoschTool implements Hammer {
  price = 180;
  handle_material: Material = 'plastic';
  head_material: Material = 'iron';
}
