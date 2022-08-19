import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT } from './common';
import { Opportunity } from "../../generated/schema";
import { loadOrCreateStatus } from '../helpers/loadOrCreateStatus';

export function loadOrCreateOpportunity(opportunityAddress: Bytes): Opportunity {
    let opportunity = Opportunity.load(opportunityAddress.toHexString());
    if (!opportunity) {
        opportunity = new Opportunity(opportunityAddress.toHexString());
        opportunity.bidsReceived = ZERO;
        opportunity.createdAt = ZERO_INT;
        opportunity.updatedAt = ZERO_INT;
        opportunity.status = loadOrCreateStatus(opportunityAddress).id;
        opportunity.save();
    }
    return opportunity;
}