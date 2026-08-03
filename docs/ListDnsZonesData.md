
# ListDnsZonesData


## Properties

Name | Type
------------ | -------------
`message` | string
`zones` | [Array&lt;DnsZoneInfo&gt;](DnsZoneInfo.md)
`total` | number

## Example

```typescript
import type { ListDnsZonesData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "zones": null,
  "total": null,
} satisfies ListDnsZonesData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDnsZonesData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


