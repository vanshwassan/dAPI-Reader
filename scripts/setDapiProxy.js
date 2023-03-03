const hre = require('hardhat');

async function main() {

  const Reader = await hre.deployments.get("Reader");
  const reader = new hre.ethers.Contract(
    Reader.address,
    Reader.abi,
    hre.ethers.provider.getSigner()
  );
const DapiProxy = "0xc3A642a3f640FA4DF2ad75E31DA87eC8a19e0B54";
// setDapiProxy
  const setDapiProxy = await reader.setDapiProxyAddress(DapiProxy);
  await setDapiProxy.wait();
  console.log("dAPI Proxy Set!");
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });