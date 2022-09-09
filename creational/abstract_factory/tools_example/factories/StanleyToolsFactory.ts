import { StanleyDrill } from '../products/stanley/StanleyDrill';
import { StanleyHammer } from '../products/stanley/StanleyHammer';
import { StanleyPliers } from '../products/stanley/StanleyPliers';
import { StanleySaw } from '../products/stanley/StanleySaw';
import { StanleyScrewDriver } from '../products/stanley/StanleyScrewDriver';
import { StanleyTweezers } from '../products/stanley/StanleyTweezers';

export class StanleyToolsFactory implements ToolsFactory {
  createScrewDriver(): ScrewDriver {
    const screwDriver = new StanleyScrewDriver();
    return screwDriver;
  }

  createHammer(): Hammer {
    const hammer = new StanleyHammer();
    return hammer;
  }

  createTweezers(): Tweezers {
    const tweezers = new StanleyTweezers();
    return tweezers;
  }

  createPliers(): Pliers {
    const pliers = new StanleyPliers();
    return pliers;
  }

  createSaw(): Saw {
    const saw = new StanleySaw();
    return saw;
  }

  createDrill(): Drill {
    const drill = new StanleyDrill();
    return drill;
  }
}
