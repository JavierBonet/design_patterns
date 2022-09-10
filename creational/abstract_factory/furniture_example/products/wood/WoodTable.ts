export class WoodTable implements Table {
  name = 'Un-named';

  getNumberOfLegs(): number {
    return 4;
  }

  getMaterialAmount(): number {
    return 500;
  }
}
