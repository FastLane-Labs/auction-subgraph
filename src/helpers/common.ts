import { Address, Bytes, ByteArray, TypedMap, JSONValue, BigInt, Wrapped, ipfs, json, log, Value } from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';

export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);
export const NEG_ONE = BigInt.fromI32(-1);

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