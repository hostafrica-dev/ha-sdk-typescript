
# CreateRdnsRecordResponseData

Response data for the create-rdns-record operation

## Properties

Name | Type
------------ | -------------
`record` | [RdnsRecord](RdnsRecord.md)

## Example

```typescript
import type { CreateRdnsRecordResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "record": null,
} satisfies CreateRdnsRecordResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateRdnsRecordResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


