
# ValidatePricingBreakdown

Full breakdown of a product\'s pricing

## Properties

Name | Type
------------ | -------------
`base` | [ValidatePricingBase](ValidatePricingBase.md)
`_configuration` | [Array&lt;ValidatePricingConfigItem&gt;](ValidatePricingConfigItem.md)
`setupTotal` | string

## Example

```typescript
import type { ValidatePricingBreakdown } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "base": null,
  "_configuration": null,
  "setupTotal": null,
} satisfies ValidatePricingBreakdown

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingBreakdown
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


