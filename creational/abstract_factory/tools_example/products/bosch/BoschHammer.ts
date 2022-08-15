import { BoschTool } from './BoschTool';

const BoschHammer: Hammer = Object.create(BoschTool, {
  price: { value: 180 },
  handle_material: { value: 'plastic' },
  head_material: { value: 'iron' },
});

export { BoschHammer };
