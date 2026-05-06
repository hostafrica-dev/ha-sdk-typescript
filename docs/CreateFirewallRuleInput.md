
# CreateFirewallRuleInput


## Properties

Name | Type
------------ | -------------
`serviceId` | string
`type` | [FirewallRuleType](FirewallRuleType.md)
`ruleAction` | [FirewallRuleAction](FirewallRuleAction.md)
`enable` | number
`comment` | string
`source` | string
`dest` | string
`proto` | string
`dport` | string
`sport` | string
`macro` | string
`iface` | string
`log` | string
`pos` | number

## Example

```typescript
import type { CreateFirewallRuleInput } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "serviceId": null,
  "type": null,
  "ruleAction": null,
  "enable": null,
  "comment": null,
  "source": null,
  "dest": null,
  "proto": null,
  "dport": null,
  "sport": null,
  "macro": null,
  "iface": null,
  "log": null,
  "pos": null,
} satisfies CreateFirewallRuleInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFirewallRuleInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


