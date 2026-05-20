
# PaymentError

Error detail returned when payment fails

## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { PaymentError } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "message": null,
} satisfies PaymentError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


