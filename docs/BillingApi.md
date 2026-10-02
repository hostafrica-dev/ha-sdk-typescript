# BillingApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInvoiceDetails**](BillingApi.md#getinvoicedetails) | **POST** /billing/get-invoice-details |  |
| [**listInvoices**](BillingApi.md#listinvoices) | **POST** /billing/list-invoices |  |



## getInvoiceDetails

> GetInvoiceDetailsResponseContent getInvoiceDetails(getInvoiceDetailsRequestContent)



Gets details for a single invoice, including line items, payee information, and transactions

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@hostafrica/ha-sdk-typescript';
import type { GetInvoiceDetailsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  const body = {
    // GetInvoiceDetailsRequestContent
    getInvoiceDetailsRequestContent: ...,
  } satisfies GetInvoiceDetailsRequest;

  try {
    const data = await api.getInvoiceDetails(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **getInvoiceDetailsRequestContent** | [GetInvoiceDetailsRequestContent](GetInvoiceDetailsRequestContent.md) |  | |

### Return type

[**GetInvoiceDetailsResponseContent**](GetInvoiceDetailsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetInvoiceDetails 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listInvoices

> ListInvoicesResponseContent listInvoices()



Lists invoices for the authenticated user

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListInvoicesRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  try {
    const data = await api.listInvoices();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListInvoicesResponseContent**](ListInvoicesResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListInvoices 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

