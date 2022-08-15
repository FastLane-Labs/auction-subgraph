import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
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

export function createAuctionEndedEvent(auction_number: BigInt): AuctionEnded {
  let auctionEndedEvent = changetype<AuctionEnded>(newMockEvent())

  auctionEndedEvent.parameters = new Array()

  auctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "auction_number",
      ethereum.Value.fromUnsignedBigInt(auction_number)
    )
  )

  return auctionEndedEvent
}

export function createAuctionStartedEvent(
  auction_number: BigInt
): AuctionStarted {
  let auctionStartedEvent = changetype<AuctionStarted>(newMockEvent())

  auctionStartedEvent.parameters = new Array()

  auctionStartedEvent.parameters.push(
    new ethereum.EventParam(
      "auction_number",
      ethereum.Value.fromUnsignedBigInt(auction_number)
    )
  )

  return auctionStartedEvent
}

export function createAuctionStarterSetEvent(
  starter: Address
): AuctionStarterSet {
  let auctionStarterSetEvent = changetype<AuctionStarterSet>(newMockEvent())

  auctionStarterSetEvent.parameters = new Array()

  auctionStarterSetEvent.parameters.push(
    new ethereum.EventParam("starter", ethereum.Value.fromAddress(starter))
  )

  return auctionStarterSetEvent
}

export function createAutopayBatchSizeSetEvent(
  batch_size: i32
): AutopayBatchSizeSet {
  let autopayBatchSizeSetEvent = changetype<AutopayBatchSizeSet>(newMockEvent())

  autopayBatchSizeSetEvent.parameters = new Array()

  autopayBatchSizeSetEvent.parameters.push(
    new ethereum.EventParam(
      "batch_size",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(batch_size))
    )
  )

  return autopayBatchSizeSetEvent
}

export function createBidAddedEvent(
  bidder: Address,
  validator: Address,
  opportunity: Address,
  amount: BigInt,
  auction_number: BigInt
): BidAdded {
  let bidAddedEvent = changetype<BidAdded>(newMockEvent())

  bidAddedEvent.parameters = new Array()

  bidAddedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidAddedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  bidAddedEvent.parameters.push(
    new ethereum.EventParam(
      "opportunity",
      ethereum.Value.fromAddress(opportunity)
    )
  )
  bidAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  bidAddedEvent.parameters.push(
    new ethereum.EventParam(
      "auction_number",
      ethereum.Value.fromUnsignedBigInt(auction_number)
    )
  )

  return bidAddedEvent
}

export function createBidTokenSetEvent(token: Address): BidTokenSet {
  let bidTokenSetEvent = changetype<BidTokenSet>(newMockEvent())

  bidTokenSetEvent.parameters = new Array()

  bidTokenSetEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return bidTokenSetEvent
}

export function createFastLaneFeeSetEvent(amount: BigInt): FastLaneFeeSet {
  let fastLaneFeeSetEvent = changetype<FastLaneFeeSet>(newMockEvent())

  fastLaneFeeSetEvent.parameters = new Array()

  fastLaneFeeSetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fastLaneFeeSetEvent
}

export function createMinimumAutoshipThresholdSetEvent(
  amount: BigInt
): MinimumAutoshipThresholdSet {
  let minimumAutoshipThresholdSetEvent = changetype<
    MinimumAutoshipThresholdSet
  >(newMockEvent())

  minimumAutoshipThresholdSetEvent.parameters = new Array()

  minimumAutoshipThresholdSetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return minimumAutoshipThresholdSetEvent
}

export function createMinimumBidIncrementSetEvent(
  amount: BigInt
): MinimumBidIncrementSet {
  let minimumBidIncrementSetEvent = changetype<MinimumBidIncrementSet>(
    newMockEvent()
  )

  minimumBidIncrementSetEvent.parameters = new Array()

  minimumBidIncrementSetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return minimumBidIncrementSetEvent
}

export function createOpportunityAddressDisabledEvent(
  opportunity: Address,
  auction_number: BigInt
): OpportunityAddressDisabled {
  let opportunityAddressDisabledEvent = changetype<OpportunityAddressDisabled>(
    newMockEvent()
  )

  opportunityAddressDisabledEvent.parameters = new Array()

  opportunityAddressDisabledEvent.parameters.push(
    new ethereum.EventParam(
      "opportunity",
      ethereum.Value.fromAddress(opportunity)
    )
  )
  opportunityAddressDisabledEvent.parameters.push(
    new ethereum.EventParam(
      "auction_number",
      ethereum.Value.fromUnsignedBigInt(auction_number)
    )
  )

  return opportunityAddressDisabledEvent
}

export function createOpportunityAddressEnabledEvent(
  opportunity: Address,
  auction_number: BigInt
): OpportunityAddressEnabled {
  let opportunityAddressEnabledEvent = changetype<OpportunityAddressEnabled>(
    newMockEvent()
  )

  opportunityAddressEnabledEvent.parameters = new Array()

  opportunityAddressEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "opportunity",
      ethereum.Value.fromAddress(opportunity)
    )
  )
  opportunityAddressEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "auction_number",
      ethereum.Value.fromUnsignedBigInt(auction_number)
    )
  )

  return opportunityAddressEnabledEvent
}

