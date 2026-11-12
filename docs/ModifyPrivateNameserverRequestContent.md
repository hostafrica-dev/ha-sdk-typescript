
# ModifyPrivateNameserverRequestContent


## Properties

Name | Type
------------ | -------------
`domainId` | string
`nameserver` | string
`newNameserver` | string
`oldIpAddress` | string
`newIpAddress` | string

## Example

```typescript
import type { ModifyPrivateNameserverRequestContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "nameserver": null,
  "newNameserver": null,
  "oldIpAddress": null,
  "newIpAddress": null,
} satisfies ModifyPrivateNameserverRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModifyPrivateNameserverRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


