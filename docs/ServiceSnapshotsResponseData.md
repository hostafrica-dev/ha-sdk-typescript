
# ServiceSnapshotsResponseData

Response data for service snapshots operation

## Properties

Name | Type
------------ | -------------
`message` | string
`snapshots` | [Array&lt;SnapshotItem&gt;](SnapshotItem.md)
`maxSnapshots` | number
`snapshotsCount` | number

## Example

```typescript
import type { ServiceSnapshotsResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "snapshots": null,
  "maxSnapshots": null,
  "snapshotsCount": null,
} satisfies ServiceSnapshotsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ServiceSnapshotsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


