import { ethers } from 'ethers'
import contracts from '../constants/contracts'
import LootClass from '../abis/LootClass.json'

export default async (tokenId: number) => {
  const provider = new ethers.providers.JsonRpcProvider('https://cloudflare-eth.com');
  const LootClassContract = new ethers.Contract(contracts.LootClass, LootClass, provider);

  const metadata = (await Promise.all([
    LootClassContract.getClass(tokenId),
    LootClassContract.getGender(tokenId),
    LootClassContract.getRace(tokenId),
  ])).reduce((acc, curr) => {
    const [key, val] = curr.split(': ')
    acc[key.toLowerCase()] = val
    return acc;
  }, { id: tokenId });

  return metadata
}
