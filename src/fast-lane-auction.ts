import { BigInt } from "@graphprotocol/graph-ts"
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
import { Validator } from "../generated/schema"

export function handleValidatorAddressEnabled(event: ValidatorAddressEnabled): void {
  let entity = Validator.load(event.)
}

export function handleAuctionEnded(event: AuctionEnded): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.auction_number = event.params.auction_number

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MAX_AUCTION_VALUE(...)
  // - contract.auctionStarter(...)
  // - contract.auction_live(...)
  // - contract.auction_number(...)
  // - contract.autopay_batch_size(...)
  // - contract.bid_increment(...)
  // - contract.bid_token(...)
  // - contract.checker(...)
  // - contract.endAuction(...)
  // - contract.fast_lane_fee(...)
  // - contract.findFinalizedAuctionWinnerAtAuction(...)
  // - contract.findLastFinalizedAuctionWinner(...)
  // - contract.findLiveAuctionTopBid(...)
  // - contract.getActivePrivilegesAuctionNumber(...)
  // - contract.getAutopayJobs(...)
  // - contract.getCheckpoint(...)
  // - contract.getPreferences(...)
  // - contract.getStatus(...)
  // - contract.getValidatorsActiveAtAuction(...)
  // - contract.max_gas_price(...)
  // - contract.minAutoShipThreshold(...)
  // - contract.ops(...)
  // - contract.outstandingFLBalance(...)
  // - contract.owner(...)
}

export function handleAuctionStarted(event: AuctionStarted): void {}

export function handleAuctionStarterSet(event: AuctionStarterSet): void {}

export function handleAutopayBatchSizeSet(event: AutopayBatchSizeSet): void {}

export function handleBidAdded(event: BidAdded): void {}

export function handleBidTokenSet(event: BidTokenSet): void {}

export function handleFastLaneFeeSet(event: FastLaneFeeSet): void {}

export function handleMinimumAutoshipThresholdSet(
  event: MinimumAutoshipThresholdSet
): void {}

export function handleMinimumBidIncrementSet(
  event: MinimumBidIncrementSet
): void {}

export function handleOpportunityAddressDisabled(
  event: OpportunityAddressDisabled
): void {}

export function handleOpportunityAddressEnabled(
  event: OpportunityAddressEnabled
): void {}

export function handleOpsSet(event: OpsSet): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePausedStateSet(event: PausedStateSet): void {}

export function handleResolverMaxGasPriceSet(
  event: ResolverMaxGasPriceSet
): void {}

export function handleValidatorAddressDisabled(
  event: ValidatorAddressDisabled
): void {}

export function handleValidatorAddressEnabled(
  event: ValidatorAddressEnabled
): void {}

export function handleValidatorPreferencesSet(
  event: ValidatorPreferencesSet
): void {}

export function handleValidatorWithdrawnBalance(
  event: ValidatorWithdrawnBalance
): void {}

export function handleWithdrawStuckERC20(event: WithdrawStuckERC20): void {}

export function handleWithdrawStuckNativeToken(
  event: WithdrawStuckNativeToken
): void {}
