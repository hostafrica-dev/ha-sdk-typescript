
# VpsCpuInfo

CPU usage information

## Properties

Name | Type
------------ | -------------
`usageRatio` | number
`percent` | number
`cores` | number

## Example

```typescript
import type { VpsCpuInfo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "usageRatio": null,
  "percent": null,
  "cores": null,
} satisfies VpsCpuInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsCpuInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


