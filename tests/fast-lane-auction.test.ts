import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { Opportunity, Validator } from "../generated/schema"
import { AuctionEnded, AuctionStarted } from "../generated/FastLaneAuction/FastLaneAuction"
import { handleAuctionEnded, handleAuctionStarted, handleOpportunityAddressEnabled, handleValidatorAddressEnabled } from "../src/fast-lane-auction"
import { createAuctionEndedEvent, createOpportunityAddressEnabledEvent, createValidatorAddressEnabledEvent } from "./fast-lane-auction-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Opportunities and Validators Enable Disable", () => {
  beforeAll(() => {

  });
  afterAll(() => {
    clearStore();
  });

  describe("Enable Validator",() => {
    // Store will be lowercase
    let newEnableValidatorEvent = createValidatorAddressEnabledEvent(Address.fromString("0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"),BigInt.zero());
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

  // describe("Enable Opp",() => {
  //   let newEnableOpportunityEvent = createOpportunityAddressEnabledEvent(Address.fromString("0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"),BigInt.zero());
  //   handleOpportunityAddressEnabled(newEnableOpportunityEvent);
  //   assert.entityCount("Opportunity", 1);
  //   assert.fieldEquals(
  //     "Opportunity",
  //     "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
  //     "bidsReceived",
  //     "0"
  //   );
  //   assert.fieldEquals(
  //     "Opportunity",
  //     "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
  //     "status",
  //     "0"
  //   );
  // });
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
