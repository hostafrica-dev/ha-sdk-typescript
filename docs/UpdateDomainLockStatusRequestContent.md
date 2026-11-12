
# UpdateDomainLockStatusRequestContent


## Properties

Name | Type
------------ | -------------
`domainId` | string
`lockStatus` | boolean
`twoFaCode` | string
`twoFaBackup` | string

## Example

```typescript
import type { UpdateDomainLockStatusRequestContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "lockStatus": null,
  "twoFaCode": null,
  "twoFaBackup": null,
} satisfies UpdateDomainLockStatusRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDomainLockStatusRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


