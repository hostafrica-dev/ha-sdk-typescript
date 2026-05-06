
# VpsBandwidthInfo

Bandwidth usage information

## Properties

Name | Type
------------ | -------------
`usageMb` | number
`limitMb` | number
`unlimited` | boolean
`percent` | number

## Example

```typescript
import type { VpsBandwidthInfo } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "usageMb": null,
  "limitMb": null,
  "unlimited": null,
  "percent": null,
} satisfies VpsBandwidthInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsBandwidthInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


