import { StanleyTool } from './StanleyTool';

export class StanleyScrewDriver extends StanleyTool implements ScrewDriver {
  price = 120;
  handle_material: Material = 'plastic';
}
