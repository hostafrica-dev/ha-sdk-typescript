# PowerManagementApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPowerTask**](PowerManagementApi.md#createpowertask) | **POST** /vps/create-power-task |  |
| [**deletePowerTask**](PowerManagementApi.md#deletepowertask) | **POST** /vps/delete-power-task |  |
| [**listPowerTasks**](PowerManagementApi.md#listpowertasks) | **POST** /vps/list-power-tasks |  |
| [**rebootVps**](PowerManagementApi.md#rebootvps) | **POST** /vps/reboot |  |
| [**shutdownVps**](PowerManagementApi.md#shutdownvps) | **POST** /vps/shutdown |  |
| [**startVps**](PowerManagementApi.md#startvps) | **POST** /vps/start |  |
| [**stopVps**](PowerManagementApi.md#stopvps) | **POST** /vps/stop |  |
| [**updatePowerTask**](PowerManagementApi.md#updatepowertask) | **POST** /vps/update-power-task |  |



## createPowerTask

> CreatePowerTaskResponseContent createPowerTask(createPowerTaskRequestContent)



Creates a new power task (scheduled start/stop/restart operation) for a VPS service

### Example

```ts
import {
  Configuration,
  PowerManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CreatePowerTaskRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PowerManagementApi(config);

  const body = {
    // CreatePowerTaskRequestContent
    createPowerTaskRequestContent: ...,
  } satisfies CreatePowerTaskRequest;

  try {
    const data = await api.createPowerTask(body);
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
| **createPowerTaskRequestContent** | [CreatePowerTaskRequestContent](CreatePowerTaskRequestContent.md) |  | |

### Return type

[**CreatePowerTaskResponseContent**](CreatePowerTaskResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreatePowerTask 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePowerTask

> DeletePowerTaskResponseContent deletePowerTask(deletePowerTaskRequestContent)



Deletes a power task from a VPS service

### Example

```ts
import {
  Configuration,
  PowerManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeletePowerTaskRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PowerManagementApi(config);

  const body = {
    // DeletePowerTaskRequestContent
    deletePowerTaskRequestContent: ...,
  } satisfies DeletePowerTaskRequest;

  try {
    const data = await api.deletePowerTask(body);
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
| **deletePowerTaskRequestContent** | [DeletePowerTaskRequestContent](DeletePowerTaskRequestContent.md) |  | |

### Return type

[**DeletePowerTaskResponseContent**](DeletePowerTaskResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeletePowerTask 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPowerTasks

> ListPowerTasksResponseContent listPowerTasks(listPowerTasksRequestContent)



Retrieves the list of power tasks (scheduled start/stop/restart operations) for a VPS service

### Example

```ts
import {
  Configuration,
  PowerManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListPowerTasksRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PowerManagementApi(config);

  const body = {
    // ListPowerTasksRequestContent
    listPowerTasksRequestContent: ...,
  } satisfies ListPowerTasksRequest;

  try {
    const data = await api.listPowerTasks(body);
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
| **listPowerTasksRequestContent** | [ListPowerTasksRequestContent](ListPowerTasksRequestContent.md) |  | |

### Return type

[**ListPowerTasksResponseContent**](ListPowerTasksResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListPowerTasks 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rebootVps

> RebootVpsResponseContent rebootVps(rebootVpsRequestContent)



Gracefully reboot a VPS service. Sends ACPI reboot signal to guest OS

### Example

```ts
import {
  Configuration,
  PowerManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { RebootVpsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PowerManagementApi(config);

  const body = {
    // RebootVpsRequestContent
    rebootVpsRequestContent: ...,
  } satisfies RebootVpsRequest;

  try {
    const data = await api.rebootVps(body);
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
| **rebootVpsRequestContent** | [RebootVpsRequestContent](RebootVpsRequestContent.md) |  | |

### Return type

[**RebootVpsResponseContent**](RebootVpsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | RebootVps 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## shutdownVps

> ShutdownVpsResponseContent shutdownVps(shutdownVpsRequestContent)



Gracefully shutdown a VPS service. Sends ACPI shutdown signal to guest OS

### Example

```ts
import {
  Configuration,
  PowerManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ShutdownVpsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PowerManagementApi(config);

  const body = {
    // ShutdownVpsRequestContent
    shutdownVpsRequestContent: ...,
  } satisfies ShutdownVpsRequest;

  try {
    const data = await api.shutdownVps(body);
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
| **shutdownVpsRequestContent** | [ShutdownVpsRequestContent](ShutdownVpsRequestContent.md) |  | |

### Return type

[**ShutdownVpsResponseContent**](ShutdownVpsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ShutdownVps 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startVps

> StartVpsResponseContent startVps(startVpsRequestContent)



Starts a stopped VPS service

### Example

```ts
import {
  Configuration,
  PowerManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { StartVpsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PowerManagementApi(config);

  const body = {
    // StartVpsRequestContent
    startVpsRequestContent: ...,
  } satisfies StartVpsRequest;

  try {
    const data = await api.startVps(body);
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
| **startVpsRequestContent** | [StartVpsRequestContent](StartVpsRequestContent.md) |  | |

### Return type

[**StartVpsResponseContent**](StartVpsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | StartVps 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stopVps

> StopVpsResponseContent stopVps(stopVpsRequestContent)



Hard stops a running VPS service

### Example

```ts
import {
  Configuration,
  PowerManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { StopVpsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PowerManagementApi(config);

  const body = {
    // StopVpsRequestContent
    stopVpsRequestContent: ...,
  } satisfies StopVpsRequest;

  try {
    const data = await api.stopVps(body);
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
| **stopVpsRequestContent** | [StopVpsRequestContent](StopVpsRequestContent.md) |  | |

### Return type

[**StopVpsResponseContent**](StopVpsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | StopVps 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePowerTask

> UpdatePowerTaskResponseContent updatePowerTask(updatePowerTaskRequestContent)



Updates an existing power task (scheduled start/stop/restart operation) for a VPS service

### Example

```ts
import {
  Configuration,
  PowerManagementApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdatePowerTaskRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PowerManagementApi(config);

  const body = {
    // UpdatePowerTaskRequestContent
    updatePowerTaskRequestContent: ...,
  } satisfies UpdatePowerTaskRequest;

  try {
    const data = await api.updatePowerTask(body);
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
| **updatePowerTaskRequestContent** | [UpdatePowerTaskRequestContent](UpdatePowerTaskRequestContent.md) |  | |

### Return type

[**UpdatePowerTaskResponseContent**](UpdatePowerTaskResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdatePowerTask 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

