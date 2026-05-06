
# UserChangePasswordResponseData

Response data for user change password operation

## Properties

Name | Type
------------ | -------------
`success` | boolean
`message` | string
`data` | [UserChangePasswordDetails](UserChangePasswordDetails.md)

## Example

```typescript
import type { UserChangePasswordResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "message": null,
  "data": null,
} satisfies UserChangePasswordResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserChangePasswordResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


