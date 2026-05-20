
# ValidatePricingRequestContent


## Properties

Name | Type
------------ | -------------
`promo` | string
`products` | [Array&lt;ValidatePricingProduct&gt;](ValidatePricingProduct.md)

## Example

```typescript
import type { ValidatePricingRequestContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "promo": null,
  "products": null,
} satisfies ValidatePricingRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


