import { BigInt, log } from "@graphprotocol/graph-ts"
import { logStore } from 'matchstick-as/assembly/store'

import {
  FastLaneAuction,
  AuctionEnded,
  AuctionStarted,
  AuctionStarterSet,
  AutopayBatchSizeSet,
  BidAdded,
  BidTokenSet,
  FastLaneFeeSet,
  MinimumAutoshipThresholdSet,
  MinimumBidIncrementSet,
  OpportunityAddressDisabled,
  OpportunityAddressEnabled,
  OpsSet,
  OwnershipTransferred,
  PausedStateSet,
  ResolverMaxGasPriceSet,
  ValidatorAddressDisabled,
  ValidatorAddressEnabled,
  ValidatorPreferencesSet,
  ValidatorWithdrawnBalance,
  WithdrawStuckERC20,
  WithdrawStuckNativeToken
} from "../generated/FastLaneAuction/FastLaneAuction"


import {
  ZERO,
  ONE,
  NEG_ONE,
  MAX_AUCTION_VALUE,
  ADDRESS_ZERO,
  ZERO_INT
} from './helpers/common';

import { loadOrCreateValidator } from './helpers/loadOrCreateValidator';
import { loadOrCreateStatus } from './helpers/loadOrCreateStatus';
import { loadOrCreateOpportunity } from "./helpers/loadOrCreateOpportunity";
import { loadOrCreateAuction } from "./helpers/loadOrCreateAuction";
import { loadOrCreateRound } from "./helpers/loadOrCreateRound";
import { loadOrCreateBid } from "./helpers/loadOrCreateBid";
import { loadOrCreatePair } from "./helpers/loadOrCreatePair";
import { loadOrCreateSearcher } from './helpers/loadOrCreateSearcher';
import { loadOrCreateGlobalStats } from "./helpers/loadOrCreateGlobalStats";


export function handleValidatorAddressEnabled(event: ValidatorAddressEnabled): void {
  const validator = loadOrCreateValidator(event.params.validator);
  const status = loadOrCreateStatus(event.params.validator);
  // let contract = FastLaneAuction.bind(event.address)
  status.activeAtAuction = event.params.auction_number;
  status.inactiveAtAuction = MAX_AUCTION_VALUE;
  if (validator.createdAt == ZERO_INT) {
    validator.createdAt = event.block.timestamp.toI32();
    validator.save();
  }
  validator.updatedAt = event.block.timestamp.toI32();
  validator.save();
  status.save();

  const round = loadOrCreateRound(event.params.auction_number); // Does   round.addedOpportunities = new Array();
  let addedValidators = round.addedValidators;

  if (!addedValidators.includes(validator.id)) {
    addedValidators.push(validator.id);
    round.addedValidators = addedValidators; 
    round.save();
  }
  

}

export function handleAuctionEnded(event: AuctionEnded): void {
  const round = loadOrCreateRound(event.params.auction_number);
  round.endTimestamp = event.block.timestamp.toI32();
  round.endBlock = event.block.number;
  round.updatedAt = event.block.timestamp.toI32();
  round.save();
}

export function handleAuctionStarted(event: AuctionStarted): void {
    const auction = loadOrCreateAuction();

    if (auction.address == ADDRESS_ZERO) {
      auction.address = event.address;
      auction.save();
    }
    
    const round = loadOrCreateRound(event.params.auction_number);
    round.auction = auction.id;
    auction.currentRound = round.id;

    if (round.createdAt == ZERO_INT) {
      round.startBlock = event.block.number;
      round.startTimestamp = event.block.timestamp.toI32();
      round.createdAt = event.block.timestamp.toI32();
      round.save();
    }
    round.updatedAt = event.block.timestamp.toI32();
    round.save();
}

export function handleAuctionStarterSet(event: AuctionStarterSet): void {
  // Starter Role
}

export function handleAutopayBatchSizeSet(event: AutopayBatchSizeSet): void {
  const auction = loadOrCreateAuction();
  auction.autoPayBatchSize = event.params.batch_size;
  auction.save();
}

