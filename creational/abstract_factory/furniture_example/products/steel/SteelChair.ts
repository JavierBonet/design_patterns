export class SteelChair implements Chair {
  name = 'Un-named';

  getNumberOfLegs(): number {
    return 4;
  }

  getMaterialAmount(): number {
    return 70;
  }
}
