
# CatalogueCurrency

Currency info returned in the catalogue response

## Properties

Name | Type
------------ | -------------
`code` | string
`prefix` | string
`suffix` | string

## Example

```typescript
import type { CatalogueCurrency } from '@hostafrica/sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "prefix": null,
  "suffix": null,
} satisfies CatalogueCurrency

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueCurrency
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


