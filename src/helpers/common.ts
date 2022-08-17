import { Address, Bytes, ByteArray, TypedMap, JSONValue, BigInt, Wrapped, ipfs, json, log, Value, crypto } from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO_STR = '0x0000000000000000000000000000000000000000';

export const ADDRESS_ZERO = Bytes.fromHexString(ADDRESS_ZERO_STR);

export const ZERO = BigInt.fromI32(0);
export const ZERO_INT = 0;
export const ONE = BigInt.fromI32(1);
export const NEG_ONE = BigInt.fromI32(-1);

export const MAX_AUCTION_VALUE = BigInt.fromString("340282366920938463463374607431768211455");

export function getStringValue(obj: TypedMap<string, JSONValue>, key: string): string {
    if (obj.isSet(key)) {
      const val = obj.get(key);
      if (val && !val.isNull()) {
        return val.toString();
      }
    }
    return '';
  };
  
  export function getBigIntValue(obj: TypedMap<string, JSONValue>, key: string): BigInt {
    if (obj.isSet(key)) {
      const val = obj.get(key);
      if (val && !val.isNull()) {
        return val.toBigInt();
      }
    }
    return ZERO;
  };

  export function byteArrayFromHex(s: string): ByteArray {
    if (s.length % 2 !== 0) {
      throw new TypeError('Hex string must have an even number of characters');
    }
    let out = new Uint8Array(s.length / 2);
    for (var i = 0; i < s.length; i += 2) {
      out[i / 2] = parseInt(s.substring(i, i + 2), 16) as u32;
    }
  
    let bytes = Bytes.fromUint8Array(out);
    let hex = bytes.toHexString();
    return ByteArray.fromHexString(hex);
  }

  // Helper for concatenating two byte arrays
export function concat(a: ByteArray, b: ByteArray): ByteArray {
    let out = new Uint8Array(a.length + b.length);
    for (let i = 0; i < a.length; i++) {
      out[i] = a[i];
    }
    for (let j = 0; j < b.length; j++) {
      out[a.length + j] = b[j];
    }
  
    let bytes = Bytes.fromUint8Array(out);
    let hex = bytes.toHexString();
    return ByteArray.fromHexString(hex);
  }
  
  const Zeros = new ByteArray(32);
  Zeros.fill(0);
  
  export function namehash(partition: Array<string>): string {
    let result: ByteArray = Zeros;
    while (partition.length > 0) {
      let data = partition[partition.length - 1];
      let label = ByteArray.fromUTF8(data);
  
      result = crypto.keccak256(concat(result, crypto.keccak256(label)));
  
      partition.pop();
    }
  
    return result.toHexString();
  }
  
  export function convertToLowerCase(str: string): string {
    // create a result variable
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      // get the code of the current character
      let code = str.charCodeAt(i);
  
      // check if it's within the range of capital letters
      if (code > 64 && code < 91) {
        // if so, add a new character to the result string
        // of the character from our code, plus 32
        result += String.fromCharCode(code + 32);
      } else {
        // otherwise, just add the current character
        result += str.charAt(i);
      }
    }
  
    // return the result
    return result;
  }