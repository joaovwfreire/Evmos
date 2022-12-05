import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const covalentjs = require('covalentjs');

// you can use classA, classB or pricing APIs
// format covalentjs.<API class>.api
// Example:



const tokenContractAddress: string = process.env.NEXT_PUBLIC_LOTTERY_TOKEN as string;


async function getBalancesAtBlock(tokenAddress: string, blockNumber: number){
  
  const chainId = process.env.CHAIN_ID;
  
  const callUrl = `https://api.covalenthq.com/v1/${chainId}/tokens/${tokenAddress}/token_holders/?quote-currency=USD&format=JSON&block-height=${blockNumber}&page-size=1000&key=${process.env.COVALENT_API_KEY}`;
  
  let response = await axios.get(callUrl);

  
  return response.data.data.items;
  }

type Data = {
  balance: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>){
    const blockNumber = parseInt(req.query.blockNumber as string);
    const tokenAddress = req.query.tokenAddress;
      
    if (req.method === 'GET') {
      try{
        
        let av = await getBalancesAtBlock(tokenAddress as string, blockNumber);

        res.json({av})
      }catch(e){
        res.status(400).json({ balance: 'Method not allowed ' + e })
      }
      }
  }
  

   