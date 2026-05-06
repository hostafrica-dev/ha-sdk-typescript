
# FirewallListResponseData

Response data for firewall list operation

## Properties

Name | Type
------------ | -------------
`message` | string
`rules` | [Array&lt;FirewallRule&gt;](FirewallRule.md)
`availableInterfaces` | [Array&lt;FirewallOption&gt;](FirewallOption.md)
`availableMacros` | [Array&lt;FirewallOption&gt;](FirewallOption.md)
`availableProtocols` | [Array&lt;FirewallOption&gt;](FirewallOption.md)

## Example

```typescript
import type { FirewallListResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "rules": null,
  "availableInterfaces": null,
  "availableMacros": null,
  "availableProtocols": null,
} satisfies FirewallListResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FirewallListResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


