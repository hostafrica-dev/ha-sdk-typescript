
# VpsDiskInfo

Disk usage information

## Properties

Name | Type
------------ | -------------
`usageBytes` | number
`totalBytes` | number
`percent` | number
`usageHuman` | string
`totalHuman` | string

## Example

```typescript
import type { VpsDiskInfo } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "usageBytes": null,
  "totalBytes": null,
  "percent": null,
  "usageHuman": null,
  "totalHuman": null,
} satisfies VpsDiskInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsDiskInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


