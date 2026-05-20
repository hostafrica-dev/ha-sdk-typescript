
# BackupItem

Individual backup item

## Properties

Name | Type
------------ | -------------
`id` | number
`size` | string
`createDate` | string
`format` | string
`_protected` | boolean

## Example

```typescript
import type { BackupItem } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "size": null,
  "createDate": null,
  "format": null,
  "_protected": null,
} satisfies BackupItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackupItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


