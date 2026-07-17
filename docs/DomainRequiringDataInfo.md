
# DomainRequiringDataInfo

Pending domain requiring additional registrar or contact data

## Properties

Name | Type
------------ | -------------
`domainId` | string
`domain` | string
`status` | string
`domainType` | string
`tld` | string
`additionalFields` | [Array&lt;DomainRequiringDataAdditionalField&gt;](DomainRequiringDataAdditionalField.md)

## Example

```typescript
import type { DomainRequiringDataInfo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "domain": null,
  "status": null,
  "domainType": null,
  "tld": null,
  "additionalFields": null,
} satisfies DomainRequiringDataInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainRequiringDataInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


