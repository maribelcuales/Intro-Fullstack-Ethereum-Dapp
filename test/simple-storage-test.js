const { expect } = require('chai');

describe('SimpleStorage contract', function () {
  it('test deployment', async function () {
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage')

    const simpleStorage = await SimpleStorage.deploy(123)

    const storedValue = await simpleStorage.get()

    expect(storedValue).to.equal(123)
  })

  it('test set new value', async function () {
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage')

    const simpleStorage = await SimpleStorage.deploy(123)

    await simpleStorage.set(456)

    const storedValue = await simpleStorage.get()

    expect(storedValue).to.equal(456)
  })

  it('Deployment should assign the total supply of tokens to the owner', async function () {
    const [owner] = await ethers.getSigners();

    const SimpleStorage = await ethers.getContractFactory('SimpleStorage');

    const simpleStorageToken = await SimpleStorage.deploy();

    const ownerBalance = await simpleStorageToken.balanceOf(owner.address);
    expect(await simpleStorageToken.totalSupply()).to.equal(ownerBalance);
  })
})
