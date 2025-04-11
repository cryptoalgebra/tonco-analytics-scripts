export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Burn = {
  __typename?: 'Burn';
  /** Burn Jetton 0 amount */
  amount0: Scalars['String']['output'];
  /** Burn Jetton 1 amount */
  amount1: Scalars['String']['output'];
  /** Transaction block */
  block?: Maybe<Scalars['Int']['output']>;
  /** Transaction block time */
  blockTime?: Maybe<Scalars['Int']['output']>;
  /** Var needed for fee computation */
  feeGrowthInside0LastX128: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthInside1LastX128: Scalars['String']['output'];
  /** Transaction hash */
  hash: Scalars['String']['output'];
  /** Jetton 0 */
  jetton0: Jetton;
  /** Jetton 1 */
  jetton1: Jetton;
  /** Position current liquidity */
  liquidity: Scalars['String']['output'];
  /** Position liquidity to burn */
  liquidity2Burn: Scalars['String']['output'];
  /** Burn pool entity */
  pool: Pool;
  /** Position ID to burn */
  positionId: Scalars['Int']['output'];
  /** Burn jettons recipient */
  recipient: Scalars['String']['output'];
  /** Pool reserve0 after burn */
  reserve0?: Maybe<Scalars['String']['output']>;
  /** Pool reserve1 after burn */
  reserve1?: Maybe<Scalars['String']['output']>;
  /** Transaction seqno in poon */
  seqno?: Maybe<Scalars['Int']['output']>;
  /** Position tick lower */
  tickLower: Scalars['Int']['output'];
  /** Position tick upper */
  tickUpper: Scalars['Int']['output'];
  /** Transaction unix time */
  time: Scalars['Date']['output'];
};

export type BurnWhere = {
  /** Burn Jetton 0 amount */
  amount0?: InputMaybe<Scalars['String']['input']>;
  /** Burn Jetton 1 amount */
  amount1?: InputMaybe<Scalars['String']['input']>;
  /** Transaction block data */
  block?: InputMaybe<Comparisons>;
  /** Var needed for fee computation */
  feeGrowthInside0LastX128?: InputMaybe<Scalars['String']['input']>;
  /** Var needed for fee computation */
  feeGrowthInside1LastX128?: InputMaybe<Scalars['String']['input']>;
  /** Has Jetton 0 OR Jetton 1 */
  hasJetton?: InputMaybe<Scalars['String']['input']>;
  /** Transaction hash */
  hash?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 0 address */
  jetton0?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 1 address */
  jetton1?: InputMaybe<Scalars['String']['input']>;
  /** Position current liquidity */
  liquidity?: InputMaybe<Scalars['String']['input']>;
  /** Position liquidity to burn */
  liquidity2Burn?: InputMaybe<Scalars['String']['input']>;
  /** Burn pool address */
  pool?: InputMaybe<Scalars['String']['input']>;
  /** Position ID to burn */
  positionId?: InputMaybe<Scalars['Int']['input']>;
  /** Burn jettons recipient */
  recipient?: InputMaybe<Scalars['String']['input']>;
  /** Position tick lower */
  tickLower?: InputMaybe<Scalars['Int']['input']>;
  /** Position tick upper */
  tickUpper?: InputMaybe<Scalars['Int']['input']>;
  /** Transaction unix time */
  time?: InputMaybe<Comparisons>;
};

export type Collect = {
  __typename?: 'Collect';
  /** Collect Jetton 0 amount */
  amount0: Scalars['String']['output'];
  /** Collect Jetton 1 amount */
  amount1: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthInside0LastX128: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthInside1LastX128: Scalars['String']['output'];
  /** Transaction hash */
  hash: Scalars['String']['output'];
  /** Jetton 0 */
  jetton0: Jetton;
  /** Jetton 1 */
  jetton1: Jetton;
  /** Collect pool entity */
  pool: Pool;
  /** Position ID */
  positionId: Scalars['Int']['output'];
  /** Collect jettons recipient */
  recipient: Scalars['String']['output'];
  /** Transaction unix time */
  time: Scalars['Date']['output'];
};

export type CollectWhere = {
  /** Collect Jetton 0 amount */
  amount0?: InputMaybe<Scalars['String']['input']>;
  /** Collect Jetton 1 amount */
  amount1?: InputMaybe<Scalars['String']['input']>;
  /** Transaction block data */
  block?: InputMaybe<Comparisons>;
  /** Var needed for fee computation */
  feeGrowthInside0LastX128?: InputMaybe<Scalars['String']['input']>;
  /** Var needed for fee computation */
  feeGrowthInside1LastX128?: InputMaybe<Scalars['String']['input']>;
  /** Has Jetton 0 OR Jetton 1 */
  hasJetton?: InputMaybe<Scalars['String']['input']>;
  /** Transaction hash */
  hash?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 0 address */
  jetton0?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 1 address */
  jetton1?: InputMaybe<Scalars['String']['input']>;
  /** Collect pool address */
  pool?: InputMaybe<Scalars['String']['input']>;
  /** Position ID */
  positionId?: InputMaybe<Scalars['Int']['input']>;
  /** Collect jettons recipient */
  recipient?: InputMaybe<Scalars['String']['input']>;
  /** Transaction unix time */
  time?: InputMaybe<Comparisons>;
};

export type Comparisons = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<Scalars['String']['input']>;
};

export type ComparisonsInt = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<Scalars['Int']['input']>;
};

export type DexData = {
  __typename?: 'DexData';
  /** Pool count at given time */
  poolCount: Scalars['Int']['output'];
  /** Record time */
  time: Scalars['Date']['output'];
  /** TON price in USD at given time */
  tonPriceUsd: Scalars['Float']['output'];
  /** All time fees in TON at given time */
  totalFeesTon: Scalars['Float']['output'];
  /** All time fees in USD at given time */
  totalFeesUsd: Scalars['Float']['output'];
  /** TVL across all pools in TON at given time */
  totalValueLockedTon: Scalars['Float']['output'];
  /** TVL across all pools in USD at given time */
  totalValueLockedUsd: Scalars['Float']['output'];
  /** All time volume in TON at given time */
  totalVolumeTon: Scalars['Float']['output'];
  /** All time volume in USD at given time */
  totalVolumeUsd: Scalars['Float']['output'];
  /** Transaction count at given time */
  txCount: Scalars['Int']['output'];
};

export type DexDataWhere = {
  /** Pool count */
  poolCount?: InputMaybe<Scalars['Int']['input']>;
  /** Record time */
  time?: InputMaybe<Scalars['Date']['input']>;
  /** TON price in USD */
  tonPriceUsd?: InputMaybe<Scalars['Float']['input']>;
  /** All time fees in TON */
  totalFeesTon?: InputMaybe<Scalars['Float']['input']>;
  /** All time fees in USD */
  totalFeesUsd?: InputMaybe<Scalars['Float']['input']>;
  /** TVL across all pools in TON */
  totalValueLockedTon?: InputMaybe<Scalars['Float']['input']>;
  /** TVL across all pools in USD */
  totalValueLockedUsd?: InputMaybe<Scalars['Float']['input']>;
  /** All time volume in TON */
  totalVolumeTon?: InputMaybe<Scalars['Float']['input']>;
  /** All time volume in USD */
  totalVolumeUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Transaction count */
  txCount?: InputMaybe<Scalars['Int']['input']>;
};

export type DistributorClaim = {
  __typename?: 'DistributorClaim';
  /** Farming ID */
  farmingId: Scalars['String']['output'];
  fwdAmount: Scalars['String']['output'];
  /** Transaction hash */
  hash: Scalars['String']['output'];
  /** Claim index */
  index: Scalars['Int']['output'];
  /** Collected amount */
  jettonAmount: Scalars['String']['output'];
  /** Position ID */
  positionId: Scalars['String']['output'];
  /** Transaction unix time */
  time: Scalars['Date']['output'];
  /** Rewards recipient address */
  toWallet: Scalars['String']['output'];
};

export type DistributorClaimWhere = {
  /** Farming ID */
  farmingId?: InputMaybe<Scalars['String']['input']>;
  fwdAmount?: InputMaybe<Scalars['String']['input']>;
  /** Transaction hash */
  hash?: InputMaybe<Scalars['String']['input']>;
  /** Claim index */
  index?: InputMaybe<Scalars['Int']['input']>;
  /** Collected amount */
  jettonAmount?: InputMaybe<Scalars['String']['input']>;
  /** Position ID */
  positionId?: InputMaybe<Scalars['String']['input']>;
  /** Transaction unix time */
  time?: InputMaybe<Comparisons>;
  /** Rewards recipient address */
  toWallet?: InputMaybe<Scalars['String']['input']>;
};

export type Filter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum GroupBy {
  Day = 'DAY',
  Month = 'MONTH',
  Year = 'YEAR'
}

export type Jetton = {
  __typename?: 'Jetton';
  /** Raw address of the jetton on the blockchain */
  address: Scalars['String']['output'];
  /** Bounceable address of the jetton on the blockchain */
  bounceableAddress: Scalars['String']['output'];
  /** Jetton decimals */
  decimals: Scalars['Int']['output'];
  /** Jetton price derived in TON */
  derivedTon: Scalars['Float']['output'];
  /** Jetton price derived in USD */
  derivedUsd: Scalars['Float']['output'];
  /** Jetton description */
  description: Scalars['String']['output'];
  /** Jetton fees across all pools that include this token in TON */
  feesTon: Scalars['Float']['output'];
  /** Jetton fees across all pools that include this token in USD */
  feesUsd: Scalars['Float']['output'];
  /** Jetton image */
  image: Scalars['String']['output'];
  /** Jetton name */
  name: Scalars['String']['output'];
  /** Jetton symbol */
  symbol: Scalars['String']['output'];
  /** Jetton total supply across all pools that include this token */
  totalSupply: Scalars['Float']['output'];
  /** Jetton TVL across all pools that include this token */
  totalValueLocked: Scalars['Float']['output'];
  /** Jetton TVL across all pools that include this token in USD */
  totalValueLockedUsd: Scalars['Float']['output'];
  /** Transactions across all pools that include this token */
  txCount: Scalars['Int']['output'];
  /** Jetton volume across all pools that include this token in token units */
  volume: Scalars['Float']['output'];
  /** Jetton volume across all pools that include this token in TON */
  volumeTon: Scalars['Float']['output'];
  /** Jetton volume across all pools that include this token in USD */
  volumeUsd: Scalars['Float']['output'];
  /** Jetton wallet */
  wallet: Scalars['String']['output'];
};

export type JettonData = {
  __typename?: 'JettonData';
  /** Jetton derived TON at given time */
  derivedTon: Scalars['Float']['output'];
  /** Jetton derived USD at given time */
  derivedUsd: Scalars['Float']['output'];
  /** Jetton all time generated fees in USD at given time in TON */
  feesTon: Scalars['Float']['output'];
  /** Jetton all time generated fees in USD at given time */
  feesUsd: Scalars['Float']['output'];
  /** Jetton address in blockchain */
  jettonInfo: Scalars['String']['output'];
  /** Record time */
  time: Scalars['Date']['output'];
  /** Jetton total supply at given time */
  totalSupply: Scalars['Float']['output'];
  /** Jetton TVL in jetton units at given time */
  totalValueLocked: Scalars['Float']['output'];
  /** Jetton TVL in USD at given time */
  totalValueLockedUsd: Scalars['Float']['output'];
  /** Jetton transactions count at given time */
  txCount: Scalars['Int']['output'];
  /** Jetton all time volume in jetton units at given time */
  volume: Scalars['Float']['output'];
  /** Jetton all time volume in USD at given time in TON */
  volumeTon: Scalars['Float']['output'];
  /** Jetton all time volume in USD at given time */
  volumeUsd: Scalars['Float']['output'];
};

export type JettonDataWhere = {
  /** Jetton derived TON */
  derivedTon?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton derived USD */
  derivedUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton all time generated fees in TON */
  feesTon?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton all time generated fees in USD */
  feesUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton address in blockchain */
  jettonInfo?: InputMaybe<Scalars['String']['input']>;
  /** Record time */
  time?: InputMaybe<Scalars['Date']['input']>;
  /** Jetton total supply */
  totalSupply?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton TVL in jetton units */
  totalValueLocked?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton TVL in USD */
  totalValueLockedUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton transactions count */
  txCount?: InputMaybe<Scalars['Int']['input']>;
  /** Jetton all time volume in jetton units */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton all time volume in TON */
  volumeTon?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton all time volume in USD */
  volumeUsd?: InputMaybe<Scalars['Float']['input']>;
};

export type JettonWhere = {
  /** Raw address of the jetton on the blockchain */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Bounceable address of the jetton on the blockchain */
  bounceableAddress?: InputMaybe<Scalars['String']['input']>;
  /** Jetton decimals */
  decimals?: InputMaybe<Scalars['Int']['input']>;
  /** Jetton description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Jetton image */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Jetton name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Jetton symbol */
  symbol?: InputMaybe<Scalars['String']['input']>;
  /** Jetton wallet */
  wallet?: InputMaybe<Scalars['String']['input']>;
};

