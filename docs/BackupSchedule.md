
# BackupSchedule

Individual backup schedule item

## Properties

Name | Type
------------ | -------------
`id` | string
`starttime` | string
`dow` | string
`compress` | [CompressionType](CompressionType.md)
`mode` | string
`mailto` | string

## Example

```typescript
import type { BackupSchedule } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "starttime": null,
  "dow": null,
  "compress": null,
  "mode": null,
  "mailto": null,
} satisfies BackupSchedule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackupSchedule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


