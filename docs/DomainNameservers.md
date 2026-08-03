
# DomainNameservers

Nameserver hostnames applied to a domain

## Properties

Name | Type
------------ | -------------
`ns1` | string
`ns2` | string
`ns3` | string
`ns4` | string
`ns5` | string

## Example

```typescript
import type { DomainNameservers } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "ns1": null,
  "ns2": null,
  "ns3": null,
  "ns4": null,
  "ns5": null,
} satisfies DomainNameservers

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainNameservers
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


