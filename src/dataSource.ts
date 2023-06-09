import { DataValueMap } from './data';

export type Predicate = { leftProperty: string; rightProperty: string }[];

export type Query = { [param: string]: string };
export type Transform = { [key: string]: string | string[] };
export type FilterClause = { property: string; value: string };
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

/**
 * Data set information stored in the client configuration file.
 */
export interface IDataSet {
  description: string;
  documentation?: string;
  url: string;
  property?: string;
  query?: Query;
  joins?: IJoin[];
  lookups?: IDataSetLookup[];
  filter?: FilterClause[];
  transform?: Transform;
  sort?: SortClause[];
  result: 'array' | 'object';
}

/**
 * Maps a value to a message that can be rendered in a generated proof.
 */
export type ValueLookup = { [value: string]: string };

/**
 * Configuration information stored in a JSON file that is used as
 * the input to a RestDataSourceBase instance.
 */
export interface IRestDataSourceConfig {
  baseUrl?: string;
  dataSets: {
    [name: string]: IDataSet;
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
