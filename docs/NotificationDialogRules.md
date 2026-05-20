
# NotificationDialogRules

Dialog rules for notification creation/editing

## Properties

Name | Type
------------ | -------------
`requiredOnCreate` | Array&lt;string&gt;
`conditionKeys` | Array&lt;string&gt;
`thresholdRange` | Array&lt;number&gt;
`periodMin` | number
`timeframeMin` | number

## Example

```typescript
import type { NotificationDialogRules } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "requiredOnCreate": null,
  "conditionKeys": null,
  "thresholdRange": null,
  "periodMin": null,
  "timeframeMin": null,
} satisfies NotificationDialogRules

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotificationDialogRules
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


