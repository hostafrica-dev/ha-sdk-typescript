
# DomainInfo

Summary of an owned domain returned by list operations

## Properties

Name | Type
------------ | -------------
`domainId` | string
`type` | string
`domain` | string
`status` | string
`period` | number
`donotrenew` | number
`idProtection` | number
`idProtectionSupported` | boolean
`recurringamount` | string
`expirydate` | string
`nextinvoicedate` | string
`nextduedate` | string
`hasHosting` | [DomainHostingLink](DomainHostingLink.md)
`hasDnsManagerZone` | boolean
`evaluation` | any

## Example

```typescript
import type { DomainInfo } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "type": null,
  "domain": null,
  "status": null,
  "period": null,
  "donotrenew": null,
  "idProtection": null,
  "idProtectionSupported": null,
  "recurringamount": null,
  "expirydate": null,
  "nextinvoicedate": null,
  "nextduedate": null,
  "hasHosting": null,
  "hasDnsManagerZone": null,
  "evaluation": null,
} satisfies DomainInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


