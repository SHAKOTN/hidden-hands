import {
  DepositBribe,
} from "../generated/BalancerBribe/BalancerBribe"
import { Bribe } from "../generated/schema"


export function handleDepositBribe(event: DepositBribe): void {
  const id = event.params.bribeIdentifier;
  let bribe = Bribe.load(id);
  if (bribe !== null) {
    return;
  } else {
    bribe = new Bribe(id);
  }
  bribe.bribeIdentifier = id;
  bribe.proposal = event.params.proposal;
  bribe.token = event.params.token;
  bribe.amount = event.params.amount;
  bribe.rewardIdentifier = event.params.rewardIdentifier;
  bribe.briber = event.params.briber;
  bribe.save();
}
