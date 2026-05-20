
# VpsServiceInfo

VPS service information matching upstream API format

## Properties

Name | Type
------------ | -------------
`id` | number
`product` | string
`hostname` | string
`status` | string
`ips` | Array&lt;string&gt;
`createdAt` | string

## Example

```typescript
import type { VpsServiceInfo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "product": null,
  "hostname": null,
  "status": null,
  "ips": null,
  "createdAt": null,
} satisfies VpsServiceInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsServiceInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


