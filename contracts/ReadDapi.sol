// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@api3/airnode-protocol-v1/contracts/dapis/proxies/interfaces/IDapiProxy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Reader is Ownable {
    address dapiProxy;

    function setDapiProxyAddress(address _proxyAddress) public onlyOwner {
        dapiProxy = _proxyAddress;
    }

    function readDapi (int224 value, uint32 timestamp) public view returns (int224, uint32){
        return IDapiProxy(dapiProxy).read();
    }
}