const CryptoJS = require('crypto-js');
const keys = 'meklvJqN0jZ0Q6uZP65Tz5WzZxZJd0BV';

// encrypt
export function encrypt(data) {
  const encryptData = CryptoJS.AES.encrypt(JSON.stringify(data), keys).toString();
  return encryptData.toString();
}

// decrypt
export function decrypt(data) {
  const bytes = CryptoJS.AES.decrypt(data, keys);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
}


// Encrypt
export function encryptId(data) {
  const encryptData = CryptoJS.AES.encrypt(JSON.stringify(data), keys).toString();
  return encryptData;
}

// Decrypt
export function decryptId(data) {
  try {
    const bytes = CryptoJS.AES.decrypt(data, keys);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.error('Decryption failed:', error);
    return null; // Handle invalid data gracefully
  }
}