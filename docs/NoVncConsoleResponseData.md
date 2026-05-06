
# NoVncConsoleResponseData

Response data for noVNC console operation

## Properties

Name | Type
------------ | -------------
`message` | string
`console` | [NoVncConsoleDetails](NoVncConsoleDetails.md)

## Example

```typescript
import type { NoVncConsoleResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "console": null,
} satisfies NoVncConsoleResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NoVncConsoleResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


