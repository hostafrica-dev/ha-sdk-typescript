
# DomainRequiringDataAdditionalField

Additional registrar field required for a pending domain

## Properties

Name | Type
------------ | -------------
`name` | string
`displayname` | string
`type` | string
`required` | boolean
`value` | string

## Example

```typescript
import type { DomainRequiringDataAdditionalField } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "displayname": null,
  "type": null,
  "required": null,
  "value": null,
} satisfies DomainRequiringDataAdditionalField

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainRequiringDataAdditionalField
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


