# hypersync-models

Models, types and enumerations used by Hypersyncs.

## Release Notes

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