export type Meta = {
  __typename?: 'Meta';
  lastBlock?: Maybe<Scalars['Int']['output']>;
  lastBlockTimestamp?: Maybe<Scalars['Int']['output']>;
};

export type Mint = {
  __typename?: 'Mint';
  /** Mint Jetton 0 amount */
  amount0: Scalars['String']['output'];
  /** Mint Jetton 1 amount */
  amount1: Scalars['String']['output'];
  /** Mint amount in USD */
  amountUsd: Scalars['String']['output'];
  /** Transaction block */
  block?: Maybe<Scalars['Int']['output']>;
  /** Transaction block time */
  blockTime?: Maybe<Scalars['Int']['output']>;
  /** Var needed for fee computation */
  feeGrowthInside0X128: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthInside1X128: Scalars['String']['output'];
  /** Transaction hash */
  hash: Scalars['String']['output'];
  /** Jetton 0 */
  jetton0: Jetton;
  /** Jetton 1 */
  jetton1: Jetton;
  /** Position liquidity */
  liquidity: Scalars['String']['output'];
  /** NFT ID. Could be null */
  mint_index?: Maybe<Scalars['Int']['output']>;
  /** Mint pool entity */
  pool: Pool;
  /** NFT position recipient */
  recipient: Scalars['String']['output'];
  /** Referral address */
  referral?: Maybe<Scalars['String']['output']>;
  /** Pool reserve0 after mint */
  reserve0?: Maybe<Scalars['String']['output']>;
  /** Pool reserve1 after mint */
  reserve1?: Maybe<Scalars['String']['output']>;
  /** Transaction seqno in poon */
  seqno?: Maybe<Scalars['Int']['output']>;
  /** Position tick lower */
  tickLower: Scalars['Int']['output'];
  /** Position tick upper */
  tickUpper: Scalars['Int']['output'];
  /** Transaction unix time */
  time: Scalars['Date']['output'];
};

