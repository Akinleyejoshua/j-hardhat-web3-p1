const hre = require("hardhat");

const main = async () => {
  const minerFactory = await hre.ethers.getContractFactory("Miner");
  const minerContract = await minerFactory.deploy();

  await minerContract.deployed();

  console.log("miner address: ", minerContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();