import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, AUCTION_ID, ZERO_INT } from './common';
import { Round } from "../../generated/schema";

export function loadOrCreateRound(roundNum: BigInt): Round {
    let round = Round.load(roundNum.toString());
    if (!round) {
        round = new Round(roundNum.toString());
        round.startBlock = ZERO;
        round.startTimestamp = ZERO_INT;
        //round.endTimestamp = 0;
        round.totalBidsCount = ZERO;
        round.totalBidsSum = ZERO;
        round.addedOpportunities = new Array();
        round.addedValidators = new Array();
        round.createdAt = ZERO_INT;
        round.updatedAt = ZERO_INT;
        round.save();
    }
    return round;
}