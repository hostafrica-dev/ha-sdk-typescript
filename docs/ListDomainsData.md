
# ListDomainsData

List domains response data

## Properties

Name | Type
------------ | -------------
`message` | string
`domains` | [Array&lt;DomainInfo&gt;](DomainInfo.md)
`domainWarranty` | boolean
`domainWarrantyRename` | string
`domainEvaluationAvailable` | boolean
`totalCount` | number

## Example

```typescript
import type { ListDomainsData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "domains": null,
  "domainWarranty": null,
  "domainWarrantyRename": null,
  "domainEvaluationAvailable": null,
  "totalCount": null,
} satisfies ListDomainsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDomainsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


