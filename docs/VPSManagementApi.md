# VPSManagementApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOsTemplateDetails**](VPSManagementApi.md#getostemplatedetails) | **POST** /vps/get-os-template-details |  |
| [**getVpsConfig**](VPSManagementApi.md#getvpsconfig) | **POST** /vps/get-config |  |
| [**getVpsDetails**](VPSManagementApi.md#getvpsdetails) | **POST** /vps/get-details |  |
| [**listAllowedFeatures**](VPSManagementApi.md#listallowedfeatures) | **POST** /vps/list-allowed-features |  |
| [**listIsos**](VPSManagementApi.md#listisos) | **POST** /vps/list-isos |  |
| [**listOsTemplates**](VPSManagementApi.md#listostemplates) | **POST** /vps/list-os-templates |  |
| [**listReinstallOs**](VPSManagementApi.md#listreinstallos) | **POST** /vps/list-reinstall-images |  |
| [**listVpsServices**](VPSManagementApi.md#listvpsservices) | **POST** /vps/list-vps-services |  |
| [**mountIso**](VPSManagementApi.md#mountiso) | **POST** /vps/mount-iso |  |
| [**suspendVps**](VPSManagementApi.md#suspendvps) | **POST** /vps/suspend |  |
| [**terminateVps**](VPSManagementApi.md#terminatevps) | **POST** /vps/terminate |  |
| [**triggerReinstall**](VPSManagementApi.md#triggerreinstall) | **POST** /vps/trigger-reinstall |  |
| [**unsuspendVps**](VPSManagementApi.md#unsuspendvps) | **POST** /vps/unsuspend |  |
| [**updateVpsConfig**](VPSManagementApi.md#updatevpsconfig) | **POST** /vps/update-config |  |



## getOsTemplateDetails

> GetOsTemplateDetailsResponseContent getOsTemplateDetails(getOsTemplateDetailsRequestContent)



[Under development] Retrieves detailed information about a specific OS template

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/sdk-typescript';
import type { GetOsTemplateDetailsRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // GetOsTemplateDetailsRequestContent
    getOsTemplateDetailsRequestContent: ...,
  } satisfies GetOsTemplateDetailsRequest;

  try {
    const data = await api.getOsTemplateDetails(body);
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
| **getOsTemplateDetailsRequestContent** | [GetOsTemplateDetailsRequestContent](GetOsTemplateDetailsRequestContent.md) |  | |

### Return type

[**GetOsTemplateDetailsResponseContent**](GetOsTemplateDetailsResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetOsTemplateDetails 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVpsConfig

> GetVpsConfigResponseContent getVpsConfig(getVpsConfigRequestContent)



Retrieves VPS configuration settings including name, hostname, auto-start, boot order, and CD-ROM

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/sdk-typescript';
import type { GetVpsConfigRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

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
} from '@hostafrica/sdk-typescript';
import type { GetVpsDetailsRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

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
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAllowedFeatures

> ListAllowedFeaturesResponseContent listAllowedFeatures(listAllowedFeaturesRequestContent)



Gets the allowed features and capabilities for a VPS service

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/sdk-typescript';
import type { ListAllowedFeaturesRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // ListAllowedFeaturesRequestContent
    listAllowedFeaturesRequestContent: ...,
  } satisfies ListAllowedFeaturesRequest;

  try {
    const data = await api.listAllowedFeatures(body);
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
| **listAllowedFeaturesRequestContent** | [ListAllowedFeaturesRequestContent](ListAllowedFeaturesRequestContent.md) |  | |

### Return type

[**ListAllowedFeaturesResponseContent**](ListAllowedFeaturesResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListAllowedFeatures 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
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
} from '@hostafrica/sdk-typescript';
import type { ListIsosRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

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
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOsTemplates

> ListOsTemplatesResponseContent listOsTemplates(listOsTemplatesRequestContent)



[Under development] Retrieves the list of available OS templates

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/sdk-typescript';
import type { ListOsTemplatesRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // ListOsTemplatesRequestContent
    listOsTemplatesRequestContent: ...,
  } satisfies ListOsTemplatesRequest;

  try {
    const data = await api.listOsTemplates(body);
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
| **listOsTemplatesRequestContent** | [ListOsTemplatesRequestContent](ListOsTemplatesRequestContent.md) |  | |

### Return type

[**ListOsTemplatesResponseContent**](ListOsTemplatesResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListOsTemplates 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listReinstallOs

> ListReinstallOsResponseContent listReinstallOs(listReinstallOsRequestContent)



[Under development] Retrieves the list of available OS images for VPS reinstallation

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/sdk-typescript';
import type { ListReinstallOsRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

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
} from '@hostafrica/sdk-typescript';
import type { ListVpsServicesRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

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
} from '@hostafrica/sdk-typescript';
import type { MountIsoRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

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


## suspendVps

> SuspendVpsResponseContent suspendVps(suspendVpsRequestContent)



[Under development] Suspends an active VPS service through WHMCS. Requires a reason for suspension

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/sdk-typescript';
import type { SuspendVpsRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // SuspendVpsRequestContent
    suspendVpsRequestContent: ...,
  } satisfies SuspendVpsRequest;

  try {
    const data = await api.suspendVps(body);
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
| **suspendVpsRequestContent** | [SuspendVpsRequestContent](SuspendVpsRequestContent.md) |  | |

### Return type

[**SuspendVpsResponseContent**](SuspendVpsResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SuspendVps 200 response |  -  |
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


## terminateVps

> TerminateVpsResponseContent terminateVps(terminateVpsRequestContent)



[Under development] Terminates a VPS service through WHMCS. This action is irreversible

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/sdk-typescript';
import type { TerminateVpsRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // TerminateVpsRequestContent
    terminateVpsRequestContent: ...,
  } satisfies TerminateVpsRequest;

  try {
    const data = await api.terminateVps(body);
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
| **terminateVpsRequestContent** | [TerminateVpsRequestContent](TerminateVpsRequestContent.md) |  | |

### Return type

[**TerminateVpsResponseContent**](TerminateVpsResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | TerminateVps 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
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
} from '@hostafrica/sdk-typescript';
import type { TriggerReinstallRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

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


## unsuspendVps

> UnsuspendVpsResponseContent unsuspendVps(unsuspendVpsRequestContent)



[Under development] Unsuspends a suspended VPS service through WHMCS. Can only unsuspend services that were suspended via API

### Example

```ts
import {
  Configuration,
  VPSManagementApi,
} from '@hostafrica/sdk-typescript';
import type { UnsuspendVpsRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new VPSManagementApi(config);

  const body = {
    // UnsuspendVpsRequestContent
    unsuspendVpsRequestContent: ...,
  } satisfies UnsuspendVpsRequest;

  try {
    const data = await api.unsuspendVps(body);
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
| **unsuspendVpsRequestContent** | [UnsuspendVpsRequestContent](UnsuspendVpsRequestContent.md) |  | |

### Return type

[**UnsuspendVpsResponseContent**](UnsuspendVpsResponseContent.md)

### Authorization

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UnsuspendVps 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
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
} from '@hostafrica/sdk-typescript';
import type { UpdateVpsConfigRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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

[smithy.api.httpBearerAuth](../README.md#smithy.api.httpBearerAuth)

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

