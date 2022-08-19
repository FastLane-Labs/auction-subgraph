import { MAX_AUCTION_VALUE, ZERO_INT } from "./common";
import { loadOrCreateStatus } from "./loadOrCreateStatus";
import { Validator, Opportunity } from "../../generated/schema";
import { Address, BigInt, Bytes, log, Entity, store } from '@graphprotocol/graph-ts';
import { loadOrCreateValidator } from "./loadOrCreateValidator";
import { loadOrCreateOpportunity } from "./loadOrCreateOpportunity";
//import { Entity } from '@graphprotocol/graph-ts/common/collections'


// Can't do in AssemblyScript.
//
// type enableParams = {
//     address: Address,
//     auction_number: BigInt,
//     timestamp: number
// };


function findType<T>(entity: T): string {
    return nameof<T>(entity);
}

// assert.fieldEquals("GraphAccount", "1", "id", "1");
//   let entity = GraphAccount.load("1")!;
//   log.info("{}", [findType(entity)]);
// })

// assert.fieldEquals("GraphAccount", "1", "id", "1");
//   logStore();
// })

// function saveEntity<T>(entity: T): void {
//   entity.save();
// }

// https://www.assemblyscript.org/types.html

// export function _enableValidatorOrOpportunity(loaderFn: (a: Bytes) => Entity, address: Address, auction_number: BigInt, timestamp: number): void {
//     const entity = loaderFn(address);
//     const status = loadOrCreateStatus(address);
//     // let contract = FastLaneAuction.bind(event.address)
//     status.activeAtAuction = auction_number;
//     status.inactiveAtAuction = MAX_AUCTION_VALUE;
//     if (entity.createdAt == ZERO_INT) { // use store.get / store.set instead // Parking.
//       entity.createdAt = timestamp;
//       entity.save();
//     }
//     entity.updatedAt = timestamp;
//     entity.save();
//     status.save();
// }

// https://www.assemblyscript.org/types.html
// export function _enableValidatorOrOpportunity(isValidator: Boolean, address: Address, auction_number: BigInt, timestamp: number): void {
//     let entity: Validator | Opportunity; // --> Throws.
//     if (isValidator) {
//         entity = loadOrCreateValidator(address);
//     } else {
//         entity = loadOrCreateOpportunity(address);
//     }
//     const status = loadOrCreateStatus(address);
//     // let contract = FastLaneAuction.bind(event.address)
//     status.activeAtAuction = auction_number;
//     status.inactiveAtAuction = MAX_AUCTION_VALUE;
//     if (entity.createdAt == ZERO_INT) {
//       entity.createdAt = timestamp;
//       entity.save();
//     }
//     entity.updatedAt = timestamp;
//     entity.save();
//     status.save();
// }