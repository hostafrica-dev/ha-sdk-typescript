
# BackupCreateResponseData

Response data for backup creation operation

## Properties

Name | Type
------------ | -------------
`message` | string
`taskId` | number
`backupIsCreating` | boolean
`backupCreation` | [BackupCreationInfo](BackupCreationInfo.md)

## Example

```typescript
import type { BackupCreateResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "taskId": null,
  "backupIsCreating": null,
  "backupCreation": null,
} satisfies BackupCreateResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackupCreateResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


