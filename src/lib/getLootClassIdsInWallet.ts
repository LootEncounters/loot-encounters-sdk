import { ethers } from 'ethers'
import contracts from '../constants/contracts'
import LootClass from '../abis/LootClass.json'

export default async (address: string) => {
  const provider = new ethers.providers.JsonRpcProvider('https://cloudflare-eth.com');
  const LootClassContract = new ethers.Contract(contracts.LootClass, LootClass, provider);

  const balance = (await LootClassContract.balanceOf(address)).toNumber();
  const indexes = [...Array(balance).keys()];

  const tokenIds = (await Promise.all(
    indexes.map(i => LootClassContract.tokenOfOwnerByIndex(address, i))
  )).map(id => id.toNumber())

  return tokenIds
}
