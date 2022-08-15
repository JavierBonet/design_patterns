import { MilwakeeTool } from './MilwakeeTool';

const MilwakeeScrewDriver: ScrewDriver = Object.create(MilwakeeTool, {
  price: { value: 155 },
  handle_material: { value: 'plastic' },
});

export { MilwakeeScrewDriver };
