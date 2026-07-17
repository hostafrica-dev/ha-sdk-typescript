
# DomainAvailabilityResult

Availability record for a single domain

## Properties

Name | Type
------------ | -------------
`domain` | string
`premium` | boolean
`status` | string
`addons` | [DomainAddons](DomainAddons.md)
`pricing` | [DomainPricing](DomainPricing.md)
`requiresAdditionalInfo` | boolean
`additionalInfo` | any
`group` | string
`registerUrl` | string

## Example

```typescript
import type { DomainAvailabilityResult } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domain": null,
  "premium": null,
  "status": null,
  "addons": null,
  "pricing": null,
  "requiresAdditionalInfo": null,
  "additionalInfo": null,
  "group": null,
  "registerUrl": null,
} satisfies DomainAvailabilityResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainAvailabilityResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


