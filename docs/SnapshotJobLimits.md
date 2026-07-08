
# SnapshotJobLimits

Limits and quota information for snapshot jobs

## Properties

Name | Type
------------ | -------------
`maxJobs` | number
`jobCount` | number
`canAddMore` | boolean

## Example

```typescript
import type { SnapshotJobLimits } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "maxJobs": null,
  "jobCount": null,
  "canAddMore": null,
} satisfies SnapshotJobLimits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SnapshotJobLimits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


