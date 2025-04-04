export const OPENSEA_CONFIG = {
  API_KEY: process.env.REACT_APP_OPENSEA_API_KEY,
  API_URL: 'https://api.opensea.io/api/v1',
  TESTNET_API_URL: 'https://testnets-api.opensea.io/api/v1',
  COLLECTION_SLUG: 'meta-mansion', // Replace with your actual collection slug
};

export const UNREAL_CONFIG = {
  PIXEL_STREAMING_URL: process.env.REACT_APP_UNREAL_STREAMING_URL,
  WS_URL: process.env.REACT_APP_UNREAL_WS_URL,
  API_KEY: process.env.REACT_APP_UNREAL_API_KEY,
};

export const SUPPORTED_CHAINS = {
  ETHEREUM: 1,
  POLYGON: 137,
};

export const NFT_CATEGORIES = {
  MANSIONS: 'mansions',
  FURNITURE: 'furniture',
  VEHICLES: 'vehicles',
  ACCESSORIES: 'accessories',
  GAMES: 'games',
}; 