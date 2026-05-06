
# CreateBackupScheduleRequestContent


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`starttime` | string
`dow` | Array&lt;string&gt;
`compress` | [CompressionType](CompressionType.md)
`mode` | string
`mailto` | boolean

## Example

```typescript
import type { CreateBackupScheduleRequestContent } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "starttime": null,
  "dow": null,
  "compress": null,
  "mode": null,
  "mailto": null,
} satisfies CreateBackupScheduleRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBackupScheduleRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


