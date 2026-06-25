
# VpsAvailableFeatures

Available features for the VPS

## Properties

Name | Type
------------ | -------------
`powerStart` | boolean
`powerStop` | boolean
`powerReboot` | boolean
`powerShutdown` | boolean
`novncConsole` | boolean
`backups` | boolean
`backupJobs` | boolean
`backupSchedule` | boolean
`firewall` | boolean
`reinstall` | boolean
`changeHostname` | boolean
`changeIsoImage` | boolean
`networkStats` | boolean
`graphs` | boolean

## Example

```typescript
import type { VpsAvailableFeatures } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "powerStart": null,
  "powerStop": null,
  "powerReboot": null,
  "powerShutdown": null,
  "novncConsole": null,
  "backups": null,
  "backupJobs": null,
  "backupSchedule": null,
  "firewall": null,
  "reinstall": null,
  "changeHostname": null,
  "changeIsoImage": null,
  "networkStats": null,
  "graphs": null,
} satisfies VpsAvailableFeatures

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsAvailableFeatures
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


