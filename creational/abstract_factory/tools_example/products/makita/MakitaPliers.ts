import { MakitaTool } from './MakitaTool';

const MakitaPliers: Pliers = Object.create(MakitaTool, {
  price: { value: 170 },
  handle_material: { value: 'plastic' },
  jaws_material: { value: 'steel' },
});

export { MakitaPliers };
