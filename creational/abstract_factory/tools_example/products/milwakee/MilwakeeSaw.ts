import { MilwakeeTool } from './MilwakeeTool';

export class MilwakeeSaw extends MilwakeeTool implements Saw {
  price = 230;
  handle_material: Material = 'plastic';
  blade_material: Material = 'steel';
}
