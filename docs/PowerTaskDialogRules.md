
# PowerTaskDialogRules

Dialog rules for power task creation/editing

## Properties

Name | Type
------------ | -------------
`requiredOnCreate` | Array&lt;string&gt;
`jobTypeValues` | Array&lt;string&gt;
`actionValues` | Array&lt;string&gt;
`weekdayValues` | Array&lt;string&gt;
`jobMinutesStep` | number

## Example

```typescript
import type { PowerTaskDialogRules } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "requiredOnCreate": null,
  "jobTypeValues": null,
  "actionValues": null,
  "weekdayValues": null,
  "jobMinutesStep": null,
} satisfies PowerTaskDialogRules

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PowerTaskDialogRules
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


