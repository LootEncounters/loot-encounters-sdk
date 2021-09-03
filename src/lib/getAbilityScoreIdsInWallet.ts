import { ethers } from 'ethers'
import contracts from '../constants/contracts'
import AbilityScores from '../abis/AbilityScores.json'

export default async (address: string) => {
  const provider = new ethers.providers.JsonRpcProvider('https://cloudflare-eth.com');
  const AbilityScoresContract = new ethers.Contract(contracts.AbilityScores, AbilityScores, provider);

  const balance = (await AbilityScoresContract.balanceOf(address)).toNumber();
  const indexes = [...Array(balance).keys()];

  const tokenIds = (await Promise.all(
    indexes.map(i => AbilityScoresContract.tokenOfOwnerByIndex(address, i))
  )).map(id => id.toNumber())

  return tokenIds
}
