
# CreateOrderItems

Line items grouped by type in the order response

## Properties

Name | Type
------------ | -------------
`products` | [Array&lt;CreateOrderProductItem&gt;](CreateOrderProductItem.md)
`domains` | [Array&lt;CreateOrderDomainItem&gt;](CreateOrderDomainItem.md)

## Example

```typescript
import type { CreateOrderItems } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "products": null,
  "domains": null,
} satisfies CreateOrderItems

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrderItems
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


