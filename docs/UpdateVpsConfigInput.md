
# UpdateVpsConfigInput


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`name` | string
`hostname` | string
`autoStart` | number
`boot` | string
`ide2` | string
`cdrom` | string

## Example

```typescript
import type { UpdateVpsConfigInput } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "name": null,
  "hostname": null,
  "autoStart": null,
  "boot": null,
  "ide2": null,
  "cdrom": null,
} satisfies UpdateVpsConfigInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateVpsConfigInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


