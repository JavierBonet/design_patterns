import { BoschDrill } from '../products/bosch/BoschDrill';
import { BoschHammer } from '../products/bosch/BoschHammer';
import { BoschPliers } from '../products/bosch/BoschPliers';
import { BoschSaw } from '../products/bosch/BoschSaw';
import { BoschScrewDriver } from '../products/bosch/BoschScrewDriver';
import { BoschTweezers } from '../products/bosch/BoschTweezers';

export class BoschToolsFactory implements ToolsFactory {
  createScrewDriver(): ScrewDriver {
    const screwDriver = new BoschScrewDriver();
    return screwDriver;
  }

  createHammer(): Hammer {
    const hammer = new BoschHammer();
    return hammer;
  }

  createTweezers(): Tweezers {
    const tweezers = new BoschTweezers();
    return tweezers;
  }

  createPliers(): Pliers {
    const pliers = new BoschPliers();
    return pliers;
  }

  createSaw(): Saw {
    const saw = new BoschSaw();
    return saw;
  }

  createDrill(): Drill {
    const drill = new BoschDrill();
    return drill;
  }
}
