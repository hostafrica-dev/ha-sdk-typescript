
# CatalogueConfigOption

A configurable option available for a product (e.g. Backup Quota, OS Template)

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`type` | string
`qtyMin` | number
`qtyMax` | number
`suboptions` | [Array&lt;CatalogueConfigSuboption&gt;](CatalogueConfigSuboption.md)

## Example

```typescript
import type { CatalogueConfigOption } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "type": null,
  "qtyMin": null,
  "qtyMax": null,
  "suboptions": null,
} satisfies CatalogueConfigOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueConfigOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


