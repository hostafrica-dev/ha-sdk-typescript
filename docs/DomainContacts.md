
# DomainContacts

WHOIS contacts keyed by contact role

## Properties

Name | Type
------------ | -------------
`registrant` | { [key: string]: string; }
`admin` | { [key: string]: string; }
`tech` | { [key: string]: string; }
`billing` | { [key: string]: string; }

## Example

```typescript
import type { DomainContacts } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "registrant": null,
  "admin": null,
  "tech": null,
  "billing": null,
} satisfies DomainContacts

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainContacts
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


