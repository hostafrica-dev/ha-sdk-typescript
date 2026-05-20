
# CatalogueConfigSuboption

A suboption (selectable value) within a config option

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`prices` | any

## Example

```typescript
import type { CatalogueConfigSuboption } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "prices": null,
} satisfies CatalogueConfigSuboption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueConfigSuboption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


