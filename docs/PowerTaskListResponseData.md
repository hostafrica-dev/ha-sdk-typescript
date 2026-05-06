
# PowerTaskListResponseData

Response data for power task list operation

## Properties

Name | Type
------------ | -------------
`message` | string
`tasks` | [Array&lt;PowerTask&gt;](PowerTask.md)
`availableActions` | Array&lt;string&gt;
`availableJobTypes` | Array&lt;string&gt;
`dialogRules` | [PowerTaskDialogRules](PowerTaskDialogRules.md)

## Example

```typescript
import type { PowerTaskListResponseData } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "tasks": null,
  "availableActions": null,
  "availableJobTypes": null,
  "dialogRules": null,
} satisfies PowerTaskListResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PowerTaskListResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


