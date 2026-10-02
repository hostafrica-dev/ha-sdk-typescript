
# InvoiceSummary

Summary of an invoice in the list-invoices response

## Properties

Name | Type
------------ | -------------
`invoiceId` | string
`invoiceNumber` | string
`date` | string
`dueDate` | string
`status` | string
`tax` | string
`tax2` | string
`taxRate` | string
`taxRate2` | string
`total` | string
`subtotal` | string
`grandTotal` | string

## Example

```typescript
import type { InvoiceSummary } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "invoiceId": null,
  "invoiceNumber": null,
  "date": null,
  "dueDate": null,
  "status": null,
  "tax": null,
  "tax2": null,
  "taxRate": null,
  "taxRate2": null,
  "total": null,
  "subtotal": null,
  "grandTotal": null,
} satisfies InvoiceSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


