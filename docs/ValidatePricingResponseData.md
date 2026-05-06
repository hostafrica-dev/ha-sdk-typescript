
# ValidatePricingResponseData

Top-level data payload for the ValidatePricing response

## Properties

Name | Type
------------ | -------------
`currency` | [ValidatePricingCurrency](ValidatePricingCurrency.md)
`products` | [Array&lt;ValidatePricingProductResult&gt;](ValidatePricingProductResult.md)
`summary` | [ValidatePricingSummary](ValidatePricingSummary.md)
`errors` | Array&lt;string&gt;

## Example

```typescript
import type { ValidatePricingResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "currency": null,
  "products": null,
  "summary": null,
  "errors": null,
} satisfies ValidatePricingResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


