import { StanleyTool } from './StanleyTool';

export class StanleyPliers extends StanleyTool implements Pliers {
  price = 155;
  handle_material: Material = 'plastic';
  jaws_material: Material = 'steel';
}
