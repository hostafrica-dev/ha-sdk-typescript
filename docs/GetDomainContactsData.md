
# GetDomainContactsData

Domain contact information returned by get-domain-contacts

## Properties

Name | Type
------------ | -------------
`message` | string
`domainId` | string
`domain` | string
`contacts` | any

## Example

```typescript
import type { GetDomainContactsData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "domainId": null,
  "domain": null,
  "contacts": null,
} satisfies GetDomainContactsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDomainContactsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


