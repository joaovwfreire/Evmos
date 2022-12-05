import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { Chain, RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useEffect } from 'react';

const evmosChain: Chain = {
  id: 9000,
  name: 'Evmos Testnet',
  network: 'evmos testnet',
  iconUrl: '',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Testnet EVMOS',
    symbol: 'tEVMOS',
  },
  rpcUrls: {
    default: 'https://eth.bd.evmos.dev:8545',
  },
  blockExplorers: {
    default: { name: 'Block Explorer', url: 'https://evm.evmos.dev' }
  },
  testnet: true,
};

const { chains, provider, webSocketProvider } = configureChains(
  [evmosChain
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: process.env.ALCHEMY_KEY as string,
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Leaf DAO',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});


function MyApp({ Component, pageProps }: AppProps) {
  

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}  >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
