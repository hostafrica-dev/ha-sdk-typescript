
# ValidatePricingConfigItem

A single configuration item in the pricing breakdown

## Properties

Name | Type
------------ | -------------
`optionId` | number
`name` | string
`type` | string
`selected` | any
`selectedName` | string
`planConfig` | [ValidatePricingPlanConfig](ValidatePricingPlanConfig.md)
`pricing` | [ValidatePricingPlanPricing](ValidatePricingPlanPricing.md)
`price` | number
`setup` | number

## Example

```typescript
import type { ValidatePricingConfigItem } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "optionId": null,
  "name": null,
  "type": null,
  "selected": null,
  "selectedName": null,
  "planConfig": null,
  "pricing": null,
  "price": null,
  "setup": null,
} satisfies ValidatePricingConfigItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingConfigItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


