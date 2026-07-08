
# SnapshotJobMutationResponseData

Response data for snapshot job create operation

## Properties

Name | Type
------------ | -------------
`message` | string
`job` | [SnapshotJob](SnapshotJob.md)
`limits` | [SnapshotJobLimits](SnapshotJobLimits.md)

## Example

```typescript
import type { SnapshotJobMutationResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "job": null,
  "limits": null,
} satisfies SnapshotJobMutationResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SnapshotJobMutationResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


