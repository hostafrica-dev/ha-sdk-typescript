
# OsImage

Storage/OS image information

## Properties

Name | Type
------------ | -------------
`storage` | string
`enabled` | number
`shared` | number
`usedFraction` | number
`type` | string
`content` | string
`total` | number
`active` | number
`used` | number
`avail` | number

## Example

```typescript
import type { OsImage } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "storage": null,
  "enabled": null,
  "shared": null,
  "usedFraction": null,
  "type": null,
  "content": null,
  "total": null,
  "active": null,
  "used": null,
  "avail": null,
} satisfies OsImage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OsImage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


