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


export function handleDepositBribe(event: DepositBribe): void {}
