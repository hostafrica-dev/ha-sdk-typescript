
# DnsRecordMutationData


## Properties

Name | Type
------------ | -------------
`message` | string
`records` | [Array&lt;DnsRecordInfo&gt;](DnsRecordInfo.md)

## Example

```typescript
import type { DnsRecordMutationData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "records": null,
} satisfies DnsRecordMutationData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DnsRecordMutationData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


