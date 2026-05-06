# ConsoleAccessApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getNoVncConsole**](ConsoleAccessApi.md#getnovncconsole) | **POST** /vps/novnc-console |  |



## getNoVncConsole

> GetNoVncConsoleResponseContent getNoVncConsole(getNoVncConsoleRequestContent)



Retrieves noVNC console access credentials and connection details for a VPS

### Example

```ts
import {
  Configuration,
  ConsoleAccessApi,
} from '@hostafrica/sdk-typescript';
import type { GetNoVncConsoleRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleAccessApi(config);

  const body = {
    // GetNoVncConsoleRequestContent
    getNoVncConsoleRequestContent: ...,
  } satisfies GetNoVncConsoleRequest;

  try {
    const data = await api.getNoVncConsole(body);
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
| **getNoVncConsoleRequestContent** | [GetNoVncConsoleRequestContent](GetNoVncConsoleRequestContent.md) |  | |

### Return type

[**GetNoVncConsoleResponseContent**](GetNoVncConsoleResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetNoVncConsole 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

