
# ServiceUnavailableError


## Properties

Name | Type
------------ | -------------
`message` | string
`data` | object
`retryAfter` | number

## Example

```typescript
import type { ServiceUnavailableError } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "data": null,
  "retryAfter": null,
} satisfies ServiceUnavailableError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ServiceUnavailableError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


