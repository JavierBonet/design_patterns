import { getInstance } from './tokenGenerator';

function main() {
  const tokenGeneratorInstance = getInstance();
  console.log(tokenGeneratorInstance.getCount());
  tokenGeneratorInstance.incrementCount();
  tokenGeneratorInstance.incrementCount();

  const tokenGeneratorInstance2 = getInstance();
  console.log(tokenGeneratorInstance2.getCount());
}

main();
