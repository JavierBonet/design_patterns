import { StanleyTool } from './StanleyTool';

const StanleyScrewDriver: ScrewDriver = Object.create(StanleyTool, {
  price: { value: 120 },
  handle_material: { value: 'plastic' },
});

export { StanleyScrewDriver };
