import { MakitaTool } from './MakitaTool';

export class MakitaScrewDriver extends MakitaTool implements ScrewDriver {
  price = 150;
  handle_material: Material = 'plastic';
}
