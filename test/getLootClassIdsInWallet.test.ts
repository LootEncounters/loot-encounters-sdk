import getLootClassIdsInWallet from '../src/lib/getLootClassIdsInWallet';

describe('getLootClassIdsInWallet', () => {
  it('returns the ids of LootClass NFTs in a wallet', async () => {
    const lootClassIds = await getLootClassIdsInWallet('0xc084eecdA4970b1BbD6a70E3c515213324c79E77');
    expect(lootClassIds).toEqual(expect.arrayContaining([8745, 8364]))
  })
})
