import { MakitaTool } from './MakitaTool';

export class MakitaPliers extends MakitaTool implements Pliers {
  price = 170;
  handle_material: Material = 'plastic';
  jaws_material: Material = 'steel';
}
