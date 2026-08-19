
# VpsDetailsResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`vmInfo` | [VpsVmInfo](VpsVmInfo.md)
`cpu` | [VpsCpuInfo](VpsCpuInfo.md)
`memory` | [VpsMemoryInfo](VpsMemoryInfo.md)
`disk` | [VpsDiskInfo](VpsDiskInfo.md)
`networkRate` | [VpsNetworkRate](VpsNetworkRate.md)
`ipAddresses` | [Array&lt;VpsIpAddressDetail&gt;](VpsIpAddressDetail.md)
`credentials` | [VpsCredentials](VpsCredentials.md)
`availableFeatures` | [VpsAvailableFeatures](VpsAvailableFeatures.md)
`osInfo` | [VpsOsInfo](VpsOsInfo.md)

## Example

```typescript
import type { VpsDetailsResponse } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "vmInfo": null,
  "cpu": null,
  "memory": null,
  "disk": null,
  "networkRate": null,
  "ipAddresses": null,
  "credentials": null,
  "availableFeatures": null,
  "osInfo": null,
} satisfies VpsDetailsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsDetailsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


