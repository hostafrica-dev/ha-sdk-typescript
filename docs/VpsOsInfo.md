
# VpsOsInfo

Operating system information

## Properties

Name | Type
------------ | -------------
`name` | string
`version` | string

## Example

```typescript
import type { VpsOsInfo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "version": null,
} satisfies VpsOsInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsOsInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


