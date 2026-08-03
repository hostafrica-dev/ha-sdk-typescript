
# DomainAvailableFeatures

Feature flags and priced addons available for a domain

## Properties

Name | Type
------------ | -------------
`eppcode` | boolean
`dnssec` | boolean
`privateNameservers` | boolean
`redirector` | boolean
`dnsmanagement` | [DomainAddonFeature](DomainAddonFeature.md)
`emailforwarding` | [DomainAddonFeature](DomainAddonFeature.md)
`idprotection` | [DomainAddonFeature](DomainAddonFeature.md)

## Example

```typescript
import type { DomainAvailableFeatures } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "eppcode": null,
  "dnssec": null,
  "privateNameservers": null,
  "redirector": null,
  "dnsmanagement": null,
  "emailforwarding": null,
  "idprotection": null,
} satisfies DomainAvailableFeatures

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainAvailableFeatures
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


