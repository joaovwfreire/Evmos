import { useContractRead } from 'wagmi';
import { useEffect, useState } from 'react';
import LeafDaoGovernorBravoDelegate from '../abi/contracts/LeafDaoGovernorBravo.sol/LeafDAOGovernorBravoDelegate.json'

const chainId = process.env.CHAIN_ID as string;

function App() {
 const { data, isError, isLoading } = useContractRead({
 address: process.env.DAO_ADDRESS,
 abi: LeafDaoGovernorBravoDelegate.abi,
 functionName: 'getHunger',
 args: [69],
 chainId: parseInt(chainId),
 })
}
