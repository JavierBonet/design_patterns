import RSACryptographer from './RSACryptographer';

class RSACryptography implements Cryptography {
  createCryptographer() {
    return new RSACryptographer();
  }
}

export default RSACryptography;
