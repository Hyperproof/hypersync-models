import { IProofCriterionRef } from './criteria';
import { DataValueMap } from './data';

export enum HypersyncDataFormat {
  STACKED = 'stacked',
  TABULAR = 'tabular',
  CUSTOM = 'custom'
}

export enum HypersyncPeriod {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly'
}

export enum HypersyncPageOrientation {
  PORTRAIT = 'Portrait',
  LANDSCAPE = 'Landscape'
}

export enum HypersyncFieldType {
  TEXT = 'text',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  DATE = 'date'
}

export enum HypersyncFieldFormat {
  Percent = 'percent'
}

/**
 * Interface for an object that represents a proof type that can be
 * selected by the user.
 */
export interface IProofType {
  proofType: string;
  label: string;
  criteria: DataValueMap;
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
  noResultsMessage?: string;
  lookups?: IProofSpecLookup[];
  fields: IHypersyncField[];
  webPageUrl: string;
}

export interface IProofSpecOverride {
  condition: {
    value: string;
    criteria: string;
  };
  proofSpec: IProofSpec;
}

export interface IHypersyncDefinition {
  description: string;
  criteria: IProofCriterionRef[];
  proofSpec: IProofSpec;
  overrides: IProofSpecOverride[];
}
