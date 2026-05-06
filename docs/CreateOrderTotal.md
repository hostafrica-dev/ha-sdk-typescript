
# CreateOrderTotal

Total amount breakdown for an order

## Properties

Name | Type
------------ | -------------
`amount` | number
`currency` | string
`prefix` | string

## Example

```typescript
import type { CreateOrderTotal } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "currency": null,
  "prefix": null,
} satisfies CreateOrderTotal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrderTotal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


