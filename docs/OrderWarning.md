
# OrderWarning

A warning message in the order response

## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string

## Example

```typescript
import type { OrderWarning } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "message": null,
} satisfies OrderWarning

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrderWarning
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


