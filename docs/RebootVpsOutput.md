
# RebootVpsOutput


## Properties

Name | Type
------------ | -------------
`status` | [OperationStatus](OperationStatus.md)
`data` | [VpsSimpleActionResponseData](VpsSimpleActionResponseData.md)

## Example

```typescript
import type { RebootVpsOutput } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "data": null,
} satisfies RebootVpsOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RebootVpsOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


