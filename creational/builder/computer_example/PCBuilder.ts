import GamingComputer from './GamingComputer';

class PCBuilder implements ComputerBuilder {
  private gamingComputer: Computer;

  constructor() {
    this.gamingComputer = new GamingComputer();
  }

  reset() {
    this.gamingComputer = new GamingComputer();
    return this.gamingComputer;
  }

  setGraphicCard(graphicCard: GraphicCard) {
    this.gamingComputer.graphicCard = graphicCard;
    return this.gamingComputer;
  }

  setNetworkCard(networkCard: NetworkCard) {
    this.gamingComputer.networkCard = networkCard;

    return this.gamingComputer;
  }

  setAudioCard(audioCard: AudioCard) {
    this.gamingComputer.audioCard = audioCard;

    return this.gamingComputer;
  }

  setMotherBoard(motherBoard: MotherBoard) {
    this.gamingComputer.motherBoard = motherBoard;

    return this.gamingComputer;
  }

  setPowerSupply(powerSupply: PowerSupply) {
    this.gamingComputer.powerSupply = powerSupply;

    return this.gamingComputer;
  }

  setRam(ram: Ram[]) {
    this.gamingComputer.ram = ram;

    return this.gamingComputer;
  }

  setProcessor(processor: Processor) {
    this.gamingComputer.processor = processor;

    return this.gamingComputer;
  }

  getComputer() {
    return this.gamingComputer;
  }
}

export default PCBuilder;
