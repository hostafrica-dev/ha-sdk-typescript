# MonitoringApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createNotification**](MonitoringApi.md#createnotification) | **POST** /vps/create-notification |  |
| [**deleteNotification**](MonitoringApi.md#deletenotification) | **POST** /vps/delete-notification |  |
| [**listNotifications**](MonitoringApi.md#listnotifications) | **POST** /vps/list-notifications |  |
| [**updateNotification**](MonitoringApi.md#updatenotification) | **POST** /vps/update-notification |  |



## createNotification

> CreateNotificationResponseContent createNotification(createNotificationRequestContent)



Creates a new notification for a VPS service with customizable thresholds for CPU, memory, network, and disk metrics

### Example

```ts
import {
  Configuration,
  MonitoringApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CreateNotificationRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MonitoringApi(config);

  const body = {
    // CreateNotificationRequestContent
    createNotificationRequestContent: ...,
  } satisfies CreateNotificationRequest;

  try {
    const data = await api.createNotification(body);
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
| **createNotificationRequestContent** | [CreateNotificationRequestContent](CreateNotificationRequestContent.md) |  | |

### Return type

[**CreateNotificationResponseContent**](CreateNotificationResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreateNotification 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteNotification

> DeleteNotificationResponseContent deleteNotification(deleteNotificationRequestContent)



Deletes a notification from a VPS service

### Example

```ts
import {
  Configuration,
  MonitoringApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteNotificationRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MonitoringApi(config);

  const body = {
    // DeleteNotificationRequestContent
    deleteNotificationRequestContent: ...,
  } satisfies DeleteNotificationRequest;

  try {
    const data = await api.deleteNotification(body);
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
| **deleteNotificationRequestContent** | [DeleteNotificationRequestContent](DeleteNotificationRequestContent.md) |  | |

### Return type

[**DeleteNotificationResponseContent**](DeleteNotificationResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteNotification 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listNotifications

> ListNotificationsResponseContent listNotifications(listNotificationsRequestContent)



Retrieves the list of notifications for a VPS service along with dialog rules for creating notifications

### Example

```ts
import {
  Configuration,
  MonitoringApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListNotificationsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MonitoringApi(config);

  const body = {
    // ListNotificationsRequestContent
    listNotificationsRequestContent: ...,
  } satisfies ListNotificationsRequest;

  try {
    const data = await api.listNotifications(body);
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
| **listNotificationsRequestContent** | [ListNotificationsRequestContent](ListNotificationsRequestContent.md) |  | |

### Return type

[**ListNotificationsResponseContent**](ListNotificationsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListNotifications 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateNotification

> UpdateNotificationResponseContent updateNotification(updateNotificationRequestContent)



Updates an existing notification for a VPS service with customizable thresholds for CPU, memory, network, and disk metrics

### Example

```ts
import {
  Configuration,
  MonitoringApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdateNotificationRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MonitoringApi(config);

  const body = {
    // UpdateNotificationRequestContent
    updateNotificationRequestContent: ...,
  } satisfies UpdateNotificationRequest;

  try {
    const data = await api.updateNotification(body);
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
| **updateNotificationRequestContent** | [UpdateNotificationRequestContent](UpdateNotificationRequestContent.md) |  | |

### Return type

[**UpdateNotificationResponseContent**](UpdateNotificationResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateNotification 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

