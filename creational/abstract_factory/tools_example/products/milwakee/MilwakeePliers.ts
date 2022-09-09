import { MilwakeeTool } from './MilwakeeTool';

export class MilwakeePliers extends MilwakeeTool implements Pliers {
  price = 190;
  handle_material: Material = 'plastic';
  jaws_material: Material = 'steel';
}
