import { MilwakeeTool } from './MilwakeeTool';

const MilwakeeTweezers: Tweezers = Object.create(MilwakeeTool, {
  price: { value: 160 },
  material: { value: 'iron' },
});

export { MilwakeeTweezers };
