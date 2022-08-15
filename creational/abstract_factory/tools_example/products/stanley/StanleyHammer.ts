import { StanleyTool } from './StanleyTool';

const StanleyHammer: Hammer = Object.create(StanleyTool, {
  price: { value: 160 },
  handle_material: { value: 'plastic' },
  head_material: { value: 'iron' },
});

export { StanleyHammer };
