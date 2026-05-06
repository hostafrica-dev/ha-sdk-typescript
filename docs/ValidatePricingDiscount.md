
# ValidatePricingDiscount

Discount detail applied to a product

## Properties

Name | Type
------------ | -------------
`applied` | boolean
`code` | string
`type` | string
`amount` | string
`recurringAmount` | string
`applyOnce` | boolean

## Example

```typescript
import type { ValidatePricingDiscount } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "applied": null,
  "code": null,
  "type": null,
  "amount": null,
  "recurringAmount": null,
  "applyOnce": null,
} satisfies ValidatePricingDiscount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingDiscount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


