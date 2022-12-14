interface Cloneable<T> {
  clone: () => T;
}

interface CellPhone extends Cloneable<CellPhone> {
  operativeSystem: OperativeSystem;
  brand: CellPhoneBrand;
  model: CellPhoneModel;
  displayDimensions: { width: number; height: number };
  imei: string;
  cameras: number[];

  setOperativeSystem: (operativeSystem: OperativeSystem) => void;
  setBrand: (brand: CellPhoneBrand) => void;
  setModel: (model: CellPhoneModel) => void;
  setDisplayDimensions: (width: number, height: number) => void;
  setImei: (imei: string) => void;
  setCameras: (cameras: number[]) => void;
}

type OperativeSystem = AndroidOperativeSystem | IOS | MicrosoftOperativeSystem;

type AndroidOperativeSystem =
  | 'Tiramisu (OS 13)'
  | 'Snow Cone (OS 12)'
  | 'Red Velvet Cake (OS 11)'
  | 'Quince Tart (OS 10)';

type IOS = 'iOS 16' | 'iOS 15' | 'iOS 14' | 'iOS 13';

type MicrosoftOperativeSystem =
  | 'Windows Mobile 6.5'
  | 'Windows Mobile 6.1'
  | 'Windows Mobile 6.0'
  | 'Windows Mobile 5.0';

type CellPhoneBrand =
  | 'Alcatel'
  | 'Apple'
  | 'Samsung'
  | 'Archos'
  | 'Asus'
  | 'Google'
  | 'Huawei'
  | 'Motorola'
  | 'Microsoft'
  | 'Razer';

type CellPhoneModel =
  | AlcatelModel
  | AppleModel
  | SamsungModel
  | ArchosModel
  | AsusModel
  | GoogleModel
  | HuaweiModel
  | MotorolaModel
  | MicrosoftModel
  | RazerModel;

type AlcatelModel = '1B' | '1L Pro' | '1 (2021)';
type AppleModel = 'iPhone 14 Pro Max' | 'iPhone 14 Pro' | 'iPhone 14 Plus';
type SamsungModel = 'Galaxy M04' | 'Galaxy A04e' | 'Galaxy A04s';
type ArchosModel = 'Oxygen 68XL' | 'Oxygen 63' | 'Oxygen 57';
type AsusModel = 'ROG Phone 6D Ultimate' | 'Zenfone 9' | 'ROG Phone 6 Pro';
type GoogleModel = 'Pixel 7 Pro' | 'Pixel 7' | 'Pixel 6a';
type HuaweiModel = 'Enjoy 50z' | 'Pocket S' | 'Nova Y61';
type MotorolaModel = 'Moto G72' | 'Moto E22i' | 'Moto Edge 30 Ultra';
type MicrosoftModel = 'Lumia 650' | 'Lumia 950 XL Dual SIM' | 'Lumia 950 XL';
type RazerModel = 'Phone 2' | 'Phone';
