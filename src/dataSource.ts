import { DataValue, DataValueMap } from './data';

import { HttpMethod } from '@hyperproof/integration-sdk';

export type Predicate = { leftProperty: string; rightProperty: string }[];

export type Query = { [param: string]: string };
export type Transform = { [key: string]: string | string[] };
export type FilterClause = {
  property: string;
  value: DataValue;
};
export type SortClause = {
  property: string;
  direction: 'ascending' | 'descending';
};

export interface IJoin {
  alias: string;
  dataSet: string;
  dataSetParams?: DataValueMap;
  on: Predicate;
}

export interface IDataSetLookup {
  alias: string;
  dataSet: string;
  dataSetParams?: DataValueMap;
}

export enum PagingType {
  NextToken = 'nextToken',
  OffsetAndLimit = 'offsetAndLimit',
  PageBased = 'pageBased'
}

export enum PageUntilCondition {
  NoDataLeft = 'noDataLeft',
  NoNextToken = 'noNextToken',
  ReachTotalCount = 'reachTotalCount'
}

/**
 * Defines level to which pages of array data are aggregated.
 * Defaults to job level.
 */
export enum PagingLevel {
  Connector = 'connector',
  Job = 'job'
}

export type PageBasedRequest = {
  pageParameter: string;
  pageStartingValue: number;
  limitParameter: string;
  limitValue: number;
};

export type OffsetAndLimitRequest = {
  offsetParameter: string;
  offsetStartingValue: number;
  limitParameter: string;
  limitValue: number;
};

export type NextTokenRequest = {
  limitParameter: string;
  limitValue: number;
  tokenParameter?: string;
};

export type PagingScheme =
  | INextTokenScheme
  | IPageBasedScheme
  | IOffsetAndLimitScheme;

export interface INextTokenScheme {
  type: PagingType.NextToken;
  request: NextTokenRequest;
  response: {
    nextToken: string;
  };
  pageUntil: PageUntilCondition.NoNextToken;
  tokenType: 'token' | 'url';
  level?: PagingLevel;
}

export interface IPageBasedScheme {
  type: PagingType.PageBased;
  request: PageBasedRequest;
  response?: {
    totalCount?: string;
  };
  pageUntil: PageUntilCondition.NoDataLeft | PageUntilCondition.ReachTotalCount;
  level?: PagingLevel;
}

export interface IOffsetAndLimitScheme {
  type: PagingType.OffsetAndLimit;
  request: OffsetAndLimitRequest;
  response?: {
    totalCount?: string;
  };
  pageUntil: PageUntilCondition.NoDataLeft | PageUntilCondition.ReachTotalCount;
  level?: PagingLevel;
}

/**
 * Data set information stored in the client configuration file.
 */
export interface IDataSet {
  description: string;
  documentation?: string;
  url: string;
  method?: HttpMethod;
  pagingScheme?: PagingScheme;
  body?: object | string;
  property?: string;
  query?: Query;
  joins?: IJoin[];
  lookups?: IDataSetLookup[];
  filter?: FilterClause[];
  transform?: Transform;
  sort?: SortClause[];
  result: 'array' | 'object' | 'nonProcessed';
}

/**
 * Maps a value to a message that can be rendered in a generated proof.
 */
export type ValueLookup = { [value: string]: string };

/**
 * Configuration information stored in a JSON file that is used as
 * the input to a RestDataSourceBase instance.
 */
export interface IRestDataSourceConfig<TDataSet extends IDataSet = IDataSet> {
  baseUrl?: string;
  dataSets: {
    [name: string]: TDataSet;
  };
  valueLookups?: {
    [name: string]: ValueLookup;
  };

  /**
   * @deprecated This property has been deprecated in favor of `valueLookups`
   */
  messages?: {
    [name: string]: ValueLookup;
  };
}
