import { BoschTool } from './BoschTool';

const BoschTweezers: Tweezers = Object.create(BoschTool, {
  price: { value: 130 },
  material: { value: 'iron' },
});

export { BoschTweezers };
