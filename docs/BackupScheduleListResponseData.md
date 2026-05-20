
# BackupScheduleListResponseData

Response data for backup schedule list operation

## Properties

Name | Type
------------ | -------------
`message` | string
`schedules` | [Array&lt;BackupSchedule&gt;](BackupSchedule.md)

## Example

```typescript
import type { BackupScheduleListResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "schedules": null,
} satisfies BackupScheduleListResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackupScheduleListResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


