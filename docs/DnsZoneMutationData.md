
# DnsZoneMutationData

Result of create-dns-zone or delete-dns-zone

## Properties

Name | Type
------------ | -------------
`message` | string
`zoneId` | string
`domainId` | string
`domainName` | string
`backend` | [DnsBackend](DnsBackend.md)

## Example

```typescript
import type { DnsZoneMutationData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "zoneId": null,
  "domainId": null,
  "domainName": null,
  "backend": null,
} satisfies DnsZoneMutationData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DnsZoneMutationData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


