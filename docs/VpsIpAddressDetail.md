
# VpsIpAddressDetail

Detailed IP address assignment for a VPS

## Properties

Name | Type
------------ | -------------
`ip` | string
`address` | string
`subnet` | string
`gateway` | string
`mac` | string

## Example

```typescript
import type { VpsIpAddressDetail } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "ip": null,
  "address": null,
  "subnet": null,
  "gateway": null,
  "mac": null,
} satisfies VpsIpAddressDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsIpAddressDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


