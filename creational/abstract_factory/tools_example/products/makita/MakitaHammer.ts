import { MakitaTool } from './MakitaTool';

export class MakitaHammer extends MakitaTool implements Hammer {
  price = 200;
  handle_material: Material = 'plastic';
  head_material: Material = 'iron';
}
