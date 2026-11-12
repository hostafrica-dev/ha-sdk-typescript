
# ListDomainRedirectsData


## Properties

Name | Type
------------ | -------------
`message` | string
`redirects` | [Array&lt;DomainRedirectInfo&gt;](DomainRedirectInfo.md)
`limit` | number
`offset` | number

## Example

```typescript
import type { ListDomainRedirectsData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "redirects": null,
  "limit": null,
  "offset": null,
} satisfies ListDomainRedirectsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDomainRedirectsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


