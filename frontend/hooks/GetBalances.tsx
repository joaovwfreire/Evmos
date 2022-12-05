import { 
    useAccount,
    useBalance 
} from 'wagmi'

import { useEffect, useState } from 'react';

// this hook gives hydration errors to the whole page

function shortenHex(hex: string, length = 4) {
    return `${hex.substring(0, length + 2)}…${hex.substring(
      hex.length - length
    )}`;
  }

function GetBalance() {
    const contractAddress: any = '0xF4F46B122a85301597b2Bef4eEdEfEdf59801303';
    const [balance, setBalance] = useState('0.00');
    const { address } = useAccount({
        onConnect({ address, isReconnected }) {
          
        },
      });
   
    const balanceGet =  useBalance({
        addressOrName: address,
        token: contractAddress,
        
        onSettled(data, error) {
            
            if(data?.formatted){
            setBalance(data.formatted)
            }
        },
      })

     

     

      const [mounted, setMounted] = useState(false);
 

      useEffect(() => setMounted(true), []);
      if (!mounted) return null;
      
      return( <div>
        { address && (
            <h4 className="text-dark">
                {`${shortenHex(address)}'s $LTO Balance: ${balance}`} 
                
            
            </h4> )
        }

        </div>
    )
}

export default GetBalance;