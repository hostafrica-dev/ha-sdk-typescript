
# SelcomMetadata

Selcom alt-gateway payment details included on an invoice when configured

## Properties

Name | Type
------------ | -------------
`amount` | string
`pesaAccount` | string
`mobileReference` | string
`ussdCode` | string
`instructions` | string

## Example

```typescript
import type { SelcomMetadata } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "pesaAccount": null,
  "mobileReference": null,
  "ussdCode": null,
  "instructions": null,
} satisfies SelcomMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SelcomMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


