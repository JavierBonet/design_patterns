import { MilwakeeTool } from './MilwakeeTool';

export class MilwakeeHammer extends MilwakeeTool implements Hammer {
  price = 200;
  handle_material: Material = 'plastic';
  head_material: Material = 'iron';
}
