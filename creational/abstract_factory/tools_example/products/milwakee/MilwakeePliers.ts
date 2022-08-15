import { MilwakeeTool } from './MilwakeeTool';

const MilwakeePliers: Pliers = Object.create(MilwakeeTool, {
  price: { value: 190 },
  handle_material: { value: 'plastic' },
  jaws_material: { value: 'steel' },
});

export { MilwakeePliers };
