import { BoschTool } from './BoschTool';

const BoschSaw: Saw = Object.create(BoschTool, {
  price: { value: 210 },
  handle_material: { value: 'plastic' },
  blade_material: { value: 'steel' },
});

export { BoschSaw };
