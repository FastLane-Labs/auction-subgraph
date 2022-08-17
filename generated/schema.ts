// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class GlobalStats extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GlobalStats entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type GlobalStats must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("GlobalStats", id.toString(), this);
    }
  }

  static load(id: string): GlobalStats | null {
    return changetype<GlobalStats | null>(store.get("GlobalStats", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalBidsCount(): BigInt {
    let value = this.get("totalBidsCount");
    return value!.toBigInt();
  }

  set totalBidsCount(value: BigInt) {
    this.set("totalBidsCount", Value.fromBigInt(value));
  }

  get totalBidsSum(): BigInt {
    let value = this.get("totalBidsSum");
    return value!.toBigInt();
  }

  set totalBidsSum(value: BigInt) {
    this.set("totalBidsSum", Value.fromBigInt(value));
  }

  get totalValidatorsPaid(): BigInt {
    let value = this.get("totalValidatorsPaid");
    return value!.toBigInt();
  }

  set totalValidatorsPaid(value: BigInt) {
    this.set("totalValidatorsPaid", Value.fromBigInt(value));
  }

  get totalValidatorsCount(): BigInt {
    let value = this.get("totalValidatorsCount");
    return value!.toBigInt();
  }

  set totalValidatorsCount(value: BigInt) {
    this.set("totalValidatorsCount", Value.fromBigInt(value));
  }

  get totalOpportunitiesCount(): BigInt {
    let value = this.get("totalOpportunitiesCount");
    return value!.toBigInt();
  }

  set totalOpportunitiesCount(value: BigInt) {
    this.set("totalOpportunitiesCount", Value.fromBigInt(value));
  }
}

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Auction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Auction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Auction", id.toString(), this);
    }
  }

  static load(id: string): Auction | null {
    return changetype<Auction | null>(store.get("Auction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rounds(): Array<string> | null {
    let value = this.get("rounds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rounds(value: Array<string> | null) {
    if (!value) {
      this.unset("rounds");
    } else {
      this.set("rounds", Value.fromStringArray(<Array<string>>value));
    }
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get minimumIncrement(): BigInt {
    let value = this.get("minimumIncrement");
    return value!.toBigInt();
  }

  set minimumIncrement(value: BigInt) {
    this.set("minimumIncrement", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get bidToken(): Bytes {
    let value = this.get("bidToken");
    return value!.toBytes();
  }

  set bidToken(value: Bytes) {
    this.set("bidToken", Value.fromBytes(value));
  }

  get paused(): boolean {
    let value = this.get("paused");
    return value!.toBoolean();
  }

  set paused(value: boolean) {
    this.set("paused", Value.fromBoolean(value));
  }

  get ops(): Bytes {
    let value = this.get("ops");
    return value!.toBytes();
  }

  set ops(value: Bytes) {
    this.set("ops", Value.fromBytes(value));
  }

  get resolverMaxGasPrice(): BigInt {
    let value = this.get("resolverMaxGasPrice");
    return value!.toBigInt();
  }

  set resolverMaxGasPrice(value: BigInt) {
    this.set("resolverMaxGasPrice", Value.fromBigInt(value));
  }

  get autoPayBatchSize(): BigInt {
    let value = this.get("autoPayBatchSize");
    return value!.toBigInt();
  }

  set autoPayBatchSize(value: BigInt) {
    this.set("autoPayBatchSize", Value.fromBigInt(value));
  }
}

export class Round extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Round entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Round must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Round", id.toString(), this);
    }
  }

  static load(id: string): Round | null {
    return changetype<Round | null>(store.get("Round", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auction(): string | null {
    let value = this.get("auction");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auction(value: string | null) {
    if (!value) {
      this.unset("auction");
    } else {
      this.set("auction", Value.fromString(<string>value));
    }
  }

  get startBlock(): BigInt {
    let value = this.get("startBlock");
    return value!.toBigInt();
  }

  set startBlock(value: BigInt) {
    this.set("startBlock", Value.fromBigInt(value));
  }

  get startTimestamp(): i32 {
    let value = this.get("startTimestamp");
    return value!.toI32();
  }

  set startTimestamp(value: i32) {
    this.set("startTimestamp", Value.fromI32(value));
  }

  get endTimestamp(): i32 {
    let value = this.get("endTimestamp");
    return value!.toI32();
  }

  set endTimestamp(value: i32) {
    this.set("endTimestamp", Value.fromI32(value));
  }

  get endBlock(): BigInt | null {
    let value = this.get("endBlock");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endBlock(value: BigInt | null) {
    if (!value) {
      this.unset("endBlock");
    } else {
      this.set("endBlock", Value.fromBigInt(<BigInt>value));
    }
  }

  get addedValidators(): Array<string> | null {
    let value = this.get("addedValidators");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set addedValidators(value: Array<string> | null) {
    if (!value) {
      this.unset("addedValidators");
    } else {
      this.set("addedValidators", Value.fromStringArray(<Array<string>>value));
    }
  }

  get addedOpportunities(): Array<string> | null {
    let value = this.get("addedOpportunities");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set addedOpportunities(value: Array<string> | null) {
    if (!value) {
      this.unset("addedOpportunities");
    } else {
      this.set(
        "addedOpportunities",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get bids(): Array<string> | null {
    let value = this.get("bids");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bids(value: Array<string> | null) {
    if (!value) {
      this.unset("bids");
    } else {
      this.set("bids", Value.fromStringArray(<Array<string>>value));
    }
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    return value!.toI32();
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get updatedAt(): i32 {
    let value = this.get("updatedAt");
    return value!.toI32();
  }

  set updatedAt(value: i32) {
    this.set("updatedAt", Value.fromI32(value));
  }
}

export class Validator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Validator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Validator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Validator", id.toString(), this);
    }
  }

  static load(id: string): Validator | null {
    return changetype<Validator | null>(store.get("Validator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountPaid(): BigInt {
    let value = this.get("amountPaid");
    return value!.toBigInt();
  }

  set amountPaid(value: BigInt) {
    this.set("amountPaid", Value.fromBigInt(value));
  }

  get amountPending(): BigInt {
    let value = this.get("amountPending");
    return value!.toBigInt();
  }

  set amountPending(value: BigInt) {
    this.set("amountPending", Value.fromBigInt(value));
  }

  get bidsReceived(): BigInt {
    let value = this.get("bidsReceived");
    return value!.toBigInt();
  }

  set bidsReceived(value: BigInt) {
    this.set("bidsReceived", Value.fromBigInt(value));
  }

  get totalRedeemed(): BigInt {
    let value = this.get("totalRedeemed");
    return value!.toBigInt();
  }

  set totalRedeemed(value: BigInt) {
    this.set("totalRedeemed", Value.fromBigInt(value));
  }

  get pendingBalanceAtlastBid(): BigInt {
    let value = this.get("pendingBalanceAtlastBid");
    return value!.toBigInt();
  }

  set pendingBalanceAtlastBid(value: BigInt) {
    this.set("pendingBalanceAtlastBid", Value.fromBigInt(value));
  }

  get lastWithdrawnAuction(): BigInt {
    let value = this.get("lastWithdrawnAuction");
    return value!.toBigInt();
  }

  set lastWithdrawnAuction(value: BigInt) {
    this.set("lastWithdrawnAuction", Value.fromBigInt(value));
  }

  get lastBidReceivedAuction(): BigInt {
    let value = this.get("lastBidReceivedAuction");
    return value!.toBigInt();
  }

  set lastBidReceivedAuction(value: BigInt) {
    this.set("lastBidReceivedAuction", Value.fromBigInt(value));
  }

  get lastBidReceivedTimestamp(): BigInt {
    let value = this.get("lastBidReceivedTimestamp");
    return value!.toBigInt();
  }

  set lastBidReceivedTimestamp(value: BigInt) {
    this.set("lastBidReceivedTimestamp", Value.fromBigInt(value));
  }

  get outstandingBalance(): BigInt {
    let value = this.get("outstandingBalance");
    return value!.toBigInt();
  }

  set outstandingBalance(value: BigInt) {
    this.set("outstandingBalance", Value.fromBigInt(value));
  }

  get minAutoshipAmount(): BigInt {
    let value = this.get("minAutoshipAmount");
    return value!.toBigInt();
  }

  set minAutoshipAmount(value: BigInt) {
    this.set("minAutoshipAmount", Value.fromBigInt(value));
  }

  get validatorPayableAddress(): Bytes {
    let value = this.get("validatorPayableAddress");
    return value!.toBytes();
  }

  set validatorPayableAddress(value: Bytes) {
    this.set("validatorPayableAddress", Value.fromBytes(value));
  }

  get status(): string {
    let value = this.get("status");
    return value!.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    return value!.toI32();
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get updatedAt(): i32 {
    let value = this.get("updatedAt");
    return value!.toI32();
  }

  set updatedAt(value: i32) {
    this.set("updatedAt", Value.fromI32(value));
  }
}

export class Pair extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pair entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Pair must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Pair", id.toString(), this);
    }
  }

  static load(id: string): Pair | null {
    return changetype<Pair | null>(store.get("Pair", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get validator(): string | null {
    let value = this.get("validator");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set validator(value: string | null) {
    if (!value) {
      this.unset("validator");
    } else {
      this.set("validator", Value.fromString(<string>value));
    }
  }

  get opportunity(): string | null {
    let value = this.get("opportunity");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set opportunity(value: string | null) {
    if (!value) {
      this.unset("opportunity");
    } else {
      this.set("opportunity", Value.fromString(<string>value));
    }
  }

  get topBid(): string | null {
    let value = this.get("topBid");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set topBid(value: string | null) {
    if (!value) {
      this.unset("topBid");
    } else {
      this.set("topBid", Value.fromString(<string>value));
    }
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Bid must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Bid", id.toString(), this);
    }
  }

  static load(id: string): Bid | null {
    return changetype<Bid | null>(store.get("Bid", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get round(): string | null {
    let value = this.get("round");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set round(value: string | null) {
    if (!value) {
      this.unset("round");
    } else {
      this.set("round", Value.fromString(<string>value));
    }
  }

  get validator(): string {
    let value = this.get("validator");
    return value!.toString();
  }

  set validator(value: string) {
    this.set("validator", Value.fromString(value));
  }

  get opportunity(): string {
    let value = this.get("opportunity");
    return value!.toString();
  }

  set opportunity(value: string) {
    this.set("opportunity", Value.fromString(value));
  }

  get searcher(): string {
    let value = this.get("searcher");
    return value!.toString();
  }

  set searcher(value: string) {
    this.set("searcher", Value.fromString(value));
  }

  get searcherContract(): string {
    let value = this.get("searcherContract");
    return value!.toString();
  }

  set searcherContract(value: string) {
    this.set("searcherContract", Value.fromString(value));
  }

  get bidAmount(): BigInt {
    let value = this.get("bidAmount");
    return value!.toBigInt();
  }

  set bidAmount(value: BigInt) {
    this.set("bidAmount", Value.fromBigInt(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value!.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get pair(): string | null {
    let value = this.get("pair");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set pair(value: string | null) {
    if (!value) {
      this.unset("pair");
    } else {
      this.set("pair", Value.fromString(<string>value));
    }
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}

export class SearcherContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SearcherContract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SearcherContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SearcherContract", id.toString(), this);
    }
  }

  static load(id: string): SearcherContract | null {
    return changetype<SearcherContract | null>(
      store.get("SearcherContract", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class Searcher extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Searcher entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Searcher must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Searcher", id.toString(), this);
    }
  }

  static load(id: string): Searcher | null {
    return changetype<Searcher | null>(store.get("Searcher", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get bidsAdded(): BigInt {
    let value = this.get("bidsAdded");
    return value!.toBigInt();
  }

  set bidsAdded(value: BigInt) {
    this.set("bidsAdded", Value.fromBigInt(value));
  }

  get contracts(): Array<string> | null {
    let value = this.get("contracts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set contracts(value: Array<string> | null) {
    if (!value) {
      this.unset("contracts");
    } else {
      this.set("contracts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get roundsWonCount(): BigInt {
    let value = this.get("roundsWonCount");
    return value!.toBigInt();
  }

  set roundsWonCount(value: BigInt) {
    this.set("roundsWonCount", Value.fromBigInt(value));
  }

  get roundsParticipated(): BigInt {
    let value = this.get("roundsParticipated");
    return value!.toBigInt();
  }

  set roundsParticipated(value: BigInt) {
    this.set("roundsParticipated", Value.fromBigInt(value));
  }

  get lastRoundParticipated(): BigInt {
    let value = this.get("lastRoundParticipated");
    return value!.toBigInt();
  }

  set lastRoundParticipated(value: BigInt) {
    this.set("lastRoundParticipated", Value.fromBigInt(value));
  }

  get lastRoundWon(): BigInt {
    let value = this.get("lastRoundWon");
    return value!.toBigInt();
  }

  set lastRoundWon(value: BigInt) {
    this.set("lastRoundWon", Value.fromBigInt(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    return value!.toI32();
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get updatedAt(): i32 {
    let value = this.get("updatedAt");
    return value!.toI32();
  }

  set updatedAt(value: i32) {
    this.set("updatedAt", Value.fromI32(value));
  }
}

export class Opportunity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Opportunity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Opportunity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Opportunity", id.toString(), this);
    }
  }

  static load(id: string): Opportunity | null {
    return changetype<Opportunity | null>(store.get("Opportunity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidsReceived(): BigInt {
    let value = this.get("bidsReceived");
    return value!.toBigInt();
  }

  set bidsReceived(value: BigInt) {
    this.set("bidsReceived", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value!.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class Status extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Status entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Status must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Status", id.toString(), this);
    }
  }

  static load(id: string): Status | null {
    return changetype<Status | null>(store.get("Status", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get activeAtAuction(): BigInt {
    let value = this.get("activeAtAuction");
    return value!.toBigInt();
  }

  set activeAtAuction(value: BigInt) {
    this.set("activeAtAuction", Value.fromBigInt(value));
  }

  get inactiveAtAuction(): BigInt {
    let value = this.get("inactiveAtAuction");
    return value!.toBigInt();
  }

  set inactiveAtAuction(value: BigInt) {
    this.set("inactiveAtAuction", Value.fromBigInt(value));
  }
}