export type MintWhere = {
  /** Mint Jetton 0 amount */
  amount0?: InputMaybe<Scalars['String']['input']>;
  /** Mint Jetton 1 amount */
  amount1?: InputMaybe<Scalars['String']['input']>;
  /** Transaction block data */
  block?: InputMaybe<Comparisons>;
  /** Var needed for fee computation */
  feeGrowthInside0X128?: InputMaybe<Scalars['String']['input']>;
  /** Var needed for fee computation */
  feeGrowthInside1X128?: InputMaybe<Scalars['String']['input']>;
  /** Has Jetton 0 OR Jetton 1 */
  hasJetton?: InputMaybe<Scalars['String']['input']>;
  /** Transaction hash */
  hash?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 0 address */
  jetton0?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 1 address */
  jetton1?: InputMaybe<Scalars['String']['input']>;
  /** Position liquidity */
  liquidity?: InputMaybe<Scalars['String']['input']>;
  /** NFT ID. Could be null */
  mint_index?: InputMaybe<Scalars['Int']['input']>;
  /** Mint pool address */
  pool?: InputMaybe<Scalars['String']['input']>;
  /** NFT position recipient */
  recipient?: InputMaybe<Scalars['String']['input']>;
  /** Referral */
  referral?: InputMaybe<Scalars['String']['input']>;
  /** Position tick lower */
  tickLower?: InputMaybe<Scalars['Int']['input']>;
  /** Position tick upper */
  tickUpper?: InputMaybe<Scalars['Int']['input']>;
  /** Transaction unix time */
  time?: InputMaybe<Comparisons>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pool = {
  __typename?: 'Pool';
  /** Raw address of the pool on the blockchain */
  address: Scalars['String']['output'];
  /** Pool admin address */
  adminAddress: Scalars['String']['output'];
  /** Pool current APR */
  apr?: Maybe<Scalars['Float']['output']>;
  /** All time Jetton 0 collected fees */
  collectedFeesJetton0: Scalars['Float']['output'];
  /** All time Jetton 1 collected fees */
  collectedFeesJetton1: Scalars['Float']['output'];
  /** All time collected fees in USD */
  collectedFeesUsd: Scalars['Float']['output'];
  /** Pool creation block */
  creationBlock?: Maybe<Scalars['Int']['output']>;
  /** Pool creation block time */
  creationBlockTime?: Maybe<Scalars['Int']['output']>;
  /** Pool creation hash */
  creationHash: Scalars['String']['output'];
  /** Pool creation unix */
  creationUnix: Scalars['Int']['output'];
  /** Fee amount, where 1 = 0.001% */
  fee: Scalars['Int']['output'];
  /** Tracker for global fee growth */
  feeGrowthGlobal0X128: Scalars['String']['output'];
  /** Tracker for global fee growth */
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** 24H generated fees in TON */
  fees24HTon: Scalars['Float']['output'];
  /** 24H generated fees */
  fees24HUsd: Scalars['Float']['output'];
  /** 48H generated fees in TON */
  fees48HTon: Scalars['Float']['output'];
  /** 48H generated fees */
  fees48HUsd: Scalars['Float']['output'];
  /** All time Jetton 0 fees generated */
  feesJetton0: Scalars['Float']['output'];
  /** All time Jetton 1 fees generated */
  feesJetton1: Scalars['Float']['output'];
  /** All time fees generated in TON */
  feesTon: Scalars['Float']['output'];
  /** All time fees generated in USD */
  feesUsd: Scalars['Float']['output'];
  /** Pool internal ID */
  id: Scalars['String']['output'];
  /** Was pool initialized */
  isInitialized: Scalars['Boolean']['output'];
  /** Pool Jetton 0 */
  jetton0: Jetton;
  /** Jetton 0 per token1 */
  jetton0Price: Scalars['Float']['output'];
  /** Pool Jetton 1 */
  jetton1: Jetton;
  /** Jetton 1 per token0 */
  jetton1Price: Scalars['Float']['output'];
  /** Pool last update time */
  lastUpdateTime: Scalars['Date']['output'];
  /** In range liquidity */
  liquidity: Scalars['String']['output'];
  /** Pool name */
  name: Scalars['String']['output'];
  /** Pool address */
  poolInfo: Scalars['String']['output'];
  /** Pool all time positions count */
  positionsCount: Scalars['Int']['output'];
  /** Pool current tick */
  priceSqrt: Scalars['String']['output'];
  /** Current tick */
  tick: Scalars['Int']['output'];
  /** Pool tick spacing */
  tickSpacing: Scalars['Int']['output'];
  /** All time Jetton 0 TVL */
  totalValueLockedJetton0: Scalars['Float']['output'];
  /** All time Jetton 1 TVL */
  totalValueLockedJetton1: Scalars['Float']['output'];
  /** All time TVL in Ton */
  totalValueLockedTon: Scalars['Float']['output'];
  /** All time TVL in USD */
  totalValueLockedUsd: Scalars['Float']['output'];
  /** All time transactions count */
  txCount: Scalars['Int']['output'];
  /** Pool last update unix */
  unix: Scalars['Date']['output'];
  /** 24H Volume in TON */
  volume24HTon: Scalars['Float']['output'];
  /** 24H Volume */
  volume24HUsd: Scalars['Float']['output'];
  /** 48H Volume in TON */
  volume48HTon: Scalars['Float']['output'];
  /** 48H Volume */
  volume48HUsd: Scalars['Float']['output'];
  /** All time Jetton 0 swapped */
  volumeJetton0: Scalars['Float']['output'];
  /** All time Jetton 1 swapped */
  volumeJetton1: Scalars['Float']['output'];
  /** All time volume in TON */
  volumeTon: Scalars['Float']['output'];
  /** All time volume in USD */
  volumeUsd: Scalars['Float']['output'];
};

export type PoolData = {
  __typename?: 'PoolData';
  /** Pool APR at given time */
  apr: Scalars['Float']['output'];
  /** All time Jetton 0 collected fees at given time */
  collectedFeesJetton0: Scalars['Float']['output'];
  /** All time Jetton 1 collected fees at given time */
  collectedFeesJetton1: Scalars['Float']['output'];
  /** All time collected fees in USD at given time */
  collectedFeesUsd: Scalars['Float']['output'];
  /** Pool all time fees at given time */
  fee: Scalars['Int']['output'];
  /** Var needed for fee computation */
  feeGrowthGlobal0X128: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** All time Jetton 0 fees generated at given time */
  feesJetton0: Scalars['Float']['output'];
  /** All time Jetton 1 fees generated at given time */
  feesJetton1: Scalars['Float']['output'];
  /** Pool all time fees generated in USD at given time in TON */
  feesTon: Scalars['Float']['output'];
  /** Pool all time fees generated in USD at given time */
  feesUsd: Scalars['Float']['output'];
  /** Pool internal ID */
  id: Scalars['String']['output'];
  /** Jetton 0 per token1 at given time */
  jetton0Price: Scalars['Float']['output'];
  /** Jetton 1 per token0 at given time */
  jetton1Price: Scalars['Float']['output'];
  /** Pool in range liquidity at given time */
  liquidity: Scalars['String']['output'];
  /** Pool address in blockchain */
  poolInfo: Scalars['String']['output'];
  /** Pool positions count at given time */
  positionsCount: Scalars['Int']['output'];
  /** Pool price at given time */
  priceSqrt: Scalars['String']['output'];
  /** Pool tick at given time */
  tick: Scalars['Int']['output'];
  /** Pool tick spacing at given time */
  tickSpacing: Scalars['Int']['output'];
  /** Jetton 0 TVL at given time */
  totalValueLockedJetton0: Scalars['Float']['output'];
  /** Jetton 1 TVL at given time */
  totalValueLockedJetton1: Scalars['Float']['output'];
  /** Pool TVL in TON at given time */
  totalValueLockedTon: Scalars['Float']['output'];
  /** Pool TVL in USD at given time */
  totalValueLockedUsd: Scalars['Float']['output'];
  /** Pool all time transacitions count at given time */
  txCount: Scalars['Int']['output'];
  /** Record time */
  unix: Scalars['Date']['output'];
  /** All time Jetton 0 swapped at given time */
  volumeJetton0: Scalars['Float']['output'];
  /** All time Jetton 1 swapped at given time */
  volumeJetton1: Scalars['Float']['output'];
  /** Pool all time volume in USD at given time in TON */
  volumeTon: Scalars['Float']['output'];
  /** Pool all time volume in USD at given time */
  volumeUsd: Scalars['Float']['output'];
};

export type PoolDataWhere = {
  /** All time Jetton 0 collected fees */
  collectedFeesJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** All time Jetton 1 collected fees */
  collectedFeesJetton1?: InputMaybe<Scalars['Float']['input']>;
  /** All time collected fees in USD */
  collectedFeesUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Fee amount, where 1 = 0.001% */
  fee?: InputMaybe<Scalars['Int']['input']>;
  /** Var needed for fee computation */
  feeGrowthGlobal0X128?: InputMaybe<Scalars['String']['input']>;
  /** Var needed for fee computation */
  feeGrowthGlobal1X128?: InputMaybe<Scalars['String']['input']>;
  /** All time Jetton 0 fees generated */
  feesJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** All time Jetton 1 fees generated */
  feesJetton1?: InputMaybe<Scalars['Float']['input']>;
  /** All time fees in TON */
  feesTon?: InputMaybe<Scalars['Float']['input']>;
  /** All time fees in USD */
  feesUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton 0 per token1 */
  jetton0Price?: InputMaybe<Scalars['Float']['input']>;
  /** Jetton 1 per token0 */
  jetton1Price?: InputMaybe<Scalars['Float']['input']>;
  /** Pool in range liquidity */
  liquidity?: InputMaybe<Scalars['String']['input']>;
  /** Pool address in blockchain */
  poolInfo?: InputMaybe<Scalars['String']['input']>;
  /** Pool price */
  priceSqrt?: InputMaybe<Scalars['String']['input']>;
  /** Pool tick */
  tick?: InputMaybe<Scalars['Int']['input']>;
  /** TVL Jetton 0 */
  totalValueLockedJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** TVL Jetton 1 */
  totalValueLockedJetton1?: InputMaybe<Scalars['Float']['input']>;
  /** TVL in TON */
  totalValueLockedTon?: InputMaybe<Scalars['Float']['input']>;
  /** TVL in USD */
  totalValueLockedUsd?: InputMaybe<Scalars['Float']['input']>;
  /** All time transactions count */
  txCount?: InputMaybe<Scalars['Int']['input']>;
  /** Record time */
  unix?: InputMaybe<Scalars['Date']['input']>;
  /** All time Jetton 0 swapped */
  volumeJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** All time Jetton 1 swapped */
  volumeJetton1?: InputMaybe<Scalars['Float']['input']>;
  /** All time volume in TON */
  volumeTon?: InputMaybe<Scalars['Float']['input']>;
  /** All time volume in USD */
  volumeUsd?: InputMaybe<Scalars['Float']['input']>;
};

export type PoolWhere = {
  /** Raw address of the pool on the blockchain */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Pool admin address */
  adminAddress?: InputMaybe<Scalars['String']['input']>;
  /** Pool creation unix */
  creationUnix?: InputMaybe<Scalars['Int']['input']>;
  /** Was pool initialized */
  isInitialized?: InputMaybe<Scalars['Boolean']['input']>;
  /** Pool Jetton 0 address */
  jetton0?: InputMaybe<Scalars['String']['input']>;
  /** Pool Jetton 1 address */
  jetton1?: InputMaybe<Scalars['String']['input']>;
  /** Pool last update time */
  lastUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  /** Pool name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Position = {
  __typename?: 'Position';
  /** Position current Jetton 0 amount */
  amount0: Scalars['String']['output'];
  /** Position current Jetton 1 amount */
  amount1: Scalars['String']['output'];
  /** Position closing time */
  closingTime?: Maybe<Scalars['Date']['output']>;
  /** Position all time collected fees in Jetton 0 */
  collectedFeesJetton0: Scalars['String']['output'];
  /** Position all time collected fees in Jetton 1 */
  collectedFeesJetton1: Scalars['String']['output'];
  /** Position all time collected Jetton 0 */
  collectedJetton0: Scalars['String']['output'];
  /** Position all time collected Jetton 1 */
  collectedJetton1: Scalars['String']['output'];
  /** Position creation time */
  creationTime: Scalars['Date']['output'];
  /** Position initially deposited Jetton 0 */
  depositedJetton0: Scalars['String']['output'];
  /** Position initially deposited Jetton 1 */
  depositedJetton1: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthInside0LastX128: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthInside1LastX128: Scalars['String']['output'];
  /** Position ID <position index in pool>:<pool adddress> */
  id: Scalars['String']['output'];
  /** Position Jetton 0 entity */
  jetton0: Jetton;
  /** Position Jetton 1 entity */
  jetton1: Jetton;
  /** Position current liquidity */
  liquidity: Scalars['String']['output'];
  /** Was position migrated from Stonfi or Dedust or no */
  migratedFrom?: Maybe<Scalars['String']['output']>;
  /** NFT address in blockchain */
  nftAddress: Scalars['String']['output'];
  /** NFT image */
  nftImage: Scalars['String']['output'];
  /** Position owner */
  owner: Scalars['String']['output'];
  /** Position pool address */
  pool: Scalars['String']['output'];
  /** Position tick lower */
  tickLower: Scalars['Int']['output'];
  /** Position tick upper */
  tickUpper: Scalars['Int']['output'];
  /** Position all time withdrawn Jetton 0 */
  withdrawnJetton0: Scalars['String']['output'];
  /** Position all time withdrawn Jetton 1 */
  withdrawnJetton1: Scalars['String']['output'];
};

export type PositionData = {
  __typename?: 'PositionData';
  /** Position collected fees jetton 0 amount at given time */
  collectedFeesJetton0: Scalars['String']['output'];
  /** Position collected fees jetton 1 amount at given time */
  collectedFeesJetton1: Scalars['String']['output'];
  /** Position collected jetton 0 amount at given time */
  collectedJetton0: Scalars['String']['output'];
  /** Position collected jetton 1 amount at given time */
  collectedJetton1: Scalars['String']['output'];
  /** Position initially deposited jetton 0 amount */
  depositedJetton0: Scalars['String']['output'];
  /** Position initially deposited jetton 1 amount */
  depositedJetton1: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthInside0LastX128: Scalars['String']['output'];
  /** Var needed for fee computation */
  feeGrowthInside1LastX128: Scalars['String']['output'];
  /** Position liquidity at given time */
  liquidity: Scalars['String']['output'];
  /** Position ID */
  positionInfo: Scalars['Int']['output'];
  /** Position tick lower */
  tickLower: Scalars['Int']['output'];
  /** Position tick upper */
  tickUpper: Scalars['Int']['output'];
  /** Record time */
  time: Scalars['Date']['output'];
  /** Position TVL jetton 0 at given time */
  totalValueLockedJetton0: Scalars['Float']['output'];
  /** Position TVL jetton 1 at given time */
  totalValueLockedJetton1: Scalars['Float']['output'];
  /** Position withdrawn jetton 0 amount at given time */
  withdrawnJetton0: Scalars['String']['output'];
  /** Position withdrawn jetton 1 amount at given time */
  withdrawnJetton1: Scalars['String']['output'];
};

export type PositionDataWhere = {
  /** Position collected fees in jetton 0 */
  collectedFeesJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** Position collected fees in jetton 1 */
  collectedFeesJetton1?: InputMaybe<Scalars['Float']['input']>;
  /** Position collected jetton 0 */
  collectedJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** Position collected jetton 1 */
  collectedJetton1?: InputMaybe<Scalars['Float']['input']>;
  /** Position initially deposited jetton 0 */
  depositedJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** Position initially deposited jetton 1 */
  depositedJetton1?: InputMaybe<Scalars['Float']['input']>;
  /** Var needed for fee computation */
  feeGrowthInside0LastX128?: InputMaybe<Scalars['String']['input']>;
  /** Var needed for fee computation */
  feeGrowthInside1LastX128?: InputMaybe<Scalars['String']['input']>;
  /** Position liquidity */
  liquidity?: InputMaybe<Scalars['String']['input']>;
  /** Position ID */
  positionInfo?: InputMaybe<Scalars['Int']['input']>;
  /** Position tick lower */
  tickLower?: InputMaybe<Scalars['Int']['input']>;
  /** Position tick upper */
  tickUpper?: InputMaybe<Scalars['Int']['input']>;
  /** Record time */
  time?: InputMaybe<Scalars['Date']['input']>;
  /** Position TVL jetton 0 */
  totalValueLockedJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** Position TVL jetton 1 */
  totalValueLockedJetton1?: InputMaybe<Scalars['Float']['input']>;
  /** Position withdrawn jetton 0 */
  withdrawnJetton0?: InputMaybe<Scalars['Float']['input']>;
  /** Position withdrawn jetton 1 */
  withdrawnJetton1?: InputMaybe<Scalars['Float']['input']>;
};

export type PositionWhere = {
  /** Position closing time */
  closingTime?: InputMaybe<Scalars['Date']['input']>;
  /** Position creation time */
  creationTime?: InputMaybe<Scalars['Date']['input']>;
  /** Var needed for fee computation */
  feeGrowthInside0LastX128?: InputMaybe<Scalars['String']['input']>;
  /** Var needed for fee computation */
  feeGrowthInside1LastX128?: InputMaybe<Scalars['String']['input']>;
  /** Position ID <position index in pool>:<pool adddress> */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Position Jetton 0 address */
  jetton0?: InputMaybe<Scalars['String']['input']>;
  /** Position Jetton 1 address */
  jetton1?: InputMaybe<Scalars['String']['input']>;
  /** Liquidity gt, gte, lt, lte, equal, not filter */
  liquidity?: InputMaybe<Comparisons>;
  /** Was position migrated from Stonfi or Dedust or no */
  migratedFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** NFT address in blockchain */
  nftAddress?: InputMaybe<Scalars['String']['input']>;
  /** NFT image */
  nftImage?: InputMaybe<Scalars['String']['input']>;
  /** Position owner */
  owner?: InputMaybe<Scalars['String']['input']>;
  /** Position pool address */
  pool?: InputMaybe<Scalars['String']['input']>;
  /** Lower tick gt, gte, lt, lte, equal filter */
  tickLower?: InputMaybe<ComparisonsInt>;
  /** Upper tick gt, gte, lt, lte, equal filter */
  tickUpper?: InputMaybe<ComparisonsInt>;
};

export type Query = {
  __typename?: 'Query';
  burns?: Maybe<Array<Maybe<Burn>>>;
  collects?: Maybe<Array<Maybe<Collect>>>;
  dexData?: Maybe<Array<Maybe<DexData>>>;
  distributorClaims?: Maybe<Array<Maybe<DistributorClaim>>>;
  jettonData?: Maybe<Array<Maybe<JettonData>>>;
  jettons?: Maybe<Array<Maybe<Jetton>>>;
  meta?: Maybe<Array<Maybe<Meta>>>;
  mints?: Maybe<Array<Maybe<Mint>>>;
  poolData?: Maybe<Array<Maybe<PoolData>>>;
  pools?: Maybe<Array<Maybe<Pool>>>;
  positionData?: Maybe<Array<Maybe<PositionData>>>;
  positions?: Maybe<Array<Maybe<Position>>>;
  swaps?: Maybe<Array<Maybe<Swap>>>;
  uninitializedPools?: Maybe<Array<Maybe<UninitializedPool>>>;
};


export type QueryBurnsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<BurnWhere>;
};


