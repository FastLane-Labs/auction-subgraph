import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT } from './common';
import { Searcher } from "../../generated/schema";

export function loadOrCreateSearcher(targetSearcher: Bytes): Searcher {
    let searcher = Searcher.load(targetSearcher.toHexString());
    if (!searcher) {
        searcher = new Searcher(targetSearcher.toHexString());
        searcher.address = targetSearcher;
        searcher.bidsAdded = ZERO;
        searcher.roundsWonCount = ZERO;
        searcher.lastRoundParticipated = ZERO;
        searcher.roundsParticipated = ZERO;
        searcher.lastRoundWon = ZERO;
        searcher.createdAt = ZERO_INT;
        searcher.updatedAt = ZERO_INT;
        searcher.save();
    }
    return searcher;
}