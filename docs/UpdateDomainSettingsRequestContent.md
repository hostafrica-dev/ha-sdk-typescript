
# UpdateDomainSettingsRequestContent


## Properties

Name | Type
------------ | -------------
`domainId` | string
`setting` | [DomainSettingKey](DomainSettingKey.md)
`value` | boolean
`gateway` | string

## Example

```typescript
import type { UpdateDomainSettingsRequestContent } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "setting": null,
  "value": null,
  "gateway": null,
} satisfies UpdateDomainSettingsRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDomainSettingsRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


