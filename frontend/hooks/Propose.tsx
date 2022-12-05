import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useEffect, useState } from 'react';
import LeafDaoGovernorBravoDelegate from '../../artifacts/contracts/LeafDaoGovernorBravo.sol/LeafDAOGovernorBravoDelegate.json';
import { ethers } from 'ethers';

const chainId = process.env.CHAIN_ID as string;

// targets: string[], values: string[], signatures: string[], calldatas: string[], description: string, snapshotBlockNumber: string, merkleRoot: string

function Propose(props: any)  {

 let targets = "0x67A27C624ac5c0F753259e9dA4cd007E4E7b3eA7"
 let values = "10000000000000000" // 0.01 ether
 let signatures = "demo";
 let calldatas = "0x0000000000";
 let daoAddress = "0x21fA1bEf12E24a3712D139D2d3C5cb2cEc85A0Ba"
 let description = "demo #7"

 const { config } = usePrepareContractWrite({
 address: daoAddress,
 abi: LeafDaoGovernorBravoDelegate.abi,
 functionName: 'propose',
 args: [[targets], [values], [signatures], [calldatas], description, props.snapshotBlockNumber, props.merkleRoot],
 chainId: parseInt(chainId),
 overrides: {
  gasLimit: ethers.BigNumber.from('210000')
}
})

 const { data, isLoading, isSuccess, isError, write } = useContractWrite(config)

 setInterval(function(){
    console.log(config)
    console.log({description})
 }, 5000)

 return (
 <div >

 <button className="kk fw-bold text-white align-center ms-auto mt-3" disabled={!write} onClick={() => write?.() }>
 Propose
 </button>

  <div className=' noOverflow fw-bold'>
 {isLoading && <p>Processing transaction...</p>}
 {isSuccess && <p>Transaction: {JSON.stringify(data)}</p>}
 {isError   && <p>Error:       {JSON.stringify(data)}</p>}
 </div>
 </div>
 )
}

export default Propose;
