# SecurityApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**changePassword**](SecurityApi.md#changepassword) | **POST** /vps/change-password |  |
| [**getPrivateSshKey**](SecurityApi.md#getprivatesshkey) | **POST** /vps/get-private-ssh-keys |  |
| [**getPublicSshKey**](SecurityApi.md#getpublicsshkey) | **POST** /vps/get-public-ssh-keys |  |
| [**updateSshKeys**](SecurityApi.md#updatesshkeys) | **POST** /vps/update-ssh-keys |  |



## changePassword

> ChangePasswordResponseContent changePassword(changePasswordRequestContent)



Change the root password for a VPS service

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@hostafrica/sdk-typescript';
import type { ChangePasswordRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // ChangePasswordRequestContent
    changePasswordRequestContent: ...,
  } satisfies ChangePasswordRequest;

  try {
    const data = await api.changePassword(body);
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
| **changePasswordRequestContent** | [ChangePasswordRequestContent](ChangePasswordRequestContent.md) |  | |

### Return type

[**ChangePasswordResponseContent**](ChangePasswordResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ChangePassword 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPrivateSshKey

> GetPrivateSshKeyResponseContent getPrivateSshKey(getPrivateSshKeyRequestContent)



Retrieves the private SSH key configured for a VPS service

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@hostafrica/sdk-typescript';
import type { GetPrivateSshKeyRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // GetPrivateSshKeyRequestContent
    getPrivateSshKeyRequestContent: ...,
  } satisfies GetPrivateSshKeyRequest;

  try {
    const data = await api.getPrivateSshKey(body);
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
| **getPrivateSshKeyRequestContent** | [GetPrivateSshKeyRequestContent](GetPrivateSshKeyRequestContent.md) |  | |

### Return type

[**GetPrivateSshKeyResponseContent**](GetPrivateSshKeyResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetPrivateSshKey 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicSshKey

> GetPublicSshKeyResponseContent getPublicSshKey(getPublicSshKeyRequestContent)



Retrieves the public SSH key configured for a VPS service

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@hostafrica/sdk-typescript';
import type { GetPublicSshKeyRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // GetPublicSshKeyRequestContent
    getPublicSshKeyRequestContent: ...,
  } satisfies GetPublicSshKeyRequest;

  try {
    const data = await api.getPublicSshKey(body);
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
| **getPublicSshKeyRequestContent** | [GetPublicSshKeyRequestContent](GetPublicSshKeyRequestContent.md) |  | |

### Return type

[**GetPublicSshKeyResponseContent**](GetPublicSshKeyResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetPublicSshKey 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSshKeys

> UpdateSshKeysResponseContent updateSshKeys(updateSshKeysRequestContent)



Updates SSH public keys for a VPS service for root access.

### Example

```ts
import {
  Configuration,
  SecurityApi,
} from '@hostafrica/sdk-typescript';
import type { UpdateSshKeysRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SecurityApi(config);

  const body = {
    // UpdateSshKeysRequestContent
    updateSshKeysRequestContent: ...,
  } satisfies UpdateSshKeysRequest;

  try {
    const data = await api.updateSshKeys(body);
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
| **updateSshKeysRequestContent** | [UpdateSshKeysRequestContent](UpdateSshKeysRequestContent.md) |  | |

### Return type

[**UpdateSshKeysResponseContent**](UpdateSshKeysResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateSshKeys 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