export type QueryCollectsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<CollectWhere>;
};


export type QueryDexDataArgs = {
  from: Scalars['Date']['input'];
  groupBy: GroupBy;
  to: Scalars['Date']['input'];
};


export type QueryDistributorClaimsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<DistributorClaimWhere>;
};


export type QueryJettonDataArgs = {
  from: Scalars['Date']['input'];
  groupBy: GroupBy;
  id: Scalars['String']['input'];
  to: Scalars['Date']['input'];
};


export type QueryJettonsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<JettonWhere>;
};


export type QueryMintsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<MintWhere>;
};


export type QueryPoolDataArgs = {
  from: Scalars['Date']['input'];
  groupBy: GroupBy;
  id: Scalars['String']['input'];
  to: Scalars['Date']['input'];
};


export type QueryPoolsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<PoolWhere>;
};


export type QueryPositionDataArgs = {
  from: Scalars['Date']['input'];
  groupBy: GroupBy;
  id: Scalars['Int']['input'];
  to: Scalars['Date']['input'];
};


export type QueryPositionsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<PositionWhere>;
};


export type QuerySwapsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<SwapWhere>;
};


export type QueryUninitializedPoolsArgs = {
  filter?: InputMaybe<Filter>;
  where?: InputMaybe<UninitializedPoolWhere>;
};

