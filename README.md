# hypersync-models

Models, types and enumerations used by Hypersyncs.

## Release Notes

### 7.0.0

- **Breaking:** Removed `autoLayout` from `IProofSpec`. Layout is now applied centrally to every proof by `@hyperproof/hypersync-sdk`, so the per-spec opt-in no longer exists
- Added `IProofTypeCatalogEntry` for the proof type catalog returned by `@hyperproof/hypersync-sdk`
- Added `hidden` to `ISelectOption` for values that are valid but not offered in the UI dropdown
- Added `keepEmptyRows` to `IDataSet` to opt out of the automatic drop-empty-rows pass
- Added `YearToDate` to `HypersyncPeriod`
- Added `apiFamily` to `IProofType`
- Added `sourceDateTimeZone` to `IProofSpec` for date-only sources that would otherwise shift under the user's time zone

### 6.0.0

- **Breaking:** Updated to Node.js 22
- **Breaking:** Moved `CredentialFieldType` enum to `@hyperproof/integration-sdk`
- Added `IteratorSource` enum and iterator definition types for iterative proof generation
- Added `sort` property to `IProofSpec` definition
- Added `savedCriteriaSettings` and `ICriteriaSearchInput` for criteria search functionality
- Added `continueOnError` property to `IDataSetLookup`

### 5.2.0

- Update Criteria and DataSource models

### 5.1.0

- Upgrade TypeScript to version 5.5.4
- Improvements to paging schemes and GraphQL support
- Added support for validation of criteria fields

### 5.0.0

- Add support for schema categories to support User Access Reviews
- Add models for declarative paging.
- Add `autoLayout` property to `IProofSpec` to enable automatic layout of columns
