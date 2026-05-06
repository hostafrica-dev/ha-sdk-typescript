
# ValidatePricingProrata

Prorata charge details for a product

## Properties

Name | Type
------------ | -------------
`applied` | boolean
`amount` | number
`date` | string
`invoiceDate` | string
`days` | number

## Example

```typescript
import type { ValidatePricingProrata } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "applied": null,
  "amount": null,
  "date": null,
  "invoiceDate": null,
  "days": null,
} satisfies ValidatePricingProrata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingProrata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