export type Swap = {
  __typename?: 'Swap';
  /** Swap input amount */
  amount: Scalars['Float']['output'];
  /** Transaction block */
  block?: Maybe<Scalars['Int']['output']>;
  /** Transaction block time */
  blockTime?: Maybe<Scalars['Int']['output']>;
  /** Swap sender address */
  from: Scalars['String']['output'];
  /** Transaction hash */
  hash: Scalars['String']['output'];
  /** Is multihop errored */
  isMultihopErrored?: Maybe<Scalars['Boolean']['output']>;
  /** Is multihop finished */
  isMultihopFinished?: Maybe<Scalars['Boolean']['output']>;
  /** Is swap being Jetton 0 to Jetton 1 or Jetton 1 to Jetton 0 */
  isZeroToOne: Scalars['Boolean']['output'];
  /** Jetton 0 entity */
  jetton0: Jetton;
  /** Jetton 1 entity */
  jetton1: Jetton;
  /** Multihop path */
  multihop?: Maybe<Scalars['String']['output']>;
  /** Swap pool entity */
  pool: Pool;
  /** Referral code */
  referral?: Maybe<Scalars['String']['output']>;
  /** Pool reserve0 after swap */
  reserve0?: Maybe<Scalars['String']['output']>;
  /** Pool reserve1 after swap */
  reserve1?: Maybe<Scalars['String']['output']>;
  /** Transaction seqno in poon */
  seqno?: Maybe<Scalars['Int']['output']>;
  /** Swap price value */
  sqrtPriceLimitX96: Scalars['String']['output'];
  /** Transaction unix time */
  time: Scalars['Date']['output'];
  /** Swap recipient address */
  to: Scalars['String']['output'];
  /** Jetton 0 to refund */
  toRefund0: Scalars['String']['output'];
  /** Jetton 1 to refund */
  toRefund1: Scalars['String']['output'];
};

export type SwapWhere = {
  /** Swap input amount */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Transaction block data */
  block?: InputMaybe<Comparisons>;
  /** Swap sender address */
  from?: InputMaybe<Scalars['String']['input']>;
  /** Has Jetton 0 OR Jetton 1 */
  hasJetton?: InputMaybe<Scalars['String']['input']>;
  /** Transaction hash */
  hash?: InputMaybe<Scalars['String']['input']>;
  /** Is multihop errored */
  isMultihopErrored?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is multihop finished */
  isMultihopFinished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Jetton 0 address */
  jetton0?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 1 address */
  jetton1?: InputMaybe<Scalars['String']['input']>;
  /** Multihop path */
  multihop?: InputMaybe<Scalars['String']['input']>;
  /** Swap pool address */
  pool?: InputMaybe<Scalars['String']['input']>;
  /** Referral code */
  referral?: InputMaybe<Scalars['String']['input']>;
  /** Swap price value */
  sqrtPriceLimitX96?: InputMaybe<Scalars['String']['input']>;
  /** Transaction unix time */
  time?: InputMaybe<Comparisons>;
  /** Swap recipient address */
  to?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 0 to refund */
  toRefund0?: InputMaybe<Scalars['String']['input']>;
  /** Jetton 1 to refund */
  toRefund1?: InputMaybe<Scalars['String']['input']>;
};

