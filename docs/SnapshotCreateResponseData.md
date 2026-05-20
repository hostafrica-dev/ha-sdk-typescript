
# SnapshotCreateResponseData

Response data for snapshot creation operation

## Properties

Name | Type
------------ | -------------
`message` | string
`taskId` | number

## Example

```typescript
import type { SnapshotCreateResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "taskId": null,
} satisfies SnapshotCreateResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SnapshotCreateResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


