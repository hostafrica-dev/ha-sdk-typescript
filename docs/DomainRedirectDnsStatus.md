
# DomainRedirectDnsStatus

DNS readiness flags for domain redirect setup

## Properties

Name | Type
------------ | -------------
`zoneMissing` | boolean
`hasARecord` | boolean
`overrideRequired` | boolean
`conflictingRecords` | [Array&lt;DomainRedirectConflictingRecord&gt;](DomainRedirectConflictingRecord.md)

## Example

```typescript
import type { DomainRedirectDnsStatus } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "zoneMissing": null,
  "hasARecord": null,
  "overrideRequired": null,
  "conflictingRecords": null,
} satisfies DomainRedirectDnsStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainRedirectDnsStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