export type UninitializedPool = {
  __typename?: 'UninitializedPool';
  /** Raw address of the pool on the blockchain */
  address: Scalars['String']['output'];
  /** Pool admin address */
  adminAddress: Scalars['String']['output'];
  /** Pool creation unix */
  cretationUnix: Scalars['Int']['output'];
  /** Pool Jetton 0 wallet */
  jettonWallet0: Scalars['String']['output'];
  /** Pool Jetton 1 wallet */
  jettonWallet1: Scalars['String']['output'];
  /** Pool last check time for being initialized */
  lastCheckTime: Scalars['Date']['output'];
};

export type UninitializedPoolWhere = {
  /** Raw address of the pool on the blockchain */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Pool admin address */
  adminAddress?: InputMaybe<Scalars['String']['input']>;
  /** Pool creation unix */
  cretationUnix?: InputMaybe<Scalars['Int']['input']>;
  /** Pool Jetton 0 wallet */
  jettonWallet0?: InputMaybe<Scalars['String']['input']>;
  /** Pool Jetton 1 wallet */
  jettonWallet1?: InputMaybe<Scalars['String']['input']>;
  /** Pool last check time for being initialized */
  lastCheckTime?: InputMaybe<Scalars['Date']['input']>;
};

export type DexDataFieldsFragment = { __typename?: 'DexData', time: any, poolCount: number, txCount: number, tonPriceUsd: number, totalFeesTon: number, totalFeesUsd: number, totalValueLockedTon: number, totalValueLockedUsd: number, totalVolumeTon: number, totalVolumeUsd: number };

export type DexDataQueryVariables = Exact<{
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  groupBy: GroupBy;
}>;


export type DexDataQuery = { __typename?: 'Query', dexData?: Array<{ __typename?: 'DexData', time: any, poolCount: number, txCount: number, tonPriceUsd: number, totalFeesTon: number, totalFeesUsd: number, totalValueLockedTon: number, totalValueLockedUsd: number, totalVolumeTon: number, totalVolumeUsd: number } | null> | null };

export type DistributorClaimsQueryVariables = Exact<{
  toWallet: Scalars['String']['input'];
}>;


export type DistributorClaimsQuery = { __typename?: 'Query', distributorClaims?: Array<{ __typename?: 'DistributorClaim', index: number, positionId: string, toWallet: string, farmingId: string, jettonAmount: string } | null> | null };

export type JettonFieldsFragment = { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string, derivedTon: number, derivedUsd: number, feesUsd: number, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number };

export type JettonDataFieldsFragment = { __typename?: 'JettonData', derivedTon: number, derivedUsd: number, feesUsd: number, jettonInfo: string, time: any, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number };

export type JettonsQueryVariables = Exact<{
  where?: InputMaybe<JettonWhere>;
}>;


export type JettonsQuery = { __typename?: 'Query', jettons?: Array<{ __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string, derivedTon: number, derivedUsd: number, feesUsd: number, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number } | null> | null };

export type AllJettonsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllJettonsQuery = { __typename?: 'Query', jettons?: Array<{ __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string, derivedTon: number, derivedUsd: number, feesUsd: number, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number } | null> | null };

export type GetJettonDataQueryVariables = Exact<{
  jettonDataId: Scalars['String']['input'];
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  groupBy: GroupBy;
}>;


export type GetJettonDataQuery = { __typename?: 'Query', jettonData?: Array<{ __typename?: 'JettonData', derivedTon: number, derivedUsd: number, feesUsd: number, jettonInfo: string, time: any, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number } | null> | null };

export type PoolFieldsFragment = { __typename?: 'Pool', address: string, name: string, positionsCount: number, creationUnix: number, adminAddress: string, lastUpdateTime: any, isInitialized: boolean, poolInfo: string, fee: number, liquidity: string, tick: number, tickSpacing: number, priceSqrt: string, feeGrowthGlobal0X128: string, feeGrowthGlobal1X128: string, jetton0Price: number, jetton1Price: number, volumeJetton0: number, volumeJetton1: number, volumeUsd: number, volume24HUsd: number, volume48HUsd: number, feesUsd: number, fees24HUsd: number, fees48HUsd: number, txCount: number, collectedFeesJetton0: number, collectedFeesJetton1: number, collectedFeesUsd: number, totalValueLockedJetton0: number, totalValueLockedJetton1: number, totalValueLockedUsd: number, totalValueLockedTon: number, apr?: number | null, jetton0: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string } };

export type PoolDataFieldsFragment = { __typename?: 'PoolData', unix: any, poolInfo: string, fee: number, liquidity: string, tick: number, tickSpacing: number, priceSqrt: string, feeGrowthGlobal0X128: string, feeGrowthGlobal1X128: string, jetton0Price: number, jetton1Price: number, volumeJetton0: number, volumeJetton1: number, volumeUsd: number, feesUsd: number, txCount: number, collectedFeesJetton0: number, collectedFeesJetton1: number, collectedFeesUsd: number, totalValueLockedJetton0: number, totalValueLockedJetton1: number, totalValueLockedUsd: number, totalValueLockedTon: number, apr: number };

export type PoolQueryVariables = Exact<{
  poolAddress: Scalars['String']['input'];
}>;


export type PoolQuery = { __typename?: 'Query', pools?: Array<{ __typename?: 'Pool', address: string, name: string, positionsCount: number, creationUnix: number, adminAddress: string, lastUpdateTime: any, isInitialized: boolean, poolInfo: string, fee: number, liquidity: string, tick: number, tickSpacing: number, priceSqrt: string, feeGrowthGlobal0X128: string, feeGrowthGlobal1X128: string, jetton0Price: number, jetton1Price: number, volumeJetton0: number, volumeJetton1: number, volumeUsd: number, volume24HUsd: number, volume48HUsd: number, feesUsd: number, fees24HUsd: number, fees48HUsd: number, txCount: number, collectedFeesJetton0: number, collectedFeesJetton1: number, collectedFeesUsd: number, totalValueLockedJetton0: number, totalValueLockedJetton1: number, totalValueLockedUsd: number, totalValueLockedTon: number, apr?: number | null, jetton0: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string } } | null> | null };

export type PoolsByJettonQueryVariables = Exact<{
  jettonAddress: Scalars['String']['input'];
}>;


export type PoolsByJettonQuery = { __typename?: 'Query', pools?: Array<{ __typename?: 'Pool', address: string, name: string, positionsCount: number, creationUnix: number, adminAddress: string, lastUpdateTime: any, isInitialized: boolean, poolInfo: string, fee: number, liquidity: string, tick: number, tickSpacing: number, priceSqrt: string, feeGrowthGlobal0X128: string, feeGrowthGlobal1X128: string, jetton0Price: number, jetton1Price: number, volumeJetton0: number, volumeJetton1: number, volumeUsd: number, volume24HUsd: number, volume48HUsd: number, feesUsd: number, fees24HUsd: number, fees48HUsd: number, txCount: number, collectedFeesJetton0: number, collectedFeesJetton1: number, collectedFeesUsd: number, totalValueLockedJetton0: number, totalValueLockedJetton1: number, totalValueLockedUsd: number, totalValueLockedTon: number, apr?: number | null, jetton0: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string } } | null> | null };

