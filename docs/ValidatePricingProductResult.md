
# ValidatePricingProductResult

Per-product pricing detail in the validate pricing response

## Properties

Name | Type
------------ | -------------
`pid` | number
`name` | string
`billingCycle` | string
`planId` | number
`prorata` | [ValidatePricingProrata](ValidatePricingProrata.md)
`recurringPrice` | [ValidatePricingPriceRange](ValidatePricingPriceRange.md)
`discount` | [ValidatePricingDiscount](ValidatePricingDiscount.md)
`lineTotalBeforeDiscount` | number
`lineTotal` | number
`breakdown` | [ValidatePricingBreakdown](ValidatePricingBreakdown.md)

## Example

```typescript
import type { ValidatePricingProductResult } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "pid": null,
  "name": null,
  "billingCycle": null,
  "planId": null,
  "prorata": null,
  "recurringPrice": null,
  "discount": null,
  "lineTotalBeforeDiscount": null,
  "lineTotal": null,
  "breakdown": null,
} satisfies ValidatePricingProductResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingProductResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


