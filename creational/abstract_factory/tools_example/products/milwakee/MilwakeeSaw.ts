import { MilwakeeTool } from './MilwakeeTool';

const MilwakeeSaw: Saw = Object.create(MilwakeeTool, {
  price: { value: 230 },
  handle_material: { value: 'plastic' },
  blade_material: { value: 'steel' },
});

export { MilwakeeSaw };
