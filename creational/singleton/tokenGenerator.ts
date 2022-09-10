export class TokenGenerator implements TokenGeneratorInterface {
  count = 0;

  generateToken = () => {
    return '12312';
  };

  getCount(): number {
    return this.count;
  }

  incrementCount(): void {
    this.count++;
  }

  decrementCount(): void {
    this.count--;
  }
}

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
