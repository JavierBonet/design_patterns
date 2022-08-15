import { MilwakeeDrill } from '../products/milwakee/MilwakeeDrill';
import { MilwakeeHammer } from '../products/milwakee/MilwakeeHammer';
import { MilwakeePliers } from '../products/milwakee/MilwakeePliers';
import { MilwakeeSaw } from '../products/milwakee/MilwakeeSaw';
import { MilwakeeScrewDriver } from '../products/milwakee/MilwakeeScrewDriver';
import { MilwakeeTweezers } from '../products/milwakee/MilwakeeTweezers';

const MilwakeeToolsFactory: ToolsFactory = {
  createScrewDriver: function (): ScrewDriver {
    const screwDriver: ScrewDriver = Object.create(MilwakeeScrewDriver);
    return screwDriver;
  },

  createHammer: function (): Hammer {
    const hammer: Hammer = Object.create(MilwakeeHammer);
    return hammer;
  },

  createTweezers: function (): Tweezers {
    const tweezers: Tweezers = Object.create(MilwakeeTweezers);
    return tweezers;
  },

  createPliers: function (): Pliers {
    const pliers: Pliers = Object.create(MilwakeePliers);
    return pliers;
  },

  createSaw: function (): Saw {
    const saw: Saw = Object.create(MilwakeeSaw);
    return saw;
  },

  createDrill: function (): Drill {
    const drill: Drill = Object.create(MilwakeeDrill);
    return drill;
  },
};

export { MilwakeeToolsFactory };
