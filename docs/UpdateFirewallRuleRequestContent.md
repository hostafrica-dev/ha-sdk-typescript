
# UpdateFirewallRuleRequestContent


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`pos` | number
`comment` | string
`ruleAction` | [FirewallRuleAction](FirewallRuleAction.md)

## Example

```typescript
import type { UpdateFirewallRuleRequestContent } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "pos": null,
  "comment": null,
  "ruleAction": null,
} satisfies UpdateFirewallRuleRequestContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateFirewallRuleRequestContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


