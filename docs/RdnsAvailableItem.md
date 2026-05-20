
# RdnsAvailableItem

One service the client can manage PTRs for

## Properties

Name | Type
------------ | -------------
`type` | number
`relid` | number
`name` | string
`ips` | Array&lt;string&gt;
`pools` | [Array&lt;RdnsPool&gt;](RdnsPool.md)
`ptrLimit` | number
`serverId` | number
`allowRdns` | boolean
`rdnsSupported` | boolean

## Example

```typescript
import type { RdnsAvailableItem } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "relid": null,
  "name": null,
  "ips": null,
  "pools": null,
  "ptrLimit": null,
  "serverId": null,
  "allowRdns": null,
  "rdnsSupported": null,
} satisfies RdnsAvailableItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RdnsAvailableItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


