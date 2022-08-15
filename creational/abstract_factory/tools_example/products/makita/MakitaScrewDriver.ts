import { MakitaTool } from './MakitaTool';

const MakitaScrewDriver: ScrewDriver = Object.create(MakitaTool, {
  price: { value: 150 },
  handle_material: { value: 'plastic' },
});

export { MakitaScrewDriver };
