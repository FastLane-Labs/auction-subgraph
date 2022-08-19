import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT } from './common';
import { Pair } from "../../generated/schema";

export function loadOrCreatePair(targetPairStr: string): Pair {
    let pair = Pair.load(targetPairStr);
    if (!pair) {
        pair = new Pair(targetPairStr);
        pair.totalBidsCount = ZERO;
        pair.totalBidsSum = ZERO;
        pair.save();
    }
    return pair;
}