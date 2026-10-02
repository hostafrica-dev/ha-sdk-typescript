
# InvoiceItem

A single invoice line item

## Properties

Name | Type
------------ | -------------
`id` | number
`type` | string
`description` | string
`amount` | string
`taxed` | number

## Example

```typescript
import type { InvoiceItem } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "description": null,
  "amount": null,
  "taxed": null,
} satisfies InvoiceItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


