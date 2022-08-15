import { MilwakeeTool } from './MilwakeeTool';

const MilwakeeHammer: Hammer = Object.create(MilwakeeTool, {
  price: { value: 200 },
  handle_material: { value: 'plastic' },
  head_material: { value: 'iron' },
});

export { MilwakeeHammer };
