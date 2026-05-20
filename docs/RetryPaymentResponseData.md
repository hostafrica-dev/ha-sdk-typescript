
# RetryPaymentResponseData

Response data for a retry payment operation

## Properties

Name | Type
------------ | -------------
`orderId` | number
`invoiceId` | number
`total` | [RetryPaymentTotal](RetryPaymentTotal.md)
`paymentStatus` | [PaymentStatus](PaymentStatus.md)

## Example

```typescript
import type { RetryPaymentResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "orderId": null,
  "invoiceId": null,
  "total": null,
  "paymentStatus": null,
} satisfies RetryPaymentResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetryPaymentResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


