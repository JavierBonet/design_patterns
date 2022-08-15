import { StanleyDrill } from '../products/stanley/StanleyDrill';
import { StanleyHammer } from '../products/stanley/StanleyHammer';
import { StanleyPliers } from '../products/stanley/StanleyPliers';
import { StanleySaw } from '../products/stanley/StanleySaw';
import { StanleyScrewDriver } from '../products/stanley/StanleyScrewDriver';
import { StanleyTweezers } from '../products/stanley/StanleyTweezers';

const StanleyToolsFactory: ToolsFactory = {
  createScrewDriver: function (): ScrewDriver {
    const screwDriver: ScrewDriver = Object.create(StanleyScrewDriver);
    return screwDriver;
  },

  createHammer: function (): Hammer {
    const hammer: Hammer = Object.create(StanleyHammer);
    return hammer;
  },

  createTweezers: function (): Tweezers {
    const tweezers: Tweezers = Object.create(StanleyTweezers);
    return tweezers;
  },

  createPliers: function (): Pliers {
    const pliers: Pliers = Object.create(StanleyPliers);
    return pliers;
  },

  createSaw: function (): Saw {
    const saw: Saw = Object.create(StanleySaw);
    return saw;
  },

  createDrill: function (): Drill {
    const drill: Drill = Object.create(StanleyDrill);
    return drill;
  },
};

export { StanleyToolsFactory };
