
# VpsVmInfo

VM information

## Properties

Name | Type
------------ | -------------
`status` | string
`uptime` | string
`uptimeSeconds` | number
`hostname` | string
`bootDevices` | string
`vmid` | string
`node` | string
`virtualization` | string

## Example

```typescript
import type { VpsVmInfo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "uptime": null,
  "uptimeSeconds": null,
  "hostname": null,
  "bootDevices": null,
  "vmid": null,
  "node": null,
  "virtualization": null,
} satisfies VpsVmInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsVmInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


