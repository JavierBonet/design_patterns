import { StanleyTool } from './StanleyTool';

const StanleySaw: Saw = Object.create(StanleyTool, {
  price: { value: 200 },
  handle_material: { value: 'plastic' },
  blade_material: { value: 'steel' },
});

export { StanleySaw };
