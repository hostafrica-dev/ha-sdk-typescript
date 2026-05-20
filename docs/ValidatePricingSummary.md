
# ValidatePricingSummary

Order-level summary of totals

## Properties

Name | Type
------------ | -------------
`subtotal` | string
`discountTotal` | string
`totalDue` | string
`recurring` | [ValidatePricingSummaryRecurring](ValidatePricingSummaryRecurring.md)
`prorataTotal` | string
`promoApplied` | string

## Example

```typescript
import type { ValidatePricingSummary } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "subtotal": null,
  "discountTotal": null,
  "totalDue": null,
  "recurring": null,
  "prorataTotal": null,
  "promoApplied": null,
} satisfies ValidatePricingSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


