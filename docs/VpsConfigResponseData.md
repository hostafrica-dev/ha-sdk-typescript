
# VpsConfigResponseData

Response data for VPS configuration retrieval

## Properties

Name | Type
------------ | -------------
`message` | string
`hostname` | string
`isKvm` | boolean
`sshkeysEnabled` | boolean
`availableBootOrder` | any
`bootOrder0` | string
`bootOrder1` | string
`bootOrder2` | string
`sshkeys` | string

## Example

```typescript
import type { VpsConfigResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "hostname": null,
  "isKvm": null,
  "sshkeysEnabled": null,
  "availableBootOrder": null,
  "bootOrder0": null,
  "bootOrder1": null,
  "bootOrder2": null,
  "sshkeys": null,
} satisfies VpsConfigResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VpsConfigResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


