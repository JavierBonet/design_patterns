import { StanleyTool } from './StanleyTool';

export class StanleyHammer extends StanleyTool implements Hammer {
  price = 160;
  handle_material: Material = 'plastic';
  head_material: Material = 'iron';
}
