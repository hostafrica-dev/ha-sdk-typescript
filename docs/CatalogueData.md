
# CatalogueData

Top-level data payload for the GetCatalogue response. When product_id is specified, product is populated instead of groups.

## Properties

Name | Type
------------ | -------------
`currency` | [CatalogueCurrency](CatalogueCurrency.md)
`groups` | [Array&lt;CatalogueGroup&gt;](CatalogueGroup.md)
`product` | [CatalogueProduct](CatalogueProduct.md)

## Example

```typescript
import type { CatalogueData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "currency": null,
  "groups": null,
  "product": null,
} satisfies CatalogueData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


