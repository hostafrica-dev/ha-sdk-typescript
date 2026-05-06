
# CreateOrderDomainItem

A domain line item returned in the order response

## Properties

Name | Type
------------ | -------------
`lineId` | number
`domainId` | number
`domain` | string
`type` | string
`period` | number
`domainWarranty` | boolean
`autorenew` | boolean
`amount` | number

## Example

```typescript
import type { CreateOrderDomainItem } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "lineId": null,
  "domainId": null,
  "domain": null,
  "type": null,
  "period": null,
  "domainWarranty": null,
  "autorenew": null,
  "amount": null,
} satisfies CreateOrderDomainItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrderDomainItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


