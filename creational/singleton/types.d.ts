interface TokenGeneratorInterface {
  count: number;
  generateToken: () => string;
  getCount: () => number;
  incrementCount: () => void;
  decrementCount: () => void;
}
