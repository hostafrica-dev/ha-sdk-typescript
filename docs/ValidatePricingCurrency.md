
# ValidatePricingCurrency

Currency info in the pricing validation response

## Properties

Name | Type
------------ | -------------
`id` | number
`code` | string
`prefix` | string
`suffix` | string

## Example

```typescript
import type { ValidatePricingCurrency } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "code": null,
  "prefix": null,
  "suffix": null,
} satisfies ValidatePricingCurrency

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingCurrency
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


