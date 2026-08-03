
# DomainContactUpdates

WHOIS contact updates keyed by Registrant, Admin, Tech, and Billing

## Properties

Name | Type
------------ | -------------
`registrant` | [DomainContactUpdate](DomainContactUpdate.md)
`admin` | [DomainContactUpdate](DomainContactUpdate.md)
`tech` | [DomainContactUpdate](DomainContactUpdate.md)
`billing` | [DomainContactUpdate](DomainContactUpdate.md)

## Example

```typescript
import type { DomainContactUpdates } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "registrant": null,
  "admin": null,
  "tech": null,
  "billing": null,
} satisfies DomainContactUpdates

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainContactUpdates
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


