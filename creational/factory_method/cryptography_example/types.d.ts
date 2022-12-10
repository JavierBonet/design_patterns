interface Cryptography {
  createCryptographer: () => Cryptographer;
}

interface Cryptographer {
  encrypt: (input: string) => string;
  decrypt: (encrypted: string) => string;
}
