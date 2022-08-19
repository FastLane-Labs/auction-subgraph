import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT } from './common';
import { Auction } from "../../generated/schema";
import { loadOrCreateGlobalStats } from './loadOrCreateGlobalStats';

export function loadOrCreateAuction(): Auction {
    let auction = Auction.load('MainAuction');
    if (!auction) {
        auction = new Auction('MainAuction');
        auction.globalStats = loadOrCreateGlobalStats().id;
        auction.address = ADDRESS_ZERO;
        auction.minimumIncrement = ZERO;
        auction.fee = ZERO;
        auction.bidToken = ADDRESS_ZERO;
        auction.paused = false;
        auction.ops = ADDRESS_ZERO;
        auction.resolverMaxGasPrice = ZERO;
        auction.autoPayBatchSize = ZERO_INT;
        auction.minimumAutoship = ZERO;
        auction.save();
    }
    return auction;
}