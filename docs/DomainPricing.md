
# DomainPricing

Registration, renewal and transfer pricing tiers for a domain

## Properties

Name | Type
------------ | -------------
`domainregister` | [Array&lt;DomainPricingEntry&gt;](DomainPricingEntry.md)
`domainrenew` | [Array&lt;DomainPricingEntry&gt;](DomainPricingEntry.md)
`domaintransfer` | [Array&lt;DomainPricingEntry&gt;](DomainPricingEntry.md)

## Example

```typescript
import type { DomainPricing } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainregister": null,
  "domainrenew": null,
  "domaintransfer": null,
} satisfies DomainPricing

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainPricing
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


