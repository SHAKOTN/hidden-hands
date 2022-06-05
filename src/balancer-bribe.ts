import { DepositBribe, } from "../generated/BalancerBribe/BalancerBribe"
import { Bribe } from "../generated/schema"

export function handleDepositBribe(event: DepositBribe): void {
  const bribe = new Bribe(event.transaction.hash);

  bribe.bribeIdentifier = event.params.bribeIdentifier;
  bribe.proposal = event.params.proposal;
  bribe.token = event.params.token;
  bribe.amount = event.params.amount;
  bribe.rewardIdentifier = event.params.rewardIdentifier;
  bribe.briber = event.params.briber;
  bribe.save();
}
