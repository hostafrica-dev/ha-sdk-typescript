
# DnsRecordMutationRecord

DNS record fields for add, edit, or delete via DNSManager.  See `DnsRecordInfo` for how `content` and structured fields map to upstream record data. Delete requires only `id`, `name`, and `type`.

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
import type { DnsRecordMutationRecord } from '@hostafrica/ha-sdk-typescript'

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
} satisfies DnsRecordMutationRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DnsRecordMutationRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


