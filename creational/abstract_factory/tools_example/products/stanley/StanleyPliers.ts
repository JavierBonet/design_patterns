import { StanleyTool } from './StanleyTool';

const StanleyPliers: Pliers = Object.create(StanleyTool, {
  price: { value: 155 },
  handle_material: { value: 'plastic' },
  jaws_material: { value: 'steel' },
});

export { StanleyPliers };
