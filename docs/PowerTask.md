
# PowerTask

Individual power task item

## Properties

Name | Type
------------ | -------------
`id` | number
`hostingId` | number
`description` | string
`action` | string
`start` | string
`end` | string
`jobType` | string
`jobTime` | string
`days` | Array&lt;string&gt;
`lastRun` | string

## Example

```typescript
import type { PowerTask } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "hostingId": null,
  "description": null,
  "action": null,
  "start": null,
  "end": null,
  "jobType": null,
  "jobTime": null,
  "days": null,
  "lastRun": null,
} satisfies PowerTask

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PowerTask
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


