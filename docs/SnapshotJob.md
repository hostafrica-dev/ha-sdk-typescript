
# SnapshotJob

Individual snapshot job item

## Properties

Name | Type
------------ | -------------
`id` | number
`hostingId` | number
`vmId` | number
`name` | string
`description` | string
`vmstate` | boolean
`period` | [SnapshotJobPeriod](SnapshotJobPeriod.md)
`runEvery` | number
`days` | [Array&lt;DayOfWeek&gt;](DayOfWeek.md)
`startTime` | string

## Example

```typescript
import type { SnapshotJob } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "hostingId": null,
  "vmId": null,
  "name": null,
  "description": null,
  "vmstate": null,
  "period": null,
  "runEvery": null,
  "days": null,
  "startTime": null,
} satisfies SnapshotJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SnapshotJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


