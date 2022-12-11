class Director {
  private computerBuilder: ComputerBuilder;

  constructor(computerBuilder: ComputerBuilder) {
    this.computerBuilder = computerBuilder;
  }

  createGamingComputer() {
    this.computerBuilder.setMotherBoard('Gigabyte Aorus Z690 Tachyon');
    this.computerBuilder.setProcessor('AMD Ryzen 9 7950X');
    this.computerBuilder.setRam([
      'Patriot Viper Steel DDR4-4400 x 8GB',
      'Patriot Viper Steel DDR4-4400 x 8GB',
    ]);
    this.computerBuilder.setGraphicCard('GeForce GTX 690');
    this.computerBuilder.setAudioCard('Creative Sound Blaster Audigy FX PCIe');
    this.computerBuilder.setNetworkCard(
      'Intel Gigabit CT Desktop Adapter Single OEM'
    );
    this.computerBuilder.setPowerSupply('Cooler Master V750 Gold V2');
  }
}

export default Director;
