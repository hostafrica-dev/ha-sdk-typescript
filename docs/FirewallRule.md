
# FirewallRule

Firewall rule structure

## Properties

Name | Type
------------ | -------------
`digest` | string
`pos` | number
`type` | string
`action` | string
`iface` | string
`enable` | number
`comment` | string
`source` | string
`dest` | string
`proto` | string
`dport` | string
`sport` | string
`macro` | string
`log` | string

## Example

```typescript
import type { FirewallRule } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "digest": null,
  "pos": null,
  "type": null,
  "action": null,
  "iface": null,
  "enable": null,
  "comment": null,
  "source": null,
  "dest": null,
  "proto": null,
  "dport": null,
  "sport": null,
  "macro": null,
  "log": null,
} satisfies FirewallRule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FirewallRule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


