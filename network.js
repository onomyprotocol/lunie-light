export default {
  id: 'onomy-testnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Onomy Testnet',
  description:
    'Onomy Protocol is a layer-1 Cosmos-based blockchain network powering a cross-chain orderbook + AMM decentralized exchange (DEX) and a stablecoin issuance system',
  logo: `logo.svg`,
  website: 'https://onomy.io',
  apiURL: 'https://rest-testnet.onomy.io', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'wss://rpc-testnet.onomy.io',
  stakingDenom: 'NOM',
  coinLookup: [
    {
      viewDenom: 'NOM',
      chainDenom: 'anom',
      chainToViewConversionFactor: 1e-18,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'onomy',
  validatorAddressPrefix: 'onomyvaloper',
  validatorConsensusaddressPrefix: 'onomyvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'NOM',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
