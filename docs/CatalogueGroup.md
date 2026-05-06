
# CatalogueGroup

A product group in the catalogue

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`products` | [Array&lt;CatalogueProduct&gt;](CatalogueProduct.md)

## Example

```typescript
import type { CatalogueGroup } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "products": null,
} satisfies CatalogueGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


