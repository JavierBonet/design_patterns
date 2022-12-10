const NodeRSA = require('node-rsa');

class RSACryptographer implements Cryptographer {
  private cryptographer = new NodeRSA({ b: 512 });

  encrypt(input: string) {
    return this.cryptographer.encrypt(input, 'base64');
  }

  decrypt(encrypted: string) {
    return this.cryptographer.decrypt(encrypted, 'utf8');
  }
}

export default RSACryptographer;
