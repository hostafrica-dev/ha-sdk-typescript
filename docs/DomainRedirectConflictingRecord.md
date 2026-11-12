
# DomainRedirectConflictingRecord

Conflicting A record that blocks redirect setup without override=true

## Properties

Name | Type
------------ | -------------
`line` | number
`name` | string
`type` | string
`value` | string

## Example

```typescript
import type { DomainRedirectConflictingRecord } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "line": null,
  "name": null,
  "type": null,
  "value": null,
} satisfies DomainRedirectConflictingRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainRedirectConflictingRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


