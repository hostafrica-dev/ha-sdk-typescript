
# ListRdnsResponseData

Response data for the list-rdns operation

## Properties

Name | Type
------------ | -------------
`records` | [Array&lt;RdnsRecord&gt;](RdnsRecord.md)
`ptrCount` | number
`ptrLimit` | number
`customIpMode` | boolean
`subnetCustomIpMode` | boolean
`serviceOnlyIps` | boolean
`availableItems` | [Array&lt;RdnsAvailableItem&gt;](RdnsAvailableItem.md)

## Example

```typescript
import type { ListRdnsResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "records": null,
  "ptrCount": null,
  "ptrLimit": null,
  "customIpMode": null,
  "subnetCustomIpMode": null,
  "serviceOnlyIps": null,
  "availableItems": null,
} satisfies ListRdnsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListRdnsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


