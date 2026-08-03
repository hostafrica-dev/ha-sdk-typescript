
# GetDnsZoneDetailsData


## Properties

Name | Type
------------ | -------------
`message` | string
`domainId` | string
`zoneId` | string
`zoneExists` | boolean
`managementAvailable` | boolean
`domainNameservers` | Array&lt;string&gt;
`nsChanging` | string
`packageSettings` | any
`records` | [Array&lt;DnsRecordInfo&gt;](DnsRecordInfo.md)

## Example

```typescript
import type { GetDnsZoneDetailsData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "domainId": null,
  "zoneId": null,
  "zoneExists": null,
  "managementAvailable": null,
  "domainNameservers": null,
  "nsChanging": null,
  "packageSettings": null,
  "records": null,
} satisfies GetDnsZoneDetailsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDnsZoneDetailsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


