
# RdnsPool

A subnet pool entry within an available rDNS item

## Properties

Name | Type
------------ | -------------
`pool` | string
`mask` | number

## Example

```typescript
import type { RdnsPool } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "pool": null,
  "mask": null,
} satisfies RdnsPool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RdnsPool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


