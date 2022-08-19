import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT } from './common';
import { Opportunity } from "../../generated/schema";
import { loadOrCreateStatus } from '../helpers/loadOrCreateStatus';
import { loadOrCreateGlobalStats } from './loadOrCreateGlobalStats';

export function loadOrCreateOpportunity(opportunityAddress: Bytes): Opportunity {
    let opportunity = Opportunity.load(opportunityAddress.toHexString());
    if (!opportunity) {
        opportunity = new Opportunity(opportunityAddress.toHexString());
        opportunity.bidsReceived = ZERO;
        opportunity.createdAt = ZERO_INT;
        opportunity.updatedAt = ZERO_INT;
        opportunity.status = loadOrCreateStatus(opportunityAddress).id;
        opportunity.save();

        const stats = loadOrCreateGlobalStats();
        stats.totalValidatorsCount = stats.totalOpportunitiesCount.plus(BigInt.fromI32(1));
        stats.save();
    }
    return opportunity;
}