
# AddDomainRedirectData


## Properties

Name | Type
------------ | -------------
`message` | string
`domain` | string
`url` | string
`type` | string

## Example

```typescript
import type { AddDomainRedirectData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "domain": null,
  "url": null,
  "type": null,
} satisfies AddDomainRedirectData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddDomainRedirectData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


