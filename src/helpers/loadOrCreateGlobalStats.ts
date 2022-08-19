import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT, STATS_ID } from './common';
import { GlobalStats } from "../../generated/schema";

export function loadOrCreateGlobalStats(): GlobalStats {
    let stats = GlobalStats.load(STATS_ID);
    if (!stats) {
        stats = new GlobalStats(STATS_ID);
        stats.totalBidsCount = ZERO;
        stats.totalBidsSum = ZERO;
        stats.totalValidatorsCount = ZERO;
        stats.totalValidatorsPaid = ZERO;
        stats.totalOpportunitiesCount = ZERO;
        stats.save();
    }
    return stats;
}