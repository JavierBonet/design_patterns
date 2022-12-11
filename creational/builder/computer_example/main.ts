import Director from './Director';
import PCBuilder from './PCBuilder';

function main() {
  const computerBuilder = new PCBuilder();
  const director = new Director(computerBuilder);

  director.createGamingComputer();

  const computer = computerBuilder.getComputer();

  console.log(computer);
}

main();
