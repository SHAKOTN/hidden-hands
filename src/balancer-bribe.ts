import { BigInt } from "@graphprotocol/graph-ts"
import {
  BalancerBribe,
  AddWhitelistTokens,
  DepositBribe,
  GrantTeamRole,
  RemoveWhitelistTokens,
  RevokeTeamRole,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetProposal,
  SetRewardForwarding
} from "../generated/BalancerBribe/BalancerBribe"
import { ExampleEntity } from "../generated/schema"

export function handleAddWhitelistTokens(event: AddWhitelistTokens): void {
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
  entity.tokens = event.params.tokens

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
  // - contract.BRIBE_VAULT(...)
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.PROTOCOL(...)
  // - contract.TEAM_ROLE(...)
  // - contract.allWhitelistedTokens(...)
  // - contract.gauges(...)
  // - contract.generateBribeVaultIdentifier(...)
  // - contract.generateRewardIdentifier(...)
  // - contract.getBribe(...)
  // - contract.getGauges(...)
  // - contract.getRoleAdmin(...)
  // - contract.getWhitelistedTokens(...)
  // - contract.hasRole(...)
  // - contract.indexOfGauge(...)
  // - contract.indexOfWhitelistedToken(...)
  // - contract.isWhitelistedToken(...)
  // - contract.proposalDeadlines(...)
  // - contract.rewardForwarding(...)
  // - contract.supportsInterface(...)
}

export function handleDepositBribe(event: DepositBribe): void {}

export function handleGrantTeamRole(event: GrantTeamRole): void {}

export function handleRemoveWhitelistTokens(
  event: RemoveWhitelistTokens
): void {}

export function handleRevokeTeamRole(event: RevokeTeamRole): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSetProposal(event: SetProposal): void {}

export function handleSetRewardForwarding(event: SetRewardForwarding): void {}
