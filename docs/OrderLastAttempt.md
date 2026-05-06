
# OrderLastAttempt

Details of the most recent payment attempt for an order

## Properties

Name | Type
------------ | -------------
`at` | string
`status` | string
`code` | string
`message` | string

## Example

```typescript
import type { OrderLastAttempt } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "at": null,
  "status": null,
  "code": null,
  "message": null,
} satisfies OrderLastAttempt

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrderLastAttempt
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


