
# DomainContactUpdate

Update payload for one WHOIS contact role

## Properties

Name | Type
------------ | -------------
`type` | [DomainContactSourceType](DomainContactSourceType.md)
`id` | number
`fields` | { [key: string]: string; }

## Example

```typescript
import type { DomainContactUpdate } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "id": null,
  "fields": null,
} satisfies DomainContactUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainContactUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


