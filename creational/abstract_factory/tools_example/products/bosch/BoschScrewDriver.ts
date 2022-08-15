import { BoschTool } from './BoschTool';

const BoschScrewDriver: ScrewDriver = Object.create(BoschTool, {
  price: { value: 135 },
  handle_material: { value: 'plastic' },
});

export { BoschScrewDriver };