export function createOpsSetEvent(ops: Address): OpsSet {
  let opsSetEvent = changetype<OpsSet>(newMockEvent())

  opsSetEvent.parameters = new Array()

  opsSetEvent.parameters.push(
    new ethereum.EventParam("ops", ethereum.Value.fromAddress(ops))
  )

  return opsSetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedStateSetEvent(state: boolean): PausedStateSet {
  let pausedStateSetEvent = changetype<PausedStateSet>(newMockEvent())

  pausedStateSetEvent.parameters = new Array()

  pausedStateSetEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromBoolean(state))
  )

  return pausedStateSetEvent
}

export function createResolverMaxGasPriceSetEvent(
  amount: BigInt
): ResolverMaxGasPriceSet {
  let resolverMaxGasPriceSetEvent = changetype<ResolverMaxGasPriceSet>(
    newMockEvent()
  )

  resolverMaxGasPriceSetEvent.parameters = new Array()

  resolverMaxGasPriceSetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return resolverMaxGasPriceSetEvent
}

export function createValidatorAddressDisabledEvent(
  validator: Address,
  auction_number: BigInt
): ValidatorAddressDisabled {
  let validatorAddressDisabledEvent = changetype<ValidatorAddressDisabled>(
    newMockEvent()
  )

  validatorAddressDisabledEvent.parameters = new Array()

  validatorAddressDisabledEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  validatorAddressDisabledEvent.parameters.push(
    new ethereum.EventParam(
      "auction_number",
      ethereum.Value.fromUnsignedBigInt(auction_number)
    )
  )

  return validatorAddressDisabledEvent
}

export function createValidatorAddressEnabledEvent(
  validator: Address,
  auction_number: BigInt
): ValidatorAddressEnabled {
  let validatorAddressEnabledEvent = changetype<ValidatorAddressEnabled>(
    newMockEvent()
  )

  validatorAddressEnabledEvent.parameters = new Array()

  validatorAddressEnabledEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  validatorAddressEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "auction_number",
      ethereum.Value.fromUnsignedBigInt(auction_number)
    )
  )

  return validatorAddressEnabledEvent
}

export function createValidatorPreferencesSetEvent(
  validator: Address,
  minAutoshipAmount: BigInt,
  validatorPayableAddress: Address
): ValidatorPreferencesSet {
  let validatorPreferencesSetEvent = changetype<ValidatorPreferencesSet>(
    newMockEvent()
  )

  validatorPreferencesSetEvent.parameters = new Array()

  validatorPreferencesSetEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  validatorPreferencesSetEvent.parameters.push(
    new ethereum.EventParam(
      "minAutoshipAmount",
      ethereum.Value.fromUnsignedBigInt(minAutoshipAmount)
    )
  )
  validatorPreferencesSetEvent.parameters.push(
    new ethereum.EventParam(
      "validatorPayableAddress",
      ethereum.Value.fromAddress(validatorPayableAddress)
    )
  )

  return validatorPreferencesSetEvent
}

export function createValidatorWithdrawnBalanceEvent(
  validator: Address,
  auction_number: BigInt,
  amount: BigInt,
  destination: Address,
  caller: Address
): ValidatorWithdrawnBalance {
  let validatorWithdrawnBalanceEvent = changetype<ValidatorWithdrawnBalance>(
    newMockEvent()
  )

  validatorWithdrawnBalanceEvent.parameters = new Array()

  validatorWithdrawnBalanceEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  validatorWithdrawnBalanceEvent.parameters.push(
    new ethereum.EventParam(
      "auction_number",
      ethereum.Value.fromUnsignedBigInt(auction_number)
    )
  )
  validatorWithdrawnBalanceEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  validatorWithdrawnBalanceEvent.parameters.push(
    new ethereum.EventParam(
      "destination",
      ethereum.Value.fromAddress(destination)
    )
  )
  validatorWithdrawnBalanceEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return validatorWithdrawnBalanceEvent
}

export function createWithdrawStuckERC20Event(
  receiver: Address,
  token: Address,
  amount: BigInt
): WithdrawStuckERC20 {
  let withdrawStuckErc20Event = changetype<WithdrawStuckERC20>(newMockEvent())

  withdrawStuckErc20Event.parameters = new Array()

  withdrawStuckErc20Event.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  withdrawStuckErc20Event.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawStuckErc20Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawStuckErc20Event
}

export function createWithdrawStuckNativeTokenEvent(
  receiver: Address,
  amount: BigInt
): WithdrawStuckNativeToken {
  let withdrawStuckNativeTokenEvent = changetype<WithdrawStuckNativeToken>(
    newMockEvent()
  )

  withdrawStuckNativeTokenEvent.parameters = new Array()

  withdrawStuckNativeTokenEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  withdrawStuckNativeTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawStuckNativeTokenEvent
}
