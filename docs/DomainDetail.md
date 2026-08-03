
# DomainDetail

Full domain details returned by get-domain

## Properties

Name | Type
------------ | -------------
`domainId` | string
`type` | string
`domain` | string
`sld` | string
`tld` | string
`status` | string
`period` | number
`registrationdate` | string
`donotrenew` | number
`idProtection` | number
`idProtectionSupported` | boolean
`firstpaymentamount` | string
`recurringamount` | string
`dnsmanagement` | boolean
`emailforwarding` | boolean
`isPremium` | boolean
`lockStatus` | string
`gracePeriod` | number
`redemptionPeriod` | number
`gracePeriodFee` | number
`redemptionPeriodFee` | number
`inGrace` | boolean
`inRedemption` | boolean
`expirydate` | string
`nextinvoicedate` | string
`nextduedate` | string
`availableFeatures` | [DomainAvailableFeatures](DomainAvailableFeatures.md)
`domainNameservers` | Array&lt;string&gt;
`defaultNameservers` | Array&lt;string&gt;
`nsChanging` | string
`hasHosting` | [DomainHostingLink](DomainHostingLink.md)
`hasDnsManagerZone` | boolean
`expiryCountdown` | [DomainExpiryCountdown](DomainExpiryCountdown.md)
`evaluation` | any
`domainEvaluationAvailable` | boolean
`hasRedirect` | any
`noEpp` | boolean

## Example

```typescript
import type { DomainDetail } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "domainId": null,
  "type": null,
  "domain": null,
  "sld": null,
  "tld": null,
  "status": null,
  "period": null,
  "registrationdate": null,
  "donotrenew": null,
  "idProtection": null,
  "idProtectionSupported": null,
  "firstpaymentamount": null,
  "recurringamount": null,
  "dnsmanagement": null,
  "emailforwarding": null,
  "isPremium": null,
  "lockStatus": null,
  "gracePeriod": null,
  "redemptionPeriod": null,
  "gracePeriodFee": null,
  "redemptionPeriodFee": null,
  "inGrace": null,
  "inRedemption": null,
  "expirydate": null,
  "nextinvoicedate": null,
  "nextduedate": null,
  "availableFeatures": null,
  "domainNameservers": null,
  "defaultNameservers": null,
  "nsChanging": null,
  "hasHosting": null,
  "hasDnsManagerZone": null,
  "expiryCountdown": null,
  "evaluation": null,
  "domainEvaluationAvailable": null,
  "hasRedirect": null,
  "noEpp": null,
} satisfies DomainDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DomainDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


