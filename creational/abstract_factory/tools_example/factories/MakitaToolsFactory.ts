import { MakitaDrill } from '../products/makita/MakitaDrill';
import { MakitaHammer } from '../products/makita/MakitaHammer';
import { MakitaPliers } from '../products/makita/MakitaPliers';
import { MakitaSaw } from '../products/makita/MakitaSaw';
import { MakitaScrewDriver } from '../products/makita/MakitaScrewDriver';
import { MakitaTweezers } from '../products/makita/MakitaTweezers';

const MakitaToolsFactory: ToolsFactory = {
  createScrewDriver: function (): ScrewDriver {
    const screwDriver: ScrewDriver = Object.create(MakitaScrewDriver);
    return screwDriver;
  },

  createHammer: function (): Hammer {
    const hammer: Hammer = Object.create(MakitaHammer);
    return hammer;
  },

  createTweezers: function (): Tweezers {
    const tweezers: Tweezers = Object.create(MakitaTweezers);
    return tweezers;
  },

  createPliers: function (): Pliers {
    const pliers: Pliers = Object.create(MakitaPliers);
    return pliers;
  },

  createSaw: function (): Saw {
    const saw: Saw = Object.create(MakitaSaw);
    return saw;
  },

  createDrill: function (): Drill {
    const drill: Drill = Object.create(MakitaDrill);
    return drill;
  },
};

export { MakitaToolsFactory };
