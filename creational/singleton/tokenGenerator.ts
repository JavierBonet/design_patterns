const TokenGenerator: TokenGeneratorInterface = {
  count: 0,

  generateToken: () => {
    return '12312';
  },

  getCount: function (): number {
    return this.count;
  },

  incrementCount: function (): void {
    this.count++;
  },

  decrementCount: function (): void {
    this.count--;
  },
};

let instance: TokenGeneratorInterface | undefined = undefined;

function getInstance(): TokenGeneratorInterface {
  if (instance) {
    return instance;
  } else {
    instance = Object.create(TokenGenerator);
    return instance as TokenGeneratorInterface;
  }
}

export { getInstance };
