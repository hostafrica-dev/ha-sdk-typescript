# UserManagementApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**userChangePassword**](UserManagementApi.md#userchangepassword) | **POST** /user/change-password |  |



## userChangePassword

> UserChangePasswordResponseContent userChangePassword(userChangePasswordRequestContent)



Changes the authenticated user\&#39;s password. All active sessions will be revoked and the user must login again.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UserChangePasswordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserManagementApi(config);

  const body = {
    // UserChangePasswordRequestContent
    userChangePasswordRequestContent: ...,
  } satisfies UserChangePasswordRequest;

  try {
    const data = await api.userChangePassword(body);
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
| **userChangePasswordRequestContent** | [UserChangePasswordRequestContent](UserChangePasswordRequestContent.md) |  | |

### Return type

[**UserChangePasswordResponseContent**](UserChangePasswordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UserChangePassword 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

