
# ValidatePricingPlanConfig

Plan configuration included in pricing breakdown

## Properties

Name | Type
------------ | -------------
`cpu` | number
`ram` | number
`disk` | number
`bandwidth` | number
`backups` | number
`snapshots` | number

## Example

```typescript
import type { ValidatePricingPlanConfig } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "cpu": null,
  "ram": null,
  "disk": null,
  "bandwidth": null,
  "backups": null,
  "snapshots": null,
} satisfies ValidatePricingPlanConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidatePricingPlanConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


