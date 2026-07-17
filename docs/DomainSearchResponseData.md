
# DomainSearchResponseData

Response data for domain availability and suggestion operations

## Properties

Name | Type
------------ | -------------
`domains` | [Array&lt;DomainAvailabilityResult&gt;](DomainAvailabilityResult.md)
`suggestions` | Array&lt;string&gt;
`currency` | number
`currencyCode` | string
`currencyNote` | string
`warnings` | Array&lt;string&gt;

## Example

```typescript
import type { DomainSearchResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domains": null,
  "suggestions": null,
  "currency": null,
  "currencyCode": null,
  "currencyNote": null,
  "warnings": null,
} satisfies DomainSearchResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainSearchResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


