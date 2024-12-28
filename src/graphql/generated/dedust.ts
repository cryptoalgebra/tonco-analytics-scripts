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
};

export type Asset = {
  __typename?: 'Asset';
  address?: Maybe<Scalars['ID']['output']>;
  aliased: Scalars['Boolean']['output'];
  decimals: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
  source?: Maybe<AssetSource>;
  symbol: Scalars['String']['output'];
  type: AssetType;
};

export type AssetSource = {
  __typename?: 'AssetSource';
  address: Scalars['String']['output'];
  bridge: Scalars['String']['output'];
  chain: Scalars['String']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

export enum AssetType {
  Jetton = 'jetton',
  Native = 'native'
}

export type Boost = {
  __typename?: 'Boost';
  asset: Scalars['String']['output'];
  budget: Scalars['String']['output'];
  endAt: Scalars['String']['output'];
  liquidityPool: Scalars['String']['output'];
  rewardPerDay: Scalars['String']['output'];
  startAt: Scalars['String']['output'];
};

export type Pool = {
  __typename?: 'Pool';
  address: Scalars['ID']['output'];
  assets: Array<Scalars['String']['output']>;
  fees: Array<Scalars['String']['output']>;
  reserves: Array<Scalars['String']['output']>;
  totalSupply: Scalars['String']['output'];
  tradeFee: Scalars['String']['output'];
  type: PoolType;
  volume: Array<Scalars['String']['output']>;
};

export type PoolAssetsQueryOperatorInput = {
  in?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum PoolType {
  Stable = 'stable',
  Volatile = 'volatile'
}

export type PoolsFiltersInput = {
  addresses?: InputMaybe<Array<Scalars['ID']['input']>>;
  assets?: InputMaybe<PoolAssetsQueryOperatorInput>;
};

export type Price = {
  __typename?: 'Price';
  address: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type PriceFilterInput = {
  assets: Array<PriceInput>;
};

export type PriceInput = {
  address: Scalars['ID']['input'];
  decimals: Scalars['Int']['input'];
};

export type Promo = {
  __typename?: 'Promo';
  address: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  boosts: Array<Boost>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  price?: Maybe<Price>;
  prices: Array<Price>;
  promotions: Array<Promo>;
};


export type QueryAssetArgs = {
  address: Scalars['ID']['input'];
};


export type QueryPoolArgs = {
  address: Scalars['ID']['input'];
};


export type QueryPoolsArgs = {
  filter?: InputMaybe<PoolsFiltersInput>;
};


export type QueryPriceArgs = {
  address: Scalars['ID']['input'];
  decimals: Scalars['Int']['input'];
};


export type QueryPricesArgs = {
  filter: PriceFilterInput;
};

export type DedustPoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type DedustPoolsQuery = { __typename?: 'Query', pools: Array<{ __typename?: 'Pool', address: string, assets: Array<string>, reserves: Array<string>, totalSupply: string, fees: Array<string> }> };
