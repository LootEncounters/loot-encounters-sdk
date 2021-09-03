import getAbilityScoreIdsInWallet from '../src/lib/getAbilityScoreIdsInWallet';

describe('getAbilityScoreIdsInWallet', () => {
  it('returns the ids of LootClass NFTs in a wallet', async () => {
    const lootClassIds = await getAbilityScoreIdsInWallet('0xc084eecdA4970b1BbD6a70E3c515213324c79E77');
    expect(lootClassIds).toEqual(expect.arrayContaining([5147, 1827, 1242, 7114]))
  })
})
