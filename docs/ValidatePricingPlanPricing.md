
# ValidatePricingPlanPricing

Pricing detail within a plan configuration item

## Properties

Name | Type
------------ | -------------
`price` | string
`setup` | string

## Example

```typescript
import type { ValidatePricingPlanPricing } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "price": null,
  "setup": null,
} satisfies ValidatePricingPlanPricing

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingPlanPricing
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


