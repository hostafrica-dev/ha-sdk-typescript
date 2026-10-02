
# ListInvoicesResponseData

Top-level data payload for the ListInvoices response

## Properties

Name | Type
------------ | -------------
`invoices` | [Array&lt;InvoiceSummary&gt;](InvoiceSummary.md)
`totalCount` | number

## Example

```typescript
import type { ListInvoicesResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "invoices": null,
  "totalCount": null,
} satisfies ListInvoicesResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListInvoicesResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


