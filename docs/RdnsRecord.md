
# RdnsRecord

A PTR record owned by the client

## Properties

Name | Type
------------ | -------------
`id` | number
`ip` | string
`hostname` | string
`ttl` | number
`type` | number
`relid` | number
`serverid` | number
`clientid` | number
`packageid` | number
`from` | string
`sub` | string
`name` | string

## Example

```typescript
import type { RdnsRecord } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ip": null,
  "hostname": null,
  "ttl": null,
  "type": null,
  "relid": null,
  "serverid": null,
  "clientid": null,
  "packageid": null,
  "from": null,
  "sub": null,
  "name": null,
} satisfies RdnsRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RdnsRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


