
# CatalogueProduct

A product entry within a catalogue group

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`type` | string
`requiresHostname` | boolean
`billingCycles` | Array&lt;string&gt;
`pricing` | any
`usePlans` | boolean
`plans` | [Array&lt;CataloguePlan&gt;](CataloguePlan.md)
`configOptions` | [Array&lt;CatalogueConfigOption&gt;](CatalogueConfigOption.md)
`additionalInformation` | any

## Example

```typescript
import type { CatalogueProduct } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "type": null,
  "requiresHostname": null,
  "billingCycles": null,
  "pricing": null,
  "usePlans": null,
  "plans": null,
  "configOptions": null,
  "additionalInformation": null,
} satisfies CatalogueProduct

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueProduct
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


