# DNSApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRdnsRecord**](DNSApi.md#createrdnsrecord) | **POST** /dns/create-rdns-record |  |
| [**deleteRdnsRecord**](DNSApi.md#deleterdnsrecord) | **POST** /dns/delete-rdns-record |  |
| [**listRdnsRecords**](DNSApi.md#listrdnsrecords) | **POST** /dns/list-rdns-records |  |



## createRdnsRecord

> CreateRdnsRecordResponseContent createRdnsRecord(createRdnsRecordRequestContent)



Creates (or upserts) a PTR record for the authenticated client. If the client already owns a PTR for the same (serverid, ip) it is updated in place; if another client owns it a 409 is returned.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CreateRdnsRecordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // CreateRdnsRecordRequestContent
    createRdnsRecordRequestContent: ...,
  } satisfies CreateRdnsRecordRequest;

  try {
    const data = await api.createRdnsRecord(body);
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
| **createRdnsRecordRequestContent** | [CreateRdnsRecordRequestContent](CreateRdnsRecordRequestContent.md) |  | |

### Return type

[**CreateRdnsRecordResponseContent**](CreateRdnsRecordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreateRdnsRecord 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **409** | InvalidStateError 409 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRdnsRecord

> DeleteRdnsRecordResponseContent deleteRdnsRecord(deleteRdnsRecordRequestContent)



Deletes a PTR (rDNS) record owned by the authenticated client

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteRdnsRecordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // DeleteRdnsRecordRequestContent
    deleteRdnsRecordRequestContent: ...,
  } satisfies DeleteRdnsRecordRequest;

  try {
    const data = await api.deleteRdnsRecord(body);
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
| **deleteRdnsRecordRequestContent** | [DeleteRdnsRecordRequestContent](DeleteRdnsRecordRequestContent.md) |  | |

### Return type

[**DeleteRdnsRecordResponseContent**](DeleteRdnsRecordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteRdnsRecord 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRdnsRecords

> ListRdnsRecordsResponseContent listRdnsRecords()



Lists all rDNS (PTR) records and available services for the authenticated client

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListRdnsRecordsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  try {
    const data = await api.listRdnsRecords();
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

[**ListRdnsRecordsResponseContent**](ListRdnsRecordsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListRdnsRecords 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

