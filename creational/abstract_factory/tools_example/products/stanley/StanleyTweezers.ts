import { StanleyTool } from './StanleyTool';

const StanleyTweezers: Tweezers = Object.create(StanleyTool, {
  price: { value: 115 },
  material: { value: 'iron' },
});

export { StanleyTweezers };
