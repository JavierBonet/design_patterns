class RegularCellPhone implements CellPhone {
  operativeSystem: OperativeSystem;
  brand: CellPhoneBrand;
  model: CellPhoneModel;
  displayDimensions: { width: number; height: number };
  imei: string;
  cameras: number[];

  constructor(
    operativeSystem: OperativeSystem,
    brand: CellPhoneBrand,
    model: CellPhoneModel,
    displayDimensions: { width: number; height: number },
    imei: string,
    cameras: number[]
  ) {
    this.operativeSystem = operativeSystem;
    this.brand = brand;
    this.model = model;
    this.displayDimensions = { ...displayDimensions };
    this.imei = imei;
    this.cameras = cameras;
  }

  setOperativeSystem(operativeSystem: OperativeSystem) {
    this.operativeSystem = operativeSystem;
  }

  setBrand(brand: CellPhoneBrand) {
    this.brand = brand;
  }

  setModel(model: CellPhoneModel) {
    this.model = model;
  }

  setDisplayDimensions(width: number, height: number) {
    this.displayDimensions = { width, height };
  }

  setImei(imei: string) {
    this.imei = imei;
  }

  setCameras(cameras: number[]) {
    this.cameras = cameras;
  }

  clone() {
    return new RegularCellPhone(
      this.operativeSystem,
      this.brand,
      this.model,
      this.displayDimensions,
      this.imei,
      this.cameras
    );
  }
}

export default RegularCellPhone;
