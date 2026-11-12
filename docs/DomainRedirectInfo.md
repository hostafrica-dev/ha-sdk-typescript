
# DomainRedirectInfo

A configured domain HTTP redirect

## Properties

Name | Type
------------ | -------------
`domainId` | string
`domain` | string
`url` | string
`type` | string
`address` | string

## Example

```typescript
import type { DomainRedirectInfo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "domain": null,
  "url": null,
  "type": null,
  "address": null,
} satisfies DomainRedirectInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainRedirectInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


