
# CreateOrderProductItem

A product line item returned in the order response

## Properties

Name | Type
------------ | -------------
`lineId` | number
`serviceId` | number
`pid` | number
`name` | string
`billingCycle` | string
`domain` | string
`hostname` | string
`amount` | string

## Example

```typescript
import type { CreateOrderProductItem } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "lineId": null,
  "serviceId": null,
  "pid": null,
  "name": null,
  "billingCycle": null,
  "domain": null,
  "hostname": null,
  "amount": null,
} satisfies CreateOrderProductItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrderProductItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


