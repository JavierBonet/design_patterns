import { MakitaTool } from './MakitaTool';

export class MakitaSaw extends MakitaTool implements Saw {
  price = 250;
  handle_material: Material = 'plastic';
  blade_material: Material = 'steel';
}
