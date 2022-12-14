import { v4 as uuidv4 } from 'uuid';
import RegularCellPhone from './RegularCellPhone';

function main() {
  const imei = uuidv4();
  const cameras = [50, 24.5];
  const pixel7ProCellPhone: CellPhone = new RegularCellPhone(
    'Tiramisu (OS 13)',
    'Google',
    'Pixel 7 Pro',
    { width: 6.5, height: 13.4 },
    imei,
    cameras
  );

  const pixel7CellPhone = pixel7ProCellPhone.clone();

  pixel7CellPhone.setModel('Pixel 7');
  pixel7CellPhone.setImei(uuidv4());

  console.log(pixel7CellPhone);
  console.log();
  console.log('-------------');
  console.log();
  console.log(pixel7ProCellPhone);
}

main();
