
# CreateDnsZoneRequestContent


## Properties

Name | Type
------------ | -------------
`domainId` | string
`zoneIp` | string
`domainName` | string
`serviceId` | number
`type` | number
`relid` | number
`templateId` | number

## Example

```typescript
import type { CreateDnsZoneRequestContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "zoneIp": null,
  "domainName": null,
  "serviceId": null,
  "type": null,
  "relid": null,
  "templateId": null,
} satisfies CreateDnsZoneRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateDnsZoneRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


