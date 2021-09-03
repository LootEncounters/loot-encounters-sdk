import getAbilityScore from '../src/lib/getAbilityScore';

describe('getAbilityScore', () => {
  it('gets the correct metadata for an AbilityScores NFT', async () => {
    const abilityScore = await getAbilityScore(1337)
    expect(abilityScore.id).toEqual(1337)
    expect(abilityScore.charisma).toEqual(9)
    expect(abilityScore.constitution).toEqual(14)
    expect(abilityScore.dexterity).toEqual(8)
    expect(abilityScore.intelligence).toEqual(12)
    expect(abilityScore.strength).toEqual(10)
    expect(abilityScore.wisdom).toEqual(14)
  })
})
