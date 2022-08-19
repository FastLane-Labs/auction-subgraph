import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT } from './common';
import { Bid } from "../../generated/schema";

export function loadOrCreateBid(targetBidStr: string): Bid {
    let bid = Bid.load(targetBidStr);
    if (!bid) {
        bid = new Bid(targetBidStr);
        // bid.validator = '';
        // bid.opportunity = '';
        // bid.searcher = '';
        // bid.searcherContract = '';
        bid.timestamp = ZERO_INT;
        bid.bidAmount = ZERO;
        bid.save();
    }
    return bid;
}