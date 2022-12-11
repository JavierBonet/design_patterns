class GamingComputer implements Computer {
  graphicCard: GraphicCard | undefined;
  networkCard: NetworkCard | undefined;
  audioCard: AudioCard | undefined;
  motherBoard: MotherBoard | undefined;
  powerSupply: PowerSupply | undefined;
  ram: Ram[] | undefined;
  processor: Processor | undefined;
}

export default GamingComputer;
