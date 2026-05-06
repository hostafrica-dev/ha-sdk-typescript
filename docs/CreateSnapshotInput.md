
# CreateSnapshotInput


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`snapname` | string
`description` | string

## Example

```typescript
import type { CreateSnapshotInput } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "snapname": null,
  "description": null,
} satisfies CreateSnapshotInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSnapshotInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


