
# UserChangePasswordDetails

Detailed information about password change

## Properties

Name | Type
------------ | -------------
`passwordChanged` | boolean
`sessionsRevoked` | number
`requiresRelogin` | boolean

## Example

```typescript
import type { UserChangePasswordDetails } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "passwordChanged": null,
  "sessionsRevoked": null,
  "requiresRelogin": null,
} satisfies UserChangePasswordDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserChangePasswordDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


