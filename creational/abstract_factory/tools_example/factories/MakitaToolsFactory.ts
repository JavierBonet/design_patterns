import { MakitaDrill } from '../products/makita/MakitaDrill';
import { MakitaHammer } from '../products/makita/MakitaHammer';
import { MakitaPliers } from '../products/makita/MakitaPliers';
import { MakitaSaw } from '../products/makita/MakitaSaw';
import { MakitaScrewDriver } from '../products/makita/MakitaScrewDriver';
import { MakitaTweezers } from '../products/makita/MakitaTweezers';

export class MakitaToolsFactory implements ToolsFactory {
  createScrewDriver(): ScrewDriver {
    const screwDriver = new MakitaScrewDriver();
    return screwDriver;
  }

  createHammer(): Hammer {
    const hammer = new MakitaHammer();
    return hammer;
  }

  createTweezers(): Tweezers {
    const tweezers = new MakitaTweezers();
    return tweezers;
  }

  createPliers(): Pliers {
    const pliers = new MakitaPliers();
    return pliers;
  }

  createSaw(): Saw {
    const saw = new MakitaSaw();
    return saw;
  }

  createDrill(): Drill {
    const drill = new MakitaDrill();
    return drill;
  }
}
