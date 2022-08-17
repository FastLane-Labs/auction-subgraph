import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT } from './common';
import { Validator } from "../../generated/schema";
import { loadOrCreateStatus } from '../helpers/loadOrCreateStatus';

export function loadOrCreateValidator(validatorAddress: Bytes): Validator {
    let validator = Validator.load(validatorAddress.toHexString());
    if (!validator) {
        validator = new Validator(validatorAddress.toHexString());
        validator.amountPaid = ZERO;
        validator.amountPending = ZERO;
        validator.totalRedeemed = ZERO;
        validator.bidsReceived = ZERO;
        validator.pendingBalanceAtlastBid = ZERO;
        validator.lastWithdrawnAuction = ZERO;
        validator.lastBidReceivedAuction = ZERO;
        validator.lastBidReceivedTimestamp = ZERO;
        validator.outstandingBalance = ZERO;
        validator.minAutoshipAmount = ZERO;
        validator.validatorPayableAddress = ADDRESS_ZERO;
        validator.createdAt = ZERO_INT;
        validator.updatedAt = ZERO_INT;
        validator.status = loadOrCreateStatus(validatorAddress).id;
        validator.save();
        //log.info('ValID {}',[validator.id]);
    }
    return validator;
}