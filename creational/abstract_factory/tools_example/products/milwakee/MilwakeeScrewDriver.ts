import { MilwakeeTool } from './MilwakeeTool';

export class MilwakeeScrewDriver extends MilwakeeTool implements ScrewDriver {
  price = 155;
  handle_material: Material = 'plastic';
}
