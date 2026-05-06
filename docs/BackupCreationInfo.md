
# BackupCreationInfo

Information about an ongoing backup creation process

## Properties

Name | Type
------------ | -------------
`id` | number
`status` | string
`message` | string
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { BackupCreationInfo } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "message": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies BackupCreationInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackupCreationInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


