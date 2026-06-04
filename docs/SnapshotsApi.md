# SnapshotsApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSnapshot**](SnapshotsApi.md#createsnapshot) | **POST** /vps/create-snapshot |  |
| [**deleteSnapshot**](SnapshotsApi.md#deletesnapshot) | **POST** /vps/delete-snapshot |  |
| [**listSnapshots**](SnapshotsApi.md#listsnapshots) | **POST** /vps/list-snapshots |  |
| [**rollbackSnapshot**](SnapshotsApi.md#rollbacksnapshot) | **POST** /vps/rollback-snapshot |  |
| [**updateSnapshot**](SnapshotsApi.md#updatesnapshot) | **POST** /vps/update-snapshot |  |



## createSnapshot

> CreateSnapshotResponseContent createSnapshot(createSnapshotRequestContent)



Creates a new snapshot for a VPS service

### Example

```ts
import {
  Configuration,
  SnapshotsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CreateSnapshotRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SnapshotsApi(config);

  const body = {
    // CreateSnapshotRequestContent
    createSnapshotRequestContent: ...,
  } satisfies CreateSnapshotRequest;

  try {
    const data = await api.createSnapshot(body);
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
| **createSnapshotRequestContent** | [CreateSnapshotRequestContent](CreateSnapshotRequestContent.md) |  | |

### Return type

[**CreateSnapshotResponseContent**](CreateSnapshotResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreateSnapshot 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSnapshot

> DeleteSnapshotResponseContent deleteSnapshot(deleteSnapshotRequestContent)



Deletes a specific snapshot from a VPS service

### Example

```ts
import {
  Configuration,
  SnapshotsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteSnapshotRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SnapshotsApi(config);

  const body = {
    // DeleteSnapshotRequestContent
    deleteSnapshotRequestContent: ...,
  } satisfies DeleteSnapshotRequest;

  try {
    const data = await api.deleteSnapshot(body);
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
| **deleteSnapshotRequestContent** | [DeleteSnapshotRequestContent](DeleteSnapshotRequestContent.md) |  | |

### Return type

[**DeleteSnapshotResponseContent**](DeleteSnapshotResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteSnapshot 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSnapshots

> ListSnapshotsResponseContent listSnapshots(listSnapshotsRequestContent)



Retrieves the list of snapshots for a VPS service

### Example

```ts
import {
  Configuration,
  SnapshotsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListSnapshotsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SnapshotsApi(config);

  const body = {
    // ListSnapshotsRequestContent
    listSnapshotsRequestContent: ...,
  } satisfies ListSnapshotsRequest;

  try {
    const data = await api.listSnapshots(body);
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
| **listSnapshotsRequestContent** | [ListSnapshotsRequestContent](ListSnapshotsRequestContent.md) |  | |

### Return type

[**ListSnapshotsResponseContent**](ListSnapshotsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListSnapshots 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rollbackSnapshot

> RollbackSnapshotResponseContent rollbackSnapshot(rollbackSnapshotRequestContent)



[Under development] Rolls back a VPS to a previous snapshot state

### Example

```ts
import {
  Configuration,
  SnapshotsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { RollbackSnapshotRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SnapshotsApi(config);

  const body = {
    // RollbackSnapshotRequestContent
    rollbackSnapshotRequestContent: ...,
  } satisfies RollbackSnapshotRequest;

  try {
    const data = await api.rollbackSnapshot(body);
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
| **rollbackSnapshotRequestContent** | [RollbackSnapshotRequestContent](RollbackSnapshotRequestContent.md) |  | |

### Return type

[**RollbackSnapshotResponseContent**](RollbackSnapshotResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | RollbackSnapshot 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSnapshot

> UpdateSnapshotResponseContent updateSnapshot(updateSnapshotRequestContent)



Updates a snapshot\&#39;s metadata

### Example

```ts
import {
  Configuration,
  SnapshotsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdateSnapshotRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SnapshotsApi(config);

  const body = {
    // UpdateSnapshotRequestContent
    updateSnapshotRequestContent: ...,
  } satisfies UpdateSnapshotRequest;

  try {
    const data = await api.updateSnapshot(body);
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
| **updateSnapshotRequestContent** | [UpdateSnapshotRequestContent](UpdateSnapshotRequestContent.md) |  | |

### Return type

[**UpdateSnapshotResponseContent**](UpdateSnapshotResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateSnapshot 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

