
# Notification

Individual notification item

## Properties

Name | Type
------------ | -------------
`id` | number
`hostingId` | number
`name` | string
`conditionKey` | string
`threshold` | number
`period` | number
`timeframe` | number
`enabled` | boolean
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { Notification } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "hostingId": null,
  "name": null,
  "conditionKey": null,
  "threshold": null,
  "period": null,
  "timeframe": null,
  "enabled": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Notification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Notification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


