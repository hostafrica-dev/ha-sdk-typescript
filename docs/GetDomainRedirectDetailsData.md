
# GetDomainRedirectDetailsData


## Properties

Name | Type
------------ | -------------
`message` | string
`domainId` | string
`domain` | string
`url` | string
`type` | string
`address` | string
`dns` | [DomainRedirectDnsStatus](DomainRedirectDnsStatus.md)

## Example

```typescript
import type { GetDomainRedirectDetailsData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "domainId": null,
  "domain": null,
  "url": null,
  "type": null,
  "address": null,
  "dns": null,
} satisfies GetDomainRedirectDetailsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDomainRedirectDetailsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


