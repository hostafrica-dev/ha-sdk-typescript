
# UpdatePowerTaskRequestContent


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`taskId` | number
`powerTaskAction` | string
`startDate` | string
`description` | string
`startTime` | string
`endDate` | string
`endTime` | string
`jobType` | string
`jobTime` | string
`jobHour` | number
`jobMinutes` | number
`days` | Array&lt;string&gt;

## Example

```typescript
import type { UpdatePowerTaskRequestContent } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "taskId": null,
  "powerTaskAction": null,
  "startDate": null,
  "description": null,
  "startTime": null,
  "endDate": null,
  "endTime": null,
  "jobType": null,
  "jobTime": null,
  "jobHour": null,
  "jobMinutes": null,
  "days": null,
} satisfies UpdatePowerTaskRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdatePowerTaskRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


