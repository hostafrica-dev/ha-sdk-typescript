# BackupsApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBackup**](BackupsApi.md#createbackup) | **POST** /vps/create-backup |  |
| [**createBackupSchedule**](BackupsApi.md#createbackupschedule) | **POST** /vps/create-backup-schedule |  |
| [**deleteBackup**](BackupsApi.md#deletebackup) | **POST** /vps/delete-backup |  |
| [**deleteBackupSchedule**](BackupsApi.md#deletebackupschedule) | **POST** /vps/delete-backup-schedule |  |
| [**editBackupSchedule**](BackupsApi.md#editbackupschedule) | **POST** /vps/edit-backup-schedule |  |
| [**listBackupSchedules**](BackupsApi.md#listbackupschedules) | **POST** /vps/list-backup-schedules |  |
| [**listBackups**](BackupsApi.md#listbackups) | **POST** /vps/list-backups |  |
| [**restoreBackup**](BackupsApi.md#restorebackup) | **POST** /vps/restore-backup |  |



## createBackup

> CreateBackupResponseContent createBackup(createBackupRequestContent)



Creates a new backup for a VPS service

### Example

```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CreateBackupRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BackupsApi(config);

  const body = {
    // CreateBackupRequestContent
    createBackupRequestContent: ...,
  } satisfies CreateBackupRequest;

  try {
    const data = await api.createBackup(body);
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
| **createBackupRequestContent** | [CreateBackupRequestContent](CreateBackupRequestContent.md) |  | |

### Return type

[**CreateBackupResponseContent**](CreateBackupResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreateBackup 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBackupSchedule

> CreateBackupScheduleResponseContent createBackupSchedule(createBackupScheduleRequestContent)



Creates a new backup schedule for a VPS service

### Example

```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CreateBackupScheduleRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BackupsApi(config);

  const body = {
    // CreateBackupScheduleRequestContent
    createBackupScheduleRequestContent: ...,
  } satisfies CreateBackupScheduleRequest;

  try {
    const data = await api.createBackupSchedule(body);
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
| **createBackupScheduleRequestContent** | [CreateBackupScheduleRequestContent](CreateBackupScheduleRequestContent.md) |  | |

### Return type

[**CreateBackupScheduleResponseContent**](CreateBackupScheduleResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreateBackupSchedule 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBackup

> DeleteBackupResponseContent deleteBackup(deleteBackupRequestContent)



Deletes a specific backup from a VPS service

### Example

```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteBackupRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BackupsApi(config);

  const body = {
    // DeleteBackupRequestContent
    deleteBackupRequestContent: ...,
  } satisfies DeleteBackupRequest;

  try {
    const data = await api.deleteBackup(body);
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
| **deleteBackupRequestContent** | [DeleteBackupRequestContent](DeleteBackupRequestContent.md) |  | |

### Return type

[**DeleteBackupResponseContent**](DeleteBackupResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteBackup 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBackupSchedule

> DeleteBackupScheduleResponseContent deleteBackupSchedule(deleteBackupScheduleRequestContent)



Deletes a backup schedule from a VPS service

### Example

```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteBackupScheduleRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BackupsApi(config);

  const body = {
    // DeleteBackupScheduleRequestContent
    deleteBackupScheduleRequestContent: ...,
  } satisfies DeleteBackupScheduleRequest;

  try {
    const data = await api.deleteBackupSchedule(body);
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
| **deleteBackupScheduleRequestContent** | [DeleteBackupScheduleRequestContent](DeleteBackupScheduleRequestContent.md) |  | |

### Return type

[**DeleteBackupScheduleResponseContent**](DeleteBackupScheduleResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteBackupSchedule 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editBackupSchedule

> EditBackupScheduleResponseContent editBackupSchedule(editBackupScheduleRequestContent)



Edits an existing backup schedule for a VPS service

### Example

```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { EditBackupScheduleRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BackupsApi(config);

  const body = {
    // EditBackupScheduleRequestContent
    editBackupScheduleRequestContent: ...,
  } satisfies EditBackupScheduleRequest;

  try {
    const data = await api.editBackupSchedule(body);
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
| **editBackupScheduleRequestContent** | [EditBackupScheduleRequestContent](EditBackupScheduleRequestContent.md) |  | |

### Return type

[**EditBackupScheduleResponseContent**](EditBackupScheduleResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | EditBackupSchedule 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBackupSchedules

> ListBackupSchedulesResponseContent listBackupSchedules(listBackupSchedulesRequestContent)



Retrieves the list of backup schedules for a VPS service

### Example

```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListBackupSchedulesRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BackupsApi(config);

  const body = {
    // ListBackupSchedulesRequestContent
    listBackupSchedulesRequestContent: ...,
  } satisfies ListBackupSchedulesRequest;

  try {
    const data = await api.listBackupSchedules(body);
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
| **listBackupSchedulesRequestContent** | [ListBackupSchedulesRequestContent](ListBackupSchedulesRequestContent.md) |  | |

### Return type

[**ListBackupSchedulesResponseContent**](ListBackupSchedulesResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListBackupSchedules 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBackups

> ListBackupsResponseContent listBackups(listBackupsRequestContent)



Retrieves the list of backups for a VPS service including quota information and backup configuration options

### Example

```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListBackupsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BackupsApi(config);

  const body = {
    // ListBackupsRequestContent
    listBackupsRequestContent: ...,
  } satisfies ListBackupsRequest;

  try {
    const data = await api.listBackups(body);
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
| **listBackupsRequestContent** | [ListBackupsRequestContent](ListBackupsRequestContent.md) |  | |

### Return type

[**ListBackupsResponseContent**](ListBackupsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListBackups 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## restoreBackup

> RestoreBackupResponseContent restoreBackup(restoreBackupRequestContent)



Restores a VPS from a backup with the specified backup identifier

### Example

```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { RestoreBackupRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BackupsApi(config);

  const body = {
    // RestoreBackupRequestContent
    restoreBackupRequestContent: ...,
  } satisfies RestoreBackupRequest;

  try {
    const data = await api.restoreBackup(body);
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
| **restoreBackupRequestContent** | [RestoreBackupRequestContent](RestoreBackupRequestContent.md) |  | |

### Return type

[**RestoreBackupResponseContent**](RestoreBackupResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | RestoreBackup 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

