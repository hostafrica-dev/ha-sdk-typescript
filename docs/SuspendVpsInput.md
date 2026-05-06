
# SuspendVpsInput


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`suspendReason` | string

## Example

```typescript
import type { SuspendVpsInput } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "suspendReason": null,
} satisfies SuspendVpsInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuspendVpsInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


