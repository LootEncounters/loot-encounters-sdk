import { ethers } from 'ethers'
import contracts from '../constants/contracts'
import AbilityScores from '../abis/AbilityScores.json'

export default async (tokenId: number) => {
  const provider = new ethers.providers.JsonRpcProvider('https://cloudflare-eth.com');
  const AbilityScoresContract = new ethers.Contract(contracts.AbilityScores, AbilityScores, provider);

  const metadata = (await Promise.all([
    AbilityScoresContract.getCharisma(tokenId),
    AbilityScoresContract.getConstitution(tokenId),
    AbilityScoresContract.getDexterity(tokenId),
    AbilityScoresContract.getIntelligence(tokenId),
    AbilityScoresContract.getStrength(tokenId),
    AbilityScoresContract.getWisdom(tokenId),
  ])).reduce((acc, curr) => {
    const [key, val] = curr.split(': ')
    acc[key.toLowerCase()] = Number(val)
    return acc;
  }, { id: tokenId });

  return metadata
}
