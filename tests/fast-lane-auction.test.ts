import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
  logStore,
} from "matchstick-as/assembly/index";
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts";
import { Opportunity, Validator } from "../generated/schema";
import {
  AuctionEnded,
  AuctionStarted,
} from "../generated/FastLaneAuction/FastLaneAuction";
import {
  handleAuctionEnded,
  handleAuctionStarted,
  handleBidAdded,
  handleOpportunityAddressEnabled,
  handleValidatorAddressEnabled,
} from "../src/fast-lane-auction";
import {
  createOpportunityAddressEnabledEvent,
  createValidatorAddressEnabledEvent,
  createAuctionStartedEvent,
  createAuctionEndedEvent,
  createBidAddedEvent,
} from "./fast-lane-auction-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Opportunities and Validators Enable Disable", () => {
  beforeAll(() => {});
  afterAll(() => {
    clearStore();
  });

  describe("Enable Validator", () => {
    // Store will be lowercase
    let newEnableValidatorEvent = createValidatorAddressEnabledEvent(
      Address.fromString("0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"),
      BigInt.zero()
    );
    handleValidatorAddressEnabled(newEnableValidatorEvent);
    assert.entityCount("Validator", 1);
    assert.entityCount("Status", 1);
    assert.fieldEquals(
      "Validator",
      "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff".toLowerCase(),
      "bidsReceived",
      "0"
    );
    assert.fieldEquals(
      "Validator",
      "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff".toLowerCase(),
      "status",
      "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff".toLowerCase()
    );
  });

  describe("Enable Opportunity", () => {
    // Store will be lowercase
    let newEnableOpportunityEvent = createOpportunityAddressEnabledEvent(
      Address.fromString("0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"),
      BigInt.zero()
    );
    handleOpportunityAddressEnabled(newEnableOpportunityEvent);
    assert.entityCount("Opportunity", 1);
    assert.entityCount("Status", 1);
    assert.fieldEquals(
      "Opportunity",
      "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff".toLowerCase(),
      "bidsReceived",
      "0"
    );
    assert.fieldEquals(
      "Opportunity",
      "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff".toLowerCase(),
      "status",
      "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff".toLowerCase()
    );
  });

  describe("New Round", () => {
    // Store will be lowercase
    let newAuctionStartedEvent = createAuctionStartedEvent(BigInt.fromI32(1));
    handleAuctionStarted(newAuctionStartedEvent);
    let newAuctionEndedEvent = createAuctionEndedEvent(BigInt.fromI32(1));
    handleAuctionEnded(newAuctionEndedEvent);
    //logStore();
    assert.entityCount("Auction", 1);
    assert.entityCount("Round", 1);
    assert.fieldEquals("Round", "1", "startBlock", "1");
    assert.fieldEquals("Round", "1", "endBlock", "1");

  });

  describe("addedValidators & addedOpportunity", () => {
    // Store will be lowercase
    let newEnableOpportunityEvent = createOpportunityAddressEnabledEvent(
      Address.fromString("0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"),
      BigInt.zero()
    );
    handleOpportunityAddressEnabled(newEnableOpportunityEvent);
    
    let newEnableValidatorEvent = createValidatorAddressEnabledEvent(
      Address.fromString("0xb5777777aCEd8fFDD4De3c43696c57F7D7A678ff"),
      BigInt.zero()
    );
    handleValidatorAddressEnabled(newEnableValidatorEvent);
    
    // let newAuctionStartedEvent = createAuctionStartedEvent(BigInt.fromI32(1));
    // handleAuctionStarted(newAuctionStartedEvent);
    // let newAuctionEndedEvent = createAuctionEndedEvent(BigInt.fromI32(1));
    // handleAuctionEnded(newAuctionEndedEvent);
    // assert.entityCount("Auction", 1);
    assert.entityCount("Round", 1);
    assert.entityCount("Validator", 1);
    assert.entityCount("Opportunity", 1);
    assert.fieldEquals("Round", "0", "startBlock", "0");
    assert.fieldEquals("Round", "0", "addedOpportunities", "[0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff]");
    
  });


  describe("Bid submitted",() => {
    let opportunity = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff";
    let newEnableOpportunityEvent = createOpportunityAddressEnabledEvent(
      Address.fromString(opportunity),
      BigInt.zero()
    );
    handleOpportunityAddressEnabled(newEnableOpportunityEvent);
    
    let validator = "0xb5777777aCEd8fFDD4De3c43696c57F7D7A678ff";
    let newEnableValidatorEvent = createValidatorAddressEnabledEvent(
      Address.fromString(validator),
      BigInt.zero()
    );
    handleValidatorAddressEnabled(newEnableValidatorEvent);
    let newAuctionStartedEvent = createAuctionStartedEvent(BigInt.fromI32(1));
    handleAuctionStarted(newAuctionStartedEvent);
    let newAuctionEndedEvent = createAuctionEndedEvent(BigInt.fromI32(1));
    handleAuctionEnded(newAuctionEndedEvent);
    // New Opp, Valid, Auction start
    let bidder = "0x325357c3c037ff9ad2fc68d512c835d80d5b581a";
    let newBidEvent = createBidAddedEvent(Address.fromString(bidder),Address.fromString(validator),Address.fromString(opportunity),BigInt.fromI32(9999),BigInt.fromI32(1));
    handleBidAdded(newBidEvent);
    logStore();
  });
});

// describe("Describe entity assertions", () => {
//   beforeAll(() => {
//     // let auction_number = BigInt.fromI32(234)
//     // let newAuctionEndedEvent = createAuctionEndedEvent(auction_number)
//     // handleAuctionEnded(newAuctionEndedEvent)
//   })

//   afterAll(() => {
//     clearStore()
//   })

//   // For more test scenarios, see:
//   // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

//   test("ExampleEntity created and stored", () => {
//     assert.entityCount("ExampleEntity", 1)

//     // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
//     assert.fieldEquals(
//       "ExampleEntity",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
//       "auction_number",
//       "234"
//     )

//     // More assert options:
//     // https://thegraph.com/docs/en/developer/matchstick/#asserts
//   })
// })
