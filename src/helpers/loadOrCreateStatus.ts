import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO } from './common';
import { Status } from "../../generated/schema";

export function loadOrCreateStatus(targetAddress: Bytes): Status {
    let status = Status.load(targetAddress.toHexString());
    if (!status) {
        status = new Status(targetAddress.toHexString());
        status.address = Bytes.fromHexString(targetAddress.toHexString());
        status.activeAtAuction = ZERO;
        status.inactiveAtAuction = ZERO;
        status.save();
    }
    return status;
}