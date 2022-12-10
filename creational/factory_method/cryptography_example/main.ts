import AESCryptography from './AESCryptographicCreator';
import RSACryptography from './RSACryptographicCreator';

function main() {
  const cryptography: Cryptography = new RSACryptography();
  // const cryptography: Cryptography = new AESCryptography();

  const cryptographer = cryptography.createCryptographer();

  const input = 'Hello cryptography world';

  console.log('Input - ', input);

  const encryted = cryptographer.encrypt(input);

  console.log('Encrypted - ', encryted);

  const decrypted = cryptographer.decrypt(encryted);

  console.log('Decrypted - ', decrypted);
}

main();
