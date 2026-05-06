
# UserChangePasswordInput


## Properties

Name | Type
------------ | -------------
`oldPassword` | string
`password` | string
`confirmPassword` | string

## Example

```typescript
import type { UserChangePasswordInput } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "oldPassword": null,
  "password": null,
  "confirmPassword": null,
} satisfies UserChangePasswordInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserChangePasswordInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


