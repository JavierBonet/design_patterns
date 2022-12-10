import crypto from 'crypto';

// Defining algorithm
const algorithm = 'aes-256-cbc';
// Defining key
const key = crypto.randomBytes(32);
// Defining iv
const iv = crypto.randomBytes(16);

const encrypter = crypto.createCipheriv(algorithm, key, iv);

const decrypter = crypto.createDecipheriv(algorithm, key, iv);

class AESCryptographer implements Cryptographer {
  encrypt(input: string) {
    let encrypted = encrypter.update(input, 'utf8', 'hex');

    encrypted += encrypter.final('hex');

    return encrypted;
  }

  decrypt(encrypted: string) {
    let decrypted = decrypter.update(Buffer.from(encrypted, 'hex'));

    decrypted = Buffer.concat([decrypted, decrypter.final()]);

    return decrypted.toString();
  }
}

export default AESCryptographer;
