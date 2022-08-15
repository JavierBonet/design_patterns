import { BoschToolsFactory } from './factories/BoschToolsFactory';
import { MakitaToolsFactory } from './factories/MakitaToolsFactory';
import { MilwakeeToolsFactory } from './factories/MilwakeeToolsFactory';
import { StanleyToolsFactory } from './factories/StanleyToolsFactory';

function main() {
  const handledBrands = new Set<string>();

  handledBrands.add('Bosch');
  handledBrands.add('Makita');
  handledBrands.add('Milwakee');
  handledBrands.add('Stanley');

  const args = process.argv;

  if (args.length > 2 && handledBrands.has(args[2])) {
    const brand = args[2];
    const toolsFactory: ToolsFactory = createToolFactory(brand);

    printToolsInfo(toolsFactory);
  } else {
    console.log('One of the following brands should be provided:');
    console.log('Bosch, Makita, Milwakee, Stanley');
    return;
  }
}

function createToolFactory(brand: string): ToolsFactory {
  let toolsFactory: ToolsFactory;
  switch (brand) {
    case 'Bosch':
      toolsFactory = Object.create(BoschToolsFactory);
      break;
    case 'Makita':
      toolsFactory = Object.create(MakitaToolsFactory);
      break;
    case 'Milwakee':
      toolsFactory = Object.create(MilwakeeToolsFactory);
      break;
    default:
      toolsFactory = Object.create(StanleyToolsFactory);
      break;
  }

  return toolsFactory;
}

function printToolsInfo(toolsFactory: ToolsFactory) {
  let screwDriver = toolsFactory.createScrewDriver();
  let hammer = toolsFactory.createHammer();
  let tweezers = toolsFactory.createTweezers();
  let pliers = toolsFactory.createPliers();
  let saw = toolsFactory.createSaw();
  let drill = toolsFactory.createDrill();

  console.log(`Brand: ${screwDriver.brand}`);
  console.log('');
  console.log('Screw driver');
  console.log(
    `$${screwDriver.price}, handle material: ${screwDriver.handle_material}`
  );
  console.log('');
  console.log('Hammer');
  console.log(
    `$${hammer.price}, handle material: ${hammer.handle_material}, head material: ${hammer.head_material}`
  );
  console.log('');
  console.log('Tweezers');
  console.log(`$${tweezers.price}, material: ${tweezers.material}`);
  console.log('');
  console.log('Pliers');
  console.log(
    `$${pliers.price}, handle material: ${pliers.handle_material}, jaws material: ${pliers.jaws_material}`
  );
  console.log('');
  console.log('Saw');
  console.log(
    `$${saw.price}, handle material: ${saw.handle_material}, blade material: ${saw.blade_material}`
  );
  console.log('');
  console.log('Drill');
  console.log(
    `$${drill.price}, minimum bit diameter: ${drill.minimum_bit_diameter}, maximum bit diameter: ${drill.maximum_bit_diameter}, voltage: ${drill.voltage}`
  );
}

main();
