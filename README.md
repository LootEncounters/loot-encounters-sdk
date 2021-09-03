# loot-encounters-sdk

Utility library for Loot Encounters.

> Still WIP!

## Installation

```
yarn add loot-encounters-sdk
```

## Usage

```ts
import Web3 from 'web3'
import LootEncounters from 'loot-encounters-sdk'

// 1. Instantiate SDK with your Web3 provider.
const web3 = new Web3.providers.HttpProvider('https://cloudflare-eth.com');
const lootEncounters = new LootEncounters(web3);

// 2. Query the blockchain.
const logAllLootClassesOwnedByWallet = async (address) => {
  const ownedLootClassIds = await lootEncounters.getLootClassIdsInWallet(address);
  const ownedLootClasses = await Promise.all(ownedLootClassIds.map(id => getLootClass(id)));
}

logAllClassesOwnedByWallet('0xc084eecdA4970b1BbD6a70E3c515213324c79E77');

/*
  prints to console:

  [
    {
      id: 8745,
      class: 'Sorcerer',
      gender: 'Female',
      race: 'Human',
    }, 
    {
      id: 10235,
      class: 'Barbarian',
      gender: 'Male',
      race: 'Half-Orc',
    }, 
    {
      id: 9127,
      class: 'Paladin',
      gender: 'Female',
      race: 'Dwarf',
    },
  ]
*/
```

## Methods

```ts
// returns a LootClass object
async getLootClass(tokenId: number)

// returns an AbilityScore object
async getAbilityScore(tokenId: number)

// returns an array of LootClass ids owned by a given wallet
async getLootClassIdsInWallet(address: string)

// returns an array of AbilityScore ids owned by a given wallet
async getAbilityScoreIdsInWallet(address: string)
```
