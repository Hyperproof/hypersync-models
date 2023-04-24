/**
 * Primitive values supported by Hypersyncs in criteria and data binding.
 * These types may be returned as data from an IDataSource, and they can
 * also be used to filter, sort, and otherwise parameterize the data in a
 * generated Hypersync proof.
 */
export type DataValue = string | number | boolean | BigInt | Date | undefined;

/**
 * Type of data that is returned from an external service.
 */
export type DataObject = {
  [prop: string]: DataValue | DataObject | DataObject[];
};

// Used to map a string value to a criteria value.
export type DataValueMap = { [name: string]: DataValue | DataValue[] };
