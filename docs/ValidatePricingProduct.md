
# ValidatePricingProduct

A single product line item in a validate pricing request

## Properties

Name | Type
------------ | -------------
`pid` | number
`billingCycle` | [BillingCycle](BillingCycle.md)
`planId` | number
`hostname` | string
`configOptions` | any

## Example

```typescript
import type { ValidatePricingProduct } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "pid": null,
  "billingCycle": null,
  "planId": null,
  "hostname": null,
  "configOptions": null,
} satisfies ValidatePricingProduct

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingProduct
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


