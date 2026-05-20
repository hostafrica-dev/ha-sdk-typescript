
# CreateOrderResponseData

Response data for a successful or pending order

## Properties

Name | Type
------------ | -------------
`orderId` | number
`invoiceId` | number
`orderNumber` | string
`total` | [CreateOrderTotal](CreateOrderTotal.md)
`promoApplied` | string
`paymentMethod` | string
`paymentStatus` | [PaymentStatus](PaymentStatus.md)
`items` | [CreateOrderItems](CreateOrderItems.md)
`paymentError` | [PaymentError](PaymentError.md)
`warnings` | [Array&lt;OrderWarning&gt;](OrderWarning.md)

## Example

```typescript
import type { CreateOrderResponseData } from '@hostafrica/ha-sdk-typescript'

// TODO: Update the object below with actual values
const example = {
  "orderId": null,
  "invoiceId": null,
  "orderNumber": null,
  "total": null,
  "promoApplied": null,
  "paymentMethod": null,
  "paymentStatus": null,
  "items": null,
  "paymentError": null,
  "warnings": null,
} satisfies CreateOrderResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrderResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


