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
    const toolsFactory = createToolFactory(brand);

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
      toolsFactory = new BoschToolsFactory();
      break;
    case 'Makita':
      toolsFactory = new MakitaToolsFactory();
      break;
    case 'Milwakee':
      toolsFactory = new MilwakeeToolsFactory();
      break;
    default:
      toolsFactory = new StanleyToolsFactory();
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

  console.log(screwDriver);

  console.log(hammer);

  console.log(tweezers);

  console.log(pliers);

  console.log(saw);

  console.log(drill);
}

main();
