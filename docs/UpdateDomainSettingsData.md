
# UpdateDomainSettingsData

Response data for update-domain-settings

## Properties

Name | Type
------------ | -------------
`message` | string
`domainId` | string
`setting` | [DomainSettingKey](DomainSettingKey.md)
`value` | boolean
`requiresPayment` | boolean
`invoiceId` | number
`amount` | number

## Example

```typescript
import type { UpdateDomainSettingsData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "domainId": null,
  "setting": null,
  "value": null,
  "requiresPayment": null,
  "invoiceId": null,
  "amount": null,
} satisfies UpdateDomainSettingsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDomainSettingsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


