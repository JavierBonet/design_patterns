interface ComputerBuilder {
  reset: () => Computer;
  setGraphicCard: (graphicCard: GraphicCard) => Computer;
  setNetworkCard: (networkCard: NetworkCard) => Computer;
  setAudioCard: (audioCard: AudioCard) => Computer;
  setMotherBoard: (motherBoard: MotherBoard) => Computer;
  setPowerSupply: (powerSupply: PowerSupply) => Computer;
  setRam: (ram: Ram[]) => Computer;
  setProcessor: (processor: Processor) => Computer;
}

interface Computer {
  graphicCard: GraphicCard | undefined;
  networkCard: NetworkCard | undefined;
  audioCard: AudioCard | undefined;
  motherBoard: MotherBoard | undefined;
  powerSupply: PowerSupply | undefined;
  ram: Ram[] | undefined;
  processor: Processor | undefined;
}

type GraphicCard = AMDGraphicCard | NvidiaGraphicCard;

type AMDGraphicCard =
  | 'Radeon 7000'
  | 'Radeon 7200'
  | 'Radeon 7500'
  | 'Radeon 8500'
  | 'Radeon 9200'
  | 'Radeon 9500'
  | 'Radeon 9500 Pro';

type NvidiaGraphicCard =
  | 'GeForce G 100'
  | 'GeForce GT 120'
  | 'GeForce GT 150'
  | 'GeForce 205'
  | 'GeForce GT 240'
  | 'GeForce GTX 275'
  | 'GeForce GT 340'
  | 'GeForce GTX 480'
  | 'GeForce GTX 590'
  | 'GeForce GTX 660 Ti'
  | 'GeForce GTX 690';

type NetworkCard =
  | 'Intel Network Card X710T4 Ethernet'
  | 'Intel Gigabit CT Desktop Adapter Single OEM'
  | 'Dual Channel 10GbE to x8 PCIe 2.0 Ethernet'
  | 'Connectx-5 Vpi Adapter Card EDR 100GBE QSFP';

type AudioCard =
  | 'Sound BlasterX G6 Hi-Res'
  | 'HyperX Amp USB Sound Card'
  | 'Creative Sound Blaster Audigy FX PCIe'
  | 'ASUS XONAR SE 5.1 Channel'
  | 'Creative Sound Blaster AE-7';

type MotherBoard =
  | 'Gigabyte Z690 Aorus Pro'
  | 'ASRock Z690 Extreme WiFi 6E'
  | 'Gigabyte Z690I Aorus Ultra Plus'
  | 'Gigabyte Aorus Z690 Tachyon'
  | 'MSI MAG B660M Mortar WIFI DDR4'
  | 'Asus ROG Strix B660-I Gaming WIFI ';

type PowerSupply =
  | 'Corsair CX450'
  | 'Corsair CX550F RGB'
  | 'Corsair RM550x'
  | 'XPG Core Reactor 650W '
  | 'Cooler Master V750 Gold V2';

type Ram =
  | 'G.Skill Trident Z5 RGB DDR5-6000 x 16GB'
  | 'Samsung DDR5-4800 x 16GB'
  | 'TeamGroup T-Force Xtreem ARGB DDR4-3600 x 8GB'
  | 'Patriot Viper Steel DDR4-4400 x 8GB'
  | 'Patriot Viper RGB DDR4-3600 x 8GB'
  | 'Patriot Viper 4 DDR4-3400 x 8GB'
  | 'Corsair Vengeance RGB Pro DDR4-3200 x 8GB'
  | 'Patriot Viper Steel DDR4-3200 x 16GB';

type Processor =
  | 'Intel Core i9-12900KS Processor'
  | 'Intel Core i9-13900KF'
  | 'Intel Core i9-13900K'
  | 'Intel Core i7-13700K'
  | 'Intel Core i7-12700KF'
  | 'AMD Ryzen 9 7950X'
  | 'AMD Ryzen 9 7900X'
  | 'AMD Ryzen 9 5950X'
  | 'AMD Ryzen 7 7700X'
  | 'AMD Ryzen 9 5900X';
