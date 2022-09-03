import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { ZERO, ADDRESS_ZERO, ZERO_INT } from './common';
import { Withdrawal } from "../../generated/schema";

export function loadOrCreateWithdrawal(targetWithdrawalStr: string): Withdrawal {
    let withdrawal = Withdrawal.load(targetWithdrawalStr);
    if (!withdrawal) {
        withdrawal = new Withdrawal(targetWithdrawalStr);
        withdrawal.save();
    }
    return withdrawal;
}