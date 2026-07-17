
# GetDomainContactsResponseContent


## Properties

Name | Type
------------ | -------------
`status` | [OperationStatus](OperationStatus.md)
`data` | [GetDomainContactsData](GetDomainContactsData.md)

## Example

```typescript
import type { GetDomainContactsResponseContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "data": null,
} satisfies GetDomainContactsResponseContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDomainContactsResponseContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


