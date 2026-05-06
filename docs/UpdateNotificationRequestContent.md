
# UpdateNotificationRequestContent


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`notificationId` | number
`name` | string
`status` | [NotificationStatus](NotificationStatus.md)
`notificationInterval` | number
`dataTimeframe` | number
`exceedAll` | boolean
`emailAddress` | Array&lt;string&gt;
`cpuUsage` | number
`memoryUsage` | number
`networkTraffic` | number
`diskRead` | number
`diskWrite` | number

## Example

```typescript
import type { UpdateNotificationRequestContent } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "notificationId": null,
  "name": null,
  "status": null,
  "notificationInterval": null,
  "dataTimeframe": null,
  "exceedAll": null,
  "emailAddress": null,
  "cpuUsage": null,
  "memoryUsage": null,
  "networkTraffic": null,
  "diskRead": null,
  "diskWrite": null,
} satisfies UpdateNotificationRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateNotificationRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


