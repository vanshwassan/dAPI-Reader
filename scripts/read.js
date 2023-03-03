const hre = require('hardhat');

async function main() {

  const Reader = await hre.deployments.get("Reader");
  const reader = new hre.ethers.Contract(
    Reader.address,
    Reader.abi,
    hre.ethers.provider.getSigner()
  );
// readFromDapi
  const readFromDapi = await reader.readDapi();
  console.log(readFromDapi);
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });