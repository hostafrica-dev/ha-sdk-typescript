# DNSApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDnsRecord**](DNSApi.md#adddnsrecord) | **POST** /dns/add-record |  |
| [**createDnsZone**](DNSApi.md#creatednszone) | **POST** /dns/create-zone |  |
| [**createRdnsRecord**](DNSApi.md#createrdnsrecord) | **POST** /dns/create-rdns-record |  |
| [**deleteDnsRecord**](DNSApi.md#deletednsrecord) | **POST** /dns/delete-record |  |
| [**deleteDnsZone**](DNSApi.md#deletednszone) | **POST** /dns/delete-zone |  |
| [**deleteRdnsRecord**](DNSApi.md#deleterdnsrecord) | **POST** /dns/delete-rdns-record |  |
| [**editDnsRecord**](DNSApi.md#editdnsrecord) | **POST** /dns/edit-record |  |
| [**editRdnsRecord**](DNSApi.md#editrdnsrecord) | **POST** /dns/edit-rdns-record |  |
| [**getDnsZoneDetails**](DNSApi.md#getdnszonedetails) | **POST** /dns/get-zone |  |
| [**listDnsCreateCandidates**](DNSApi.md#listdnscreatecandidates) | **POST** /dns/list-create-candidates |  |
| [**listDnsZones**](DNSApi.md#listdnszones) | **POST** /dns/list-zones |  |
| [**listRdnsRecords**](DNSApi.md#listrdnsrecords) | **POST** /dns/list-rdns-records |  |



## addDnsRecord

> AddDnsRecordResponseContent addDnsRecord(addDnsRecordRequestContent)



Adds a DNS record to a zone. Legacy callers pass zone_id only (DNS Manager v1). For DirectAdmin, pass backend&#x3D;directadmin with domain_id; upstream v2 receives domain_id and record only.

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


## createDnsZone

> CreateDnsZoneResponseContent createDnsZone(createDnsZoneRequestContent)



Creates a DNS zone for an owned domain. Prefer list-dns-create-candidates first. domain_id and zone_ip are required. Also send service_id from hosting_id when the domain has linked hosting or backend will be directadmin. Optional type/relid select the DNS package (relid from create-candidates); otherwise upstream picks the first eligible package. Do not send zone_id — the zone does not exist yet.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CreateDnsZoneRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // CreateDnsZoneRequestContent
    createDnsZoneRequestContent: ...,
  } satisfies CreateDnsZoneRequest;

  try {
    const data = await api.createDnsZone(body);
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
| **createDnsZoneRequestContent** | [CreateDnsZoneRequestContent](CreateDnsZoneRequestContent.md) |  | |

### Return type

[**CreateDnsZoneResponseContent**](CreateDnsZoneResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreateDnsZone 200 response |  -  |
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



Deletes a DNS record from a zone. Legacy callers pass zone_id only (DNS Manager v1). For DirectAdmin, pass backend&#x3D;directadmin with domain_id; upstream v2 receives domain_id and record only.

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


## deleteDnsZone

> DeleteDnsZoneResponseContent deleteDnsZone(deleteDnsZoneRequestContent)



Deletes a live DNS Manager zone (all records). zone_id from list-dns-zones is required. Optional domain_id/service_id are forwarded when present. DirectAdmin rows with null zone_id are not supported by upstream deletezone.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteDnsZoneRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // DeleteDnsZoneRequestContent
    deleteDnsZoneRequestContent: ...,
  } satisfies DeleteDnsZoneRequest;

  try {
    const data = await api.deleteDnsZone(body);
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
| **deleteDnsZoneRequestContent** | [DeleteDnsZoneRequestContent](DeleteDnsZoneRequestContent.md) |  | |

### Return type

[**DeleteDnsZoneResponseContent**](DeleteDnsZoneResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteDnsZone 200 response |  -  |
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



Edits a DNS record in a zone. Legacy callers pass zone_id only (DNS Manager v1). For DirectAdmin, pass backend&#x3D;directadmin with domain_id; upstream v2 receives domain_id and record only.

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


## editRdnsRecord

> EditRdnsRecordResponseContent editRdnsRecord(editRdnsRecordRequestContent)



Updates the hostname and optional TTL of a PTR (rDNS) record owned by the authenticated client. The record_id remains valid after the call.

### Example

```ts
import {
  Configuration,
  DNSApi,
} from '@hostafrica/ha-sdk-typescript';
import type { EditRdnsRecordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSApi(config);

  const body = {
    // EditRdnsRecordRequestContent
    editRdnsRecordRequestContent: ...,
  } satisfies EditRdnsRecordRequest;

  try {
    const data = await api.editRdnsRecord(body);
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
| **editRdnsRecordRequestContent** | [EditRdnsRecordRequestContent](EditRdnsRecordRequestContent.md) |  | |

### Return type

[**EditRdnsRecordResponseContent**](EditRdnsRecordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | EditRdnsRecord 200 response |  -  |
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



Retrieves DNS zone details and records for an owned domain. Omit backend for the legacy DNS Manager (v1) path; set backend from list-dns-zones to route DirectAdmin zones to v2.

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



Lists DNS zones belonging to the authenticated client. Use each row\&#39;s ids on later calls: domain_id preferred; zone_id for dns_manager record/zone mutations; hosting_id as service_id when domain_id is null (hosting-only zone).

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

