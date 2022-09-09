import { StanleyTool } from './StanleyTool';

export class StanleySaw extends StanleyTool implements Saw {
  price = 200;
  handle_material: Material = 'plastic';
  blade_material: Material = 'steel';
}
