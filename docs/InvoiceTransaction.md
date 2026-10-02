
# InvoiceTransaction

A payment or refund transaction recorded against an invoice

## Properties

Name | Type
------------ | -------------
`id` | number
`gateway` | string
`date` | string
`description` | string
`amountIn` | string
`fees` | string
`amountOut` | string
`transId` | string

## Example

```typescript
import type { InvoiceTransaction } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "gateway": null,
  "date": null,
  "description": null,
  "amountIn": null,
  "fees": null,
  "amountOut": null,
  "transId": null,
} satisfies InvoiceTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


