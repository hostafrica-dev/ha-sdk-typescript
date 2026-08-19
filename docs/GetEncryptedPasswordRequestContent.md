
# GetEncryptedPasswordRequestContent


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`publicKey` | string

## Example

```typescript
import type { GetEncryptedPasswordRequestContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "publicKey": null,
} satisfies GetEncryptedPasswordRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEncryptedPasswordRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


