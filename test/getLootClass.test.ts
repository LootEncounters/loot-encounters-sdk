import getLootClass from '../src/lib/getLootClass';

describe('getLootClass', () => {
  it('gets the correct metadata for a LootClass NFT', async () => {
    const lootClass = await getLootClass(420)
    expect(lootClass.id).toEqual(420)
    expect(lootClass.class).toEqual('Cleric')
    expect(lootClass.gender).toEqual('Male')
    expect(lootClass.race).toEqual('Gnome')
  })
})
