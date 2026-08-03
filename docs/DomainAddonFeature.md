
# DomainAddonFeature

Priced addon/feature block returned under available_features

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`price` | number
`title` | string
`description` | string
`productDesc` | string

## Example

```typescript
import type { DomainAddonFeature } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "price": null,
  "title": null,
  "description": null,
  "productDesc": null,
} satisfies DomainAddonFeature

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainAddonFeature
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