export type AllPoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPoolsQuery = { __typename?: 'Query', pools?: Array<{ __typename?: 'Pool', address: string, name: string, positionsCount: number, creationUnix: number, adminAddress: string, lastUpdateTime: any, isInitialized: boolean, poolInfo: string, fee: number, liquidity: string, tick: number, tickSpacing: number, priceSqrt: string, feeGrowthGlobal0X128: string, feeGrowthGlobal1X128: string, jetton0Price: number, jetton1Price: number, volumeJetton0: number, volumeJetton1: number, volumeUsd: number, volume24HUsd: number, volume48HUsd: number, feesUsd: number, fees24HUsd: number, fees48HUsd: number, txCount: number, collectedFeesJetton0: number, collectedFeesJetton1: number, collectedFeesUsd: number, totalValueLockedJetton0: number, totalValueLockedJetton1: number, totalValueLockedUsd: number, totalValueLockedTon: number, apr?: number | null, jetton0: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string } } | null> | null };

export type GetPoolDataQueryVariables = Exact<{
  poolDataId: Scalars['String']['input'];
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
  groupBy: GroupBy;
}>;


export type GetPoolDataQuery = { __typename?: 'Query', poolData?: Array<{ __typename?: 'PoolData', unix: any, poolInfo: string, fee: number, liquidity: string, tick: number, tickSpacing: number, priceSqrt: string, feeGrowthGlobal0X128: string, feeGrowthGlobal1X128: string, jetton0Price: number, jetton1Price: number, volumeJetton0: number, volumeJetton1: number, volumeUsd: number, feesUsd: number, txCount: number, collectedFeesJetton0: number, collectedFeesJetton1: number, collectedFeesUsd: number, totalValueLockedJetton0: number, totalValueLockedJetton1: number, totalValueLockedUsd: number, totalValueLockedTon: number, apr: number } | null> | null };

export type PositionFieldsFragment = { __typename?: 'Position', id: string, owner: string, pool: string, tickLower: number, tickUpper: number, liquidity: string, nftAddress: string, nftImage: string, feeGrowthInside0LastX128: string, feeGrowthInside1LastX128: string, migratedFrom?: string | null, depositedJetton0: string, depositedJetton1: string, withdrawnJetton0: string, withdrawnJetton1: string, jetton0: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string, derivedTon: number, derivedUsd: number, feesUsd: number, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string, derivedTon: number, derivedUsd: number, feesUsd: number, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number } };

export type AllPositionsQueryVariables = Exact<{
  owner?: InputMaybe<Scalars['String']['input']>;
  pool?: InputMaybe<Scalars['String']['input']>;
  migratedFrom?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type AllPositionsQuery = { __typename?: 'Query', positions?: Array<{ __typename?: 'Position', id: string, amount0: string, amount1: string, owner: string, pool: string, tickLower: number, tickUpper: number, liquidity: string, nftAddress: string, nftImage: string, feeGrowthInside0LastX128: string, feeGrowthInside1LastX128: string, migratedFrom?: string | null, depositedJetton0: string, depositedJetton1: string, creationTime: any, collectedFeesJetton0: string, collectedFeesJetton1: string, withdrawnJetton0: string, withdrawnJetton1: string, jetton0: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string, derivedTon: number, derivedUsd: number, feesUsd: number, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, name: string, decimals: number, image: string, description: string, derivedTon: number, derivedUsd: number, feesUsd: number, totalSupply: number, totalValueLocked: number, totalValueLockedUsd: number, txCount: number, volume: number, volumeUsd: number } } | null> | null };

export type GetMintsQueryVariables = Exact<{
  where?: InputMaybe<MintWhere>;
  filter?: InputMaybe<Filter>;
}>;


export type GetMintsQuery = { __typename?: 'Query', mints?: Array<{ __typename?: 'Mint', hash: string, time: any, feeGrowthInside0X128: string, feeGrowthInside1X128: string, amount0: string, amount1: string, liquidity: string, tickLower: number, tickUpper: number, amountUsd: string, wallet: string, pool: { __typename?: 'Pool', address: string, jetton0: { __typename?: 'Jetton', address: string, symbol: string, decimals: number }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, decimals: number } } } | null> | null };

export type GetSwapsQueryVariables = Exact<{
  where?: InputMaybe<SwapWhere>;
  filter?: InputMaybe<Filter>;
}>;


export type GetSwapsQuery = { __typename?: 'Query', swaps?: Array<{ __typename?: 'Swap', toRefund1: string, toRefund0: string, to: string, time: any, sqrtPriceLimitX96: string, hash: string, amount: number, wallet: string, pool: { __typename?: 'Pool', address: string, jetton0: { __typename?: 'Jetton', address: string, symbol: string, decimals: number, derivedUsd: number }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, decimals: number, derivedUsd: number } } } | null> | null };

export type GetBurnsQueryVariables = Exact<{
  where?: InputMaybe<BurnWhere>;
  filter?: InputMaybe<Filter>;
}>;


export type GetBurnsQuery = { __typename?: 'Query', burns?: Array<{ __typename?: 'Burn', time: any, tickUpper: number, tickLower: number, positionId: number, liquidity2Burn: string, liquidity: string, hash: string, feeGrowthInside1LastX128: string, feeGrowthInside0LastX128: string, amount1: string, amount0: string, wallet: string, pool: { __typename?: 'Pool', address: string, jetton0: { __typename?: 'Jetton', address: string, symbol: string, decimals: number }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, decimals: number } } } | null> | null };

export type GetCollectsQueryVariables = Exact<{
  where?: InputMaybe<CollectWhere>;
  filter?: InputMaybe<Filter>;
}>;


export type GetCollectsQuery = { __typename?: 'Query', collects?: Array<{ __typename?: 'Collect', time: any, positionId: number, hash: string, feeGrowthInside1LastX128: string, feeGrowthInside0LastX128: string, amount1: string, amount0: string, wallet: string, pool: { __typename?: 'Pool', address: string, jetton0: { __typename?: 'Jetton', address: string, symbol: string, decimals: number }, jetton1: { __typename?: 'Jetton', address: string, symbol: string, decimals: number } } } | null> | null };
