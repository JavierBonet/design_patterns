import { MilwakeeDrill } from '../products/milwakee/MilwakeeDrill';
import { MilwakeeHammer } from '../products/milwakee/MilwakeeHammer';
import { MilwakeePliers } from '../products/milwakee/MilwakeePliers';
import { MilwakeeSaw } from '../products/milwakee/MilwakeeSaw';
import { MilwakeeScrewDriver } from '../products/milwakee/MilwakeeScrewDriver';
import { MilwakeeTweezers } from '../products/milwakee/MilwakeeTweezers';

export class MilwakeeToolsFactory implements ToolsFactory {
  createScrewDriver(): ScrewDriver {
    const screwDriver = new MilwakeeScrewDriver();
    return screwDriver;
  }

  createHammer(): Hammer {
    const hammer = new MilwakeeHammer();
    return hammer;
  }

  createTweezers(): Tweezers {
    const tweezers = new MilwakeeTweezers();
    return tweezers;
  }

  createPliers(): Pliers {
    const pliers = new MilwakeePliers();
    return pliers;
  }

  createSaw(): Saw {
    const saw = new MilwakeeSaw();
    return saw;
  }

  createDrill(): Drill {
    const drill = new MilwakeeDrill();
    return drill;
  }
}
