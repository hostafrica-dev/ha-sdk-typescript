
# InvoiceIssuedTo

Recipient / billed-to details on an invoice

## Properties

Name | Type
------------ | -------------
`companyName` | string
`fullName` | string
`address` | string
`cityStateZip` | string
`country` | string
`countryName` | string
`tax` | [InvoiceIssuedToTax](InvoiceIssuedToTax.md)

## Example

```typescript
import type { InvoiceIssuedTo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "companyName": null,
  "fullName": null,
  "address": null,
  "cityStateZip": null,
  "country": null,
  "countryName": null,
  "tax": null,
} satisfies InvoiceIssuedTo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceIssuedTo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


