import { MakitaTool } from './MakitaTool';

const MakitaHammer: Hammer = Object.create(MakitaTool, {
  price: { value: 200 },
  handle_material: { value: 'plastic' },
  head_material: { value: 'iron' },
});

export { MakitaHammer };
