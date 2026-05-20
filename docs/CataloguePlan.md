
# CataloguePlan

A plan (size tier) available for a product

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`cpu` | number
`ram` | number
`disk` | number
`bandwidth` | number
`backups` | number
`snapshots` | number
`pricing` | any

## Example

```typescript
import type { CataloguePlan } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "cpu": null,
  "ram": null,
  "disk": null,
  "bandwidth": null,
  "backups": null,
  "snapshots": null,
  "pricing": null,
} satisfies CataloguePlan

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CataloguePlan
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


