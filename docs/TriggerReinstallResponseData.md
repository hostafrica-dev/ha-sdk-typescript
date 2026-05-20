
# TriggerReinstallResponseData

Response data for trigger reinstall operation

## Properties

Name | Type
------------ | -------------
`message` | string
`taskId` | number

## Example

```typescript
import type { TriggerReinstallResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "taskId": null,
} satisfies TriggerReinstallResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TriggerReinstallResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


