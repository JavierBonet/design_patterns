import { BoschDrill } from '../products/bosch/BoschDrill';
import { BoschHammer } from '../products/bosch/BoschHammer';
import { BoschPliers } from '../products/bosch/BoschPliers';
import { BoschSaw } from '../products/bosch/BoschSaw';
import { BoschScrewDriver } from '../products/bosch/BoschScrewDriver';
import { BoschTweezers } from '../products/bosch/BoschTweezers';

const BoschToolsFactory: ToolsFactory = {
  createScrewDriver: function (): ScrewDriver {
    const screwDriver: ScrewDriver = Object.create(BoschScrewDriver);
    return screwDriver;
  },

  createHammer: function (): Hammer {
    const hammer: Hammer = Object.create(BoschHammer);
    return hammer;
  },

  createTweezers: function (): Tweezers {
    const tweezers: Tweezers = Object.create(BoschTweezers);
    return tweezers;
  },

  createPliers: function (): Pliers {
    const pliers: Pliers = Object.create(BoschPliers);
    return pliers;
  },

  createSaw: function (): Saw {
    const saw: Saw = Object.create(BoschSaw);
    return saw;
  },

  createDrill: function (): Drill {
    const drill: Drill = Object.create(BoschDrill);
    return drill;
  },
};

export { BoschToolsFactory };
