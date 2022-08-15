import { MakitaTool } from './MakitaTool';

const MakitaSaw: Saw = Object.create(MakitaTool, {
  price: { value: 250 },
  handle_material: { value: 'plastic' },
  blade_material: { value: 'steel' },
});

export { MakitaSaw };
