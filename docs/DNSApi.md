# DNSApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDnsRecord**](DNSApi.md#adddnsrecord) | **POST** /dns/add-record |  |
| [**createRdnsRecord**](DNSApi.md#createrdnsrecord) | **POST** /dns/create-rdns-record |  |
| [**deleteDnsRecord**](DNSApi.md#deletednsrecord) | **POST** /dns/delete-record |  |
| [**deleteRdnsRecord**](DNSApi.md#deleterdnsrecord) | **POST** /dns/delete-rdns-record |  |
| [**editDnsRecord**](DNSApi.md#editdnsrecord) | **POST** /dns/edit-record |  |
| [**getDnsZoneDetails**](DNSApi.md#getdnszonedetails) | **POST** /dns/get-zone |  |
| [**listDnsCreateCandidates**](DNSApi.md#listdnscreatecandidates) | **POST** /dns/list-create-candidates |  |
| [**listDnsZones**](DNSApi.md#listdnszones) | **POST** /dns/list-zones |  |
| [**listRdnsRecords**](DNSApi.md#listrdnsrecords) | **POST** /dns/list-rdns-records |  |



## addDnsRecord

> AddDnsRecordResponseContent addDnsRecord(addDnsRecordRequestContent)



Adds a DNS record to a zone via DNSManager.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { AddDnsRecordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // AddDnsRecordRequestContent
    addDnsRecordRequestContent: ...,
  } satisfies AddDnsRecordRequest;

  try {
    const data = await api.addDnsRecord(body);
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
| **addDnsRecordRequestContent** | [AddDnsRecordRequestContent](AddDnsRecordRequestContent.md) |  | |

### Return type

[**AddDnsRecordResponseContent**](AddDnsRecordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | AddDnsRecord 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


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


## deleteDnsRecord

> DeleteDnsRecordResponseContent deleteDnsRecord(deleteDnsRecordRequestContent)



Deletes a DNS record from a zone via DNSManager.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteDnsRecordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // DeleteDnsRecordRequestContent
    deleteDnsRecordRequestContent: ...,
  } satisfies DeleteDnsRecordRequest;

  try {
    const data = await api.deleteDnsRecord(body);
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
| **deleteDnsRecordRequestContent** | [DeleteDnsRecordRequestContent](DeleteDnsRecordRequestContent.md) |  | |

### Return type

[**DeleteDnsRecordResponseContent**](DeleteDnsRecordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteDnsRecord 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
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


## editDnsRecord

> EditDnsRecordResponseContent editDnsRecord(editDnsRecordRequestContent)



Edits a DNS record in a zone via DNSManager.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { EditDnsRecordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // EditDnsRecordRequestContent
    editDnsRecordRequestContent: ...,
  } satisfies EditDnsRecordRequest;

  try {
    const data = await api.editDnsRecord(body);
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
| **editDnsRecordRequestContent** | [EditDnsRecordRequestContent](EditDnsRecordRequestContent.md) |  | |

### Return type

[**EditDnsRecordResponseContent**](EditDnsRecordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | EditDnsRecord 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDnsZoneDetails

> GetDnsZoneDetailsResponseContent getDnsZoneDetails(getDnsZoneDetailsRequestContent)



Retrieves DNS zone details and records for an owned domain.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { GetDnsZoneDetailsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // GetDnsZoneDetailsRequestContent
    getDnsZoneDetailsRequestContent: ...,
  } satisfies GetDnsZoneDetailsRequest;

  try {
    const data = await api.getDnsZoneDetails(body);
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
| **getDnsZoneDetailsRequestContent** | [GetDnsZoneDetailsRequestContent](GetDnsZoneDetailsRequestContent.md) |  | |

### Return type

[**GetDnsZoneDetailsResponseContent**](GetDnsZoneDetailsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetDnsZoneDetails 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDnsCreateCandidates

> ListDnsCreateCandidatesResponseContent listDnsCreateCandidates()



Lists domains and services eligible for new DNS zone creation.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListDnsCreateCandidatesRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  try {
    const data = await api.listDnsCreateCandidates();
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

[**ListDnsCreateCandidatesResponseContent**](ListDnsCreateCandidatesResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListDnsCreateCandidates 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDnsZones

> ListDnsZonesResponseContent listDnsZones()



Lists DNS zones belonging to the authenticated client.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListDnsZonesRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  try {
    const data = await api.listDnsZones();
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

[**ListDnsZonesResponseContent**](ListDnsZonesResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListDnsZones 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
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

