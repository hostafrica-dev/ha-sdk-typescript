
# AddDomainRedirectRequestContent


## Properties

Name | Type
------------ | -------------
`domainId` | string
`url` | string
`type` | string
`address` | string
`override` | boolean

## Example

```typescript
import type { AddDomainRedirectRequestContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "url": null,
  "type": null,
  "address": null,
  "override": null,
} satisfies AddDomainRedirectRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddDomainRedirectRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


