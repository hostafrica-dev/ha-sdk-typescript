
# GetInvoiceDetailsResponseData

Top-level data payload for the GetInvoiceDetails response

## Properties

Name | Type
------------ | -------------
`invoice` | [InvoiceDetails](InvoiceDetails.md)
`selcomMetadata` | [SelcomMetadata](SelcomMetadata.md)

## Example

```typescript
import type { GetInvoiceDetailsResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "invoice": null,
  "selcomMetadata": null,
} satisfies GetInvoiceDetailsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetInvoiceDetailsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


