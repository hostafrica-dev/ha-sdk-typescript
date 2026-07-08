
# SnapshotJobListResponseData

Response data for snapshot job list operation

## Properties

Name | Type
------------ | -------------
`message` | string
`jobs` | [Array&lt;SnapshotJob&gt;](SnapshotJob.md)
`limits` | [SnapshotJobLimits](SnapshotJobLimits.md)
`allowedPeriods` | Array&lt;string&gt;

## Example

```typescript
import type { SnapshotJobListResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "jobs": null,
  "limits": null,
  "allowedPeriods": null,
} satisfies SnapshotJobListResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SnapshotJobListResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


