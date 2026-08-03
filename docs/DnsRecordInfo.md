
# DnsRecordInfo

A DNS record within a zone.  Record values are normalized to a flat `content` string. Structured record types use additional top-level fields; the proxy maps these to upstream `data` / `rdata_raw` shapes:  - **A / AAAA**: `content` is the IP address (`data.address`). - **CNAME**: `content` is the target hostname (`data.cname`). - **TXT**: `content` is the text value (`data.txtdata`). - **NS**: `content` is the nameserver hostname (`data.nsdname`). - **MX**: `content` is the mail exchange hostname; `priority` is the MX preference   (`data.exchange`, `data.preference`). - **SRV**: `content` is the target hostname; `priority`, `weight`, and `port` are the   SRV parameters (`data.target`, `data.priority`, `data.weight`, `data.port`).  When upstream returns structured `rdata_raw` without a string `rdata` value, `content` and the type-specific fields are derived from `rdata_raw`.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`type` | string
`content` | string
`ttl` | number
`priority` | number
`weight` | number
`port` | number

## Example

```typescript
import type { DnsRecordInfo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "type": null,
  "content": null,
  "ttl": null,
  "priority": null,
  "weight": null,
  "port": null,
} satisfies DnsRecordInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DnsRecordInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


