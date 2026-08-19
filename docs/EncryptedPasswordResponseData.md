
# EncryptedPasswordResponseData

Response data for get-encrypted-password

## Properties

Name | Type
------------ | -------------
`username` | string
`password` | string
`encryption` | [PasswordEncryptionInfo](PasswordEncryptionInfo.md)

## Example

```typescript
import type { EncryptedPasswordResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "username": null,
  "password": null,
  "encryption": null,
} satisfies EncryptedPasswordResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EncryptedPasswordResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


