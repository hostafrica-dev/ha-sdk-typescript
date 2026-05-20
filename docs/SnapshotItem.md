
# SnapshotItem

Individual snapshot item

## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`snaptime` | string
`size` | number
`vmstate` | boolean

## Example

```typescript
import type { SnapshotItem } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "snaptime": null,
  "size": null,
  "vmstate": null,
} satisfies SnapshotItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SnapshotItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


