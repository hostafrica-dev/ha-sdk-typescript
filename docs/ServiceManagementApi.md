# ServiceManagementApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrder**](ServiceManagementApi.md#createorder) | **POST** /vps/create-order |  |
| [**getCatalogue**](ServiceManagementApi.md#getcatalogue) | **POST** /vps/get-catalogue |  |
| [**listOrders**](ServiceManagementApi.md#listorders) | **POST** /vps/list-orders |  |
| [**retryPayment**](ServiceManagementApi.md#retrypayment) | **POST** /vps/retry-payment |  |
| [**validatePricing**](ServiceManagementApi.md#validatepricing) | **POST** /vps/validate-pricing |  |



## createOrder

> CreateOrderResponseContent createOrder(createOrderRequestContent)



Creates an order through checkout. Returns payment status; on failure also includes payment_error with code and message.

### Example

```ts
import {
  Configuration,
  ServiceManagementApi,
} from '@hostafrica/sdk-typescript';
import type { CreateOrderRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ServiceManagementApi(config);

  const body = {
    // CreateOrderRequestContent
    createOrderRequestContent: ...,
  } satisfies CreateOrderRequest;

  try {
    const data = await api.createOrder(body);
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
| **createOrderRequestContent** | [CreateOrderRequestContent](CreateOrderRequestContent.md) |  | |

### Return type

[**CreateOrderResponseContent**](CreateOrderResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreateOrder 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCatalogue

> GetCatalogueResponseContent getCatalogue(getCatalogueRequestContent)



Retrieves the product catalogue, optionally filtered by group or product

### Example

```ts
import {
  Configuration,
  ServiceManagementApi,
} from '@hostafrica/sdk-typescript';
import type { GetCatalogueRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ServiceManagementApi(config);

  const body = {
    // GetCatalogueRequestContent (optional)
    getCatalogueRequestContent: ...,
  } satisfies GetCatalogueRequest;

  try {
    const data = await api.getCatalogue(body);
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
| **getCatalogueRequestContent** | [GetCatalogueRequestContent](GetCatalogueRequestContent.md) |  | [Optional] |

### Return type

[**GetCatalogueResponseContent**](GetCatalogueResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetCatalogue 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrders

> ListOrdersResponseContent listOrders()



Lists all orders for the authenticated user, including payment and invoice status

### Example

```ts
import {
  Configuration,
  ServiceManagementApi,
} from '@hostafrica/sdk-typescript';
import type { ListOrdersRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ServiceManagementApi(config);

  try {
    const data = await api.listOrders();
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

[**ListOrdersResponseContent**](ListOrdersResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListOrders 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retryPayment

> RetryPaymentResponseContent retryPayment(retryPaymentRequestContent)



Retries a failed or pending payment for an existing order

### Example

```ts
import {
  Configuration,
  ServiceManagementApi,
} from '@hostafrica/sdk-typescript';
import type { RetryPaymentRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ServiceManagementApi(config);

  const body = {
    // RetryPaymentRequestContent
    retryPaymentRequestContent: ...,
  } satisfies RetryPaymentRequest;

  try {
    const data = await api.retryPayment(body);
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
| **retryPaymentRequestContent** | [RetryPaymentRequestContent](RetryPaymentRequestContent.md) |  | |

### Return type

[**RetryPaymentResponseContent**](RetryPaymentResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | RetryPayment 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validatePricing

> ValidatePricingResponseContent validatePricing(validatePricingRequestContent)



Validates pricing for one or more products, returning per-product breakdown and order summary

### Example

```ts
import {
  Configuration,
  ServiceManagementApi,
} from '@hostafrica/sdk-typescript';
import type { ValidatePricingRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ServiceManagementApi(config);

  const body = {
    // ValidatePricingRequestContent
    validatePricingRequestContent: ...,
  } satisfies ValidatePricingRequest;

  try {
    const data = await api.validatePricing(body);
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
| **validatePricingRequestContent** | [ValidatePricingRequestContent](ValidatePricingRequestContent.md) |  | |

### Return type

[**ValidatePricingResponseContent**](ValidatePricingResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ValidatePricing 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

