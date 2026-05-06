
# GetOsTemplateDetailsResponseData

Response data for get OS template details operation

## Properties

Name | Type
------------ | -------------
`message` | string
`image` | [OsImage](OsImage.md)

## Example

```typescript
import type { GetOsTemplateDetailsResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "image": null,
} satisfies GetOsTemplateDetailsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetOsTemplateDetailsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


