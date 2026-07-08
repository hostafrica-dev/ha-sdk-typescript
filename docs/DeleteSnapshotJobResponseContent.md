
# DeleteSnapshotJobResponseContent


## Properties

Name | Type
------------ | -------------
`status` | [OperationStatus](OperationStatus.md)
`data` | [SnapshotJobDeleteResponseData](SnapshotJobDeleteResponseData.md)

## Example

```typescript
import type { DeleteSnapshotJobResponseContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "data": null,
} satisfies DeleteSnapshotJobResponseContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeleteSnapshotJobResponseContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


