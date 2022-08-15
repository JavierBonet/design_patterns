import { MakitaTool } from './MakitaTool';

const MakitaTweezers: Tweezers = Object.create(MakitaTool, {
  price: { value: 150 },
  material: { value: 'steel' },
});

export { MakitaTweezers };
