import { DataValue, DataValueMap } from './data';

/**
 * Enumeration of the types of fields that can be used during the
 * criteria selection process.
 */
export enum HypersyncCriteriaFieldType {
  PairedSelect = 'pairedSelect',
  Select = 'select',
  Text = 'text',
  Search = 'search',
  Radio = 'radio',
  KeyValueSet = 'keyValueSet'
}

/**
 * Criteria values may be simple scalars or may be an array
 * of values in the case of a multi-select field type.
 */
export type HypersyncCriteriaValue = DataValue | DataValue[];

/**
 * Criteria values used by a Hypersync to retrieve data from an external service.
 */
export type HypersyncCriteria = {
  proofType?: string;
  [name: string]: HypersyncCriteriaValue;
};

/**
 * An option that may be chosen in a select control.
 */
export interface ISelectOption {
  value: string | number;
  label: string;
}

/**
 * Data used to create and configure an ICriteriaField.
 */
export interface ICriteriaFieldConfig {
  type: HypersyncCriteriaFieldType;
  property: string;
  label: string;
  isRequired: boolean;
  placeholder?: string;
  defaultDisplayValue?: string;
  dataSet?: string;
  dataSetParams?: DataValueMap;
  valueProperty?: string;
  labelProperty?: string;
  fixedValues?: ISelectOption[];
  defaultCriteriaOrder?: number;
}

/**
 * Configuration information stored in a JSON file that is used as
 * the input to a JsonCriteriaProvider instance.
 */
export interface ICriteriaConfig {
  [name: string]: ICriteriaFieldConfig;
}

/**
 * Reference to a proof criterion and the page on which it should be included.
 */
export interface IProofCriterionRef {
  name: string;
  page: number;
}
