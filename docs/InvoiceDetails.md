
# InvoiceDetails

Full invoice details

## Properties

Name | Type
------------ | -------------
`invoiceId` | string
`invoiceNumber` | string
`issuedTo` | [InvoiceIssuedTo](InvoiceIssuedTo.md)
`date` | string
`dueDate` | string
`datePaid` | string
`subtotal` | string
`credit` | string
`tax` | string
`tax2` | string
`total` | string
`taxRate` | string
`taxRate2` | string
`status` | string
`paymentMethod` | string
`totalDue` | string
`notes` | string
`items` | [Array&lt;InvoiceItem&gt;](InvoiceItem.md)
`transactions` | [Array&lt;InvoiceTransaction&gt;](InvoiceTransaction.md)

## Example

```typescript
import type { InvoiceDetails } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "invoiceId": null,
  "invoiceNumber": null,
  "issuedTo": null,
  "date": null,
  "dueDate": null,
  "datePaid": null,
  "subtotal": null,
  "credit": null,
  "tax": null,
  "tax2": null,
  "total": null,
  "taxRate": null,
  "taxRate2": null,
  "status": null,
  "paymentMethod": null,
  "totalDue": null,
  "notes": null,
  "items": null,
  "transactions": null,
} satisfies InvoiceDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


