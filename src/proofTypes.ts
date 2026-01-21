import { IProofCriterionRef } from './criteria';
import { DataValueMap } from './data';
import { SortClause } from './dataSource';

export enum HypersyncDataFormat {
  Stacked = 'stacked',
  Tabular = 'tabular',
  Custom = 'custom'
}

export enum HypersyncPeriod {
  Daily = 'daily',
  Weekly = 'weekly',
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  Yearly = 'yearly'
}

export enum HypersyncPageOrientation {
  Portrait = 'portrait',
  Landscape = 'landscape'
}

export enum HypersyncFieldType {
  Text = 'text',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date'
}

export enum HypersyncFieldFormat {
  Percent = 'percent'
}

/**
 * Interface for an object that represents a proof type that can be
 * selected by the user.
 */
export interface IProofType {
  label: string;
  category?: string;
  isJson: boolean;
}

/**
 * Interface for an object that maps a proofType value to an IProofTypeConfig instance.
 */
export interface IProofTypeMap {
  [proofType: string]: IProofType;
}

/**
 * Model for a data lookup object in a proof specification.
 * Lookups retrieve data from a data set (either objects or
 * arrays) and store them in context using the provided name.
 * This named data element can then be referenced in an expression.
 */
export interface IProofSpecLookup {
  name: string;
  dataSet: string;
  dataSetParams?: DataValueMap;
}

/**
 * Base model for a field that is used in a Hypersync.  Information in the model
 * is used to generate both layout information and schema information (used for testing).
 */
export interface IHypersyncField {
  property: string;
  label: string;
  width?: string;
  type?: HypersyncFieldType;
  format?: HypersyncFieldFormat;
}

export enum IteratorSource {
  DataSet = 'dataSet',
  Criteria = 'criteria'
}

export interface BaseIteratorDefinition {
  layer: number;
  iterandKey: string;
  subArraySize?: number;
}

export interface DataSetSourcedIterator extends BaseIteratorDefinition {
  source: IteratorSource.DataSet;
  dataSet: string;
  dataSetParams?: DataValueMap;
}

export interface CriteriaSourcedIterator extends BaseIteratorDefinition {
  source: IteratorSource.Criteria;
  criteriaProperty: string;
  criteriaTransformer: string;
}

export type DataSetIteratorDefinition =
  | DataSetSourcedIterator
  | CriteriaSourcedIterator;

export interface IProofSpec {
  period: HypersyncPeriod;
  useVersioning: boolean;
  suggestedName: string;
  format: HypersyncDataFormat;
  orientation?: HypersyncPageOrientation;
  title: string;
  subtitle: string;
  dataSet: string;
  dataSetParams?: DataValueMap;
  dataSetIterator?: DataSetIteratorDefinition[];
  noResultsMessage?: string;
  lookups?: IProofSpecLookup[];
  fields: IHypersyncField[];
  webPageUrl?: string;
  autoLayout?: boolean;
  sort?: SortClause[];
}

export interface IProofSpecOverride {
  condition: {
    value: string;
    criteria: string;
  };
  proofSpec: Partial<IProofSpec>;
}

export interface IHypersyncDefinition {
  description: string;
  criteria: IProofCriterionRef[];
  proofSpec: IProofSpec;
  overrides: IProofSpecOverride[];
}
