import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useEffect, useState } from 'react';
import LeafDaoGovernorBravoDelegate from '../../artifacts/contracts/LeafDaoGovernorBravo.sol/LeafDAOGovernorBravoDelegate.json';

const chainId = process.env.CHAIN_ID as string;

function App(proposalId: string, support: number, snapshotBalance: string, proof: string[]) {
 const { config } = usePrepareContractWrite({
 address: process.env.DAO_ADDRESS,
 abi: LeafDaoGovernorBravoDelegate.abi,
 functionName: 'castVote',
 args: [proposalId, support, snapshotBalance, proof],
 chainId: parseInt(chainId),
 })


 const { data, isLoading, isSuccess, isError, write } = useContractWrite(config)

 return (
 <div>
 <button disabled={!write} onClick={() => write?.()}>
 Feed
 </button>
 {isLoading && <div>Processing transaction...</div>}
 {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
 {isError   && <div>Error:       {JSON.stringify(data)}</div>}
 </div>
 )
}
