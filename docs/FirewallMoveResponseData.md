
# FirewallMoveResponseData

Response data for firewall move operation

## Properties

Name | Type
------------ | -------------
`message` | string
`fromPos` | number
`targetPos` | number

## Example

```typescript
import type { FirewallMoveResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "fromPos": null,
  "targetPos": null,
} satisfies FirewallMoveResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FirewallMoveResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