export function handleBidAdded(event: BidAdded): void {
  const bidId = `${event.params.auction_number}-${event.params.bidder.toHexString()}-${event.block.number}-${event.params.validator.toHexString()}-${event.params.opportunity.toHexString()}-${event.params.amount}`;
  const bid = loadOrCreateBid(bidId);
  const validator = loadOrCreateValidator(event.params.validator);
  const opportunity = loadOrCreateOpportunity(event.params.opportunity);
  const pair = loadOrCreatePair(`${event.params.validator}-${event.params.opportunity}`);
  const round = loadOrCreateRound(event.params.auction_number);
  pair.validator = validator.id;
  pair.opportunity = opportunity.id;
  
  // Bid added can only be emitted if the bid is beaten for that pair.
  let prevBidAmount = ZERO;
  if (pair.topBid) {
    const prevTopBid = loadOrCreateBid(pair.topBid!);
    prevBidAmount = prevTopBid.bidAmount;
  }
  
  pair.topBid = bid.id;
  pair.save();

  bid.round = event.params.auction_number.toString();


  const searcher = loadOrCreateSearcher(event.params.bidder);

  if (searcher.lastRoundParticipated != event.params.auction_number) {
    searcher.lastRoundParticipated = event.params.auction_number;
    searcher.roundsParticipated = searcher.roundsParticipated.plus(BigInt.fromI32(1));
  }

  if (searcher.createdAt == ZERO_INT) {
    searcher.createdAt = event.block.timestamp.toI32();
  }
  searcher.updatedAt = event.block.timestamp.toI32();
  searcher.save();

  bid.searcher = searcher.id;
  bid.timestamp = event.block.timestamp.toI32();
  bid.block = event.block.number;

  bid.save();

  validator.bidsReceived = validator.bidsReceived.plus(BigInt.fromI32(1));
  validator.lastBidReceivedAuctionRound = event.params.auction_number.toString();
  validator.lastBidReceivedTimestamp = event.block.timestamp.toI32();
  validator.updatedAt = event.block.timestamp.toI32();


  validator.save();

  const stats = loadOrCreateGlobalStats();
  stats.totalBidsCount = stats.totalBidsCount.plus(BigInt.fromI32(1));
  stats.totalBidsSum = stats.totalBidsSum.minus(prevBidAmount).plus(event.params.amount);
  stats.save();

  round.totalBidsCount = round.totalBidsCount.plus(BigInt.fromI32(1))
  round.totalBidsSum = round.totalBidsSum.minus(prevBidAmount).plus(event.params.amount)
  round.save();
  //const searcherContract = loadOrCreaterSearcherContract(event.params.) // Alter to emit both?
}

export function handleBidTokenSet(event: BidTokenSet): void {
  const auction = loadOrCreateAuction();
  auction.bidToken = event.params.token;
  auction.save();
}

export function handleFastLaneFeeSet(event: FastLaneFeeSet): void {
  const auction = loadOrCreateAuction();
  auction.fee = event.params.amount;
  auction.save();
}

export function handleMinimumAutoshipThresholdSet(
  event: MinimumAutoshipThresholdSet
): void {
  const auction = loadOrCreateAuction();
  auction.minimumAutoship = event.params.amount;
  auction.save();
}

export function handleMinimumBidIncrementSet(
  event: MinimumBidIncrementSet
): void {
  const auction = loadOrCreateAuction();
  auction.minimumIncrement = event.params.amount;
  auction.save();
}

export function handleOpportunityAddressDisabled(
  event: OpportunityAddressDisabled
): void {

  const opportunity = loadOrCreateOpportunity(event.params.opportunity);
  const status = loadOrCreateStatus(event.params.opportunity);
  status.inactiveAtAuction = event.params.auction_number;
  opportunity.updatedAt = event.block.timestamp.toI32();
  opportunity.save();
  status.save();

}

export function handleOpportunityAddressEnabled(
  event: OpportunityAddressEnabled
): void {

  const opportunity = loadOrCreateOpportunity(event.params.opportunity);
  const status = loadOrCreateStatus(event.params.opportunity);
  // let contract = FastLaneAuction.bind(event.address)
  status.activeAtAuction = event.params.auction_number;
  status.inactiveAtAuction = event.params.auction_number;
  if (opportunity.createdAt == ZERO_INT) {
    opportunity.createdAt = event.block.timestamp.toI32();
    opportunity.save();
  }
  opportunity.updatedAt = event.block.timestamp.toI32();

  opportunity.save();
  status.save();

  //log.info("OppId: {}", [opportunity.id]); // 💬 OppId: 0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff

  const round = loadOrCreateRound(event.params.auction_number); // Does   round.addedOpportunities = new Array();
  let addedOpportunities = round.addedOpportunities;

  if (!addedOpportunities.includes(opportunity.id)) {
    addedOpportunities.push(opportunity.id);
    round.addedOpportunities = addedOpportunities; 
    round.save();
  }
  
  
}

export function handleOpsSet(event: OpsSet): void {
  const auction = loadOrCreateAuction();
  auction.ops = event.params.ops;
  auction.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePausedStateSet(event: PausedStateSet): void {
  const auction = loadOrCreateAuction();
  auction.paused = event.params.state;
  auction.save();
}

export function handleResolverMaxGasPriceSet(
  event: ResolverMaxGasPriceSet
): void {}

export function handleValidatorAddressDisabled(
  event: ValidatorAddressDisabled
): void {

  const validator = loadOrCreateValidator(event.params.validator);
  const status = loadOrCreateStatus(event.params.validator);
  status.inactiveAtAuction = event.params.auction_number;
  validator.updatedAt = event.block.timestamp.toI32();
  validator.save();
  status.save();
}


export function handleValidatorPreferencesSet(
  event: ValidatorPreferencesSet
): void {
  const validator = loadOrCreateValidator(event.params.validator);
  validator.minAutoshipAmount = event.params.minAutoshipAmount;
  validator.validatorPayableAddress = event.params.validatorPayableAddress;
  validator.save();
}

export function handleValidatorWithdrawnBalance(
  event: ValidatorWithdrawnBalance
): void {}

export function handleWithdrawStuckERC20(event: WithdrawStuckERC20): void {}

export function handleWithdrawStuckNativeToken(
  event: WithdrawStuckNativeToken
): void {}
