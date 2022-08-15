import { BoschTool } from './BoschTool';

const BoschPliers: Pliers = Object.create(BoschTool, {
  price: { value: 175 },
  handle_material: { value: 'plastic' },
  jaws_material: { value: 'steel' },
});

export { BoschPliers };
