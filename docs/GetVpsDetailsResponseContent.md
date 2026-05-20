
# GetVpsDetailsResponseContent


## Properties

Name | Type
------------ | -------------
`status` | [OperationStatus](OperationStatus.md)
`data` | [VpsDetailsResponse](VpsDetailsResponse.md)

## Example

```typescript
import type { GetVpsDetailsResponseContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "data": null,
} satisfies GetVpsDetailsResponseContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetVpsDetailsResponseContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


