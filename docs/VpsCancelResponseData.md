
# VpsCancelResponseData

Response data for VPS cancellation operation

## Properties

Name | Type
------------ | -------------
`message` | string
`serviceId` | number
`cancellationType` | string
`status` | string

## Example

```typescript
import type { VpsCancelResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "serviceId": null,
  "cancellationType": null,
  "status": null,
} satisfies VpsCancelResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsCancelResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


