
# RetryPaymentTotal

Total amount breakdown for a retry payment response

## Properties

Name | Type
------------ | -------------
`amount` | string
`currency` | string
`prefix` | string

## Example

```typescript
import type { RetryPaymentTotal } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "currency": null,
  "prefix": null,
} satisfies RetryPaymentTotal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetryPaymentTotal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


