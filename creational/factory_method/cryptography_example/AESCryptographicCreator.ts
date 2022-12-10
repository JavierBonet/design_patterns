import AESCryptographer from './AESCryptographer';

class AESCryptography implements Cryptography {
  createCryptographer() {
    return new AESCryptographer();
  }
}

export default AESCryptography;
