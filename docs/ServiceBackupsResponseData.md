
# ServiceBackupsResponseData

Response data for service backups operation

## Properties

Name | Type
------------ | -------------
`message` | string
`backups` | [Array&lt;BackupItem&gt;](BackupItem.md)
`quotaTotal` | number
`quotaUsed` | number
`quotaUnit` | string
`availableCompressMethods` | [Array&lt;CompressionMethod&gt;](CompressionMethod.md)
`availableModes` | [Array&lt;BackupMode&gt;](BackupMode.md)
`backupIsCreating` | boolean
`backupCreation` | [BackupCreationInfo](BackupCreationInfo.md)

## Example

```typescript
import type { ServiceBackupsResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "backups": null,
  "quotaTotal": null,
  "quotaUsed": null,
  "quotaUnit": null,
  "availableCompressMethods": null,
  "availableModes": null,
  "backupIsCreating": null,
  "backupCreation": null,
} satisfies ServiceBackupsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ServiceBackupsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


