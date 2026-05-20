
# CreatePowerTaskRequestContent


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`powerTaskAction` | [PowerTaskAction](PowerTaskAction.md)
`startDate` | string
`description` | string
`startTime` | string
`endDate` | string
`endTime` | string
`jobType` | [PowerTaskJobType](PowerTaskJobType.md)
`jobTime` | string
`jobHour` | number
`jobMinutes` | number
`days` | [Array&lt;DayOfWeek&gt;](DayOfWeek.md)

## Example

```typescript
import type { CreatePowerTaskRequestContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
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
} satisfies CreatePowerTaskRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePowerTaskRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


