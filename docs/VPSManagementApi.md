# VPSManagementApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getVpsConfig**](VPSManagementApi.md#getvpsconfig) | **POST** /vps/get-config |  |
| [**getVpsDetails**](VPSManagementApi.md#getvpsdetails) | **POST** /vps/get-details |  |
| [**listIsos**](VPSManagementApi.md#listisos) | **POST** /vps/list-isos |  |
| [**listReinstallOs**](VPSManagementApi.md#listreinstallos) | **POST** /vps/list-reinstall-images |  |
| [**listVpsServices**](VPSManagementApi.md#listvpsservices) | **POST** /vps/list-vps-services |  |
| [**mountIso**](VPSManagementApi.md#mountiso) | **POST** /vps/mount-iso |  |
| [**triggerReinstall**](VPSManagementApi.md#triggerreinstall) | **POST** /vps/trigger-reinstall |  |
| [**updateVpsConfig**](VPSManagementApi.md#updatevpsconfig) | **POST** /vps/update-config |  |



## getVpsConfig

> GetVpsConfigResponseContent getVpsConfig(getVpsConfigRequestContent)



Retrieves VPS configuration settings including name, hostname, auto-start, boot order, and CD-ROM

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { GetVpsConfigRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // GetVpsConfigRequestContent
    getVpsConfigRequestContent: ...,
  } satisfies GetVpsConfigRequest;

  try {
    const data = await api.getVpsConfig(body);
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
| **getVpsConfigRequestContent** | [GetVpsConfigRequestContent](GetVpsConfigRequestContent.md) |  | |

### Return type

[**GetVpsConfigResponseContent**](GetVpsConfigResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetVpsConfig 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVpsDetails

> GetVpsDetailsResponseContent getVpsDetails(getVpsDetailsRequestContent)



Gets detailed information about a VPS service including configuration, network settings, and statistics

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { GetVpsDetailsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // GetVpsDetailsRequestContent
    getVpsDetailsRequestContent: ...,
  } satisfies GetVpsDetailsRequest;

  try {
    const data = await api.getVpsDetails(body);
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
| **getVpsDetailsRequestContent** | [GetVpsDetailsRequestContent](GetVpsDetailsRequestContent.md) |  | |

### Return type

[**GetVpsDetailsResponseContent**](GetVpsDetailsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetVpsDetails 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listIsos

> ListIsosResponseContent listIsos(listIsosRequestContent)



Retrieves the list of available ISO images for a VPS service

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListIsosRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // ListIsosRequestContent
    listIsosRequestContent: ...,
  } satisfies ListIsosRequest;

  try {
    const data = await api.listIsos(body);
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
| **listIsosRequestContent** | [ListIsosRequestContent](ListIsosRequestContent.md) |  | |

### Return type

[**ListIsosResponseContent**](ListIsosResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListIsos 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listReinstallOs

> ListReinstallOsResponseContent listReinstallOs(listReinstallOsRequestContent)



Retrieves the list of available OS images for VPS reinstallation

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListReinstallOsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // ListReinstallOsRequestContent
    listReinstallOsRequestContent: ...,
  } satisfies ListReinstallOsRequest;

  try {
    const data = await api.listReinstallOs(body);
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
| **listReinstallOsRequestContent** | [ListReinstallOsRequestContent](ListReinstallOsRequestContent.md) |  | |

### Return type

[**ListReinstallOsResponseContent**](ListReinstallOsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListReinstallOs 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listVpsServices

> ListVpsServicesResponseContent listVpsServices()



Lists all VPS services accessible by the authenticated user

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListVpsServicesRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  try {
    const data = await api.listVpsServices();
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

[**ListVpsServicesResponseContent**](ListVpsServicesResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListVpsServices 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mountIso

> MountIsoResponseContent mountIso(mountIsoRequestContent)



Mounts an ISO image on a VPS service

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { MountIsoRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // MountIsoRequestContent
    mountIsoRequestContent: ...,
  } satisfies MountIsoRequest;

  try {
    const data = await api.mountIso(body);
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
| **mountIsoRequestContent** | [MountIsoRequestContent](MountIsoRequestContent.md) |  | |

### Return type

[**MountIsoResponseContent**](MountIsoResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | MountIso 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## triggerReinstall

> TriggerReinstallResponseContent triggerReinstall(triggerReinstallRequestContent)



Triggers a VPS reinstallation with the specified OS template

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { TriggerReinstallRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // TriggerReinstallRequestContent
    triggerReinstallRequestContent: ...,
  } satisfies TriggerReinstallRequest;

  try {
    const data = await api.triggerReinstall(body);
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
| **triggerReinstallRequestContent** | [TriggerReinstallRequestContent](TriggerReinstallRequestContent.md) |  | |

### Return type

[**TriggerReinstallResponseContent**](TriggerReinstallResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | TriggerReinstall 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateVpsConfig

> UpdateVpsConfigResponseContent updateVpsConfig(updateVpsConfigRequestContent)



Updates VPS configuration settings such as name, hostname, auto-start, boot order, and CD-ROM

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdateVpsConfigRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // UpdateVpsConfigRequestContent
    updateVpsConfigRequestContent: ...,
  } satisfies UpdateVpsConfigRequest;

  try {
    const data = await api.updateVpsConfig(body);
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
| **updateVpsConfigRequestContent** | [UpdateVpsConfigRequestContent](UpdateVpsConfigRequestContent.md) |  | |

### Return type

[**UpdateVpsConfigResponseContent**](UpdateVpsConfigResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateVpsConfig 200 response |  -  |
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

