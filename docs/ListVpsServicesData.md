
# ListVpsServicesData

List VPS response data - matches upstream API format

## Properties

Name | Type
------------ | -------------
`services` | [Array&lt;VpsServiceInfo&gt;](VpsServiceInfo.md)

## Example

```typescript
import type { ListVpsServicesData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "services": null,
} satisfies ListVpsServicesData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListVpsServicesData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


