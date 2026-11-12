# DomainsApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDnssecRecord**](DomainsApi.md#adddnssecrecord) | **POST** /domain/add-dnssec-record |  |
| [**addDomainRedirect**](DomainsApi.md#adddomainredirect) | **POST** /domain/add-redirect |  |
| [**checkDomainAvailability**](DomainsApi.md#checkdomainavailability) | **POST** /domain/check-availability |  |
| [**deleteDnssecRecord**](DomainsApi.md#deletednssecrecord) | **POST** /domain/delete-dnssec-record |  |
| [**deleteDomainRedirect**](DomainsApi.md#deletedomainredirect) | **POST** /domain/delete-redirect |  |
| [**deletePrivateNameserver**](DomainsApi.md#deleteprivatenameserver) | **POST** /domain/delete-private-nameserver |  |
| [**getDomain**](DomainsApi.md#getdomain) | **POST** /domain/get-domain |  |
| [**getDomainContacts**](DomainsApi.md#getdomaincontacts) | **POST** /domain/get-domain-contacts |  |
| [**getDomainRedirectDetails**](DomainsApi.md#getdomainredirectdetails) | **POST** /domain/get-redirect-details |  |
| [**listDnssecRecords**](DomainsApi.md#listdnssecrecords) | **POST** /domain/list-dnssec-records |  |
| [**listDomainRedirects**](DomainsApi.md#listdomainredirects) | **POST** /domain/list-redirects |  |
| [**listDomains**](DomainsApi.md#listdomains) | **POST** /domain/list-domains |  |
| [**listDomainsRequiringData**](DomainsApi.md#listdomainsrequiringdata) | **POST** /domain/list-domains-requiring-data |  |
| [**modifyPrivateNameserver**](DomainsApi.md#modifyprivatenameserver) | **POST** /domain/modify-private-nameserver |  |
| [**registerPrivateNameserver**](DomainsApi.md#registerprivatenameserver) | **POST** /domain/register-private-nameserver |  |
| [**saveDomainRequiredData**](DomainsApi.md#savedomainrequireddata) | **POST** /domain/save-domain-required-data |  |
| [**suggestDomains**](DomainsApi.md#suggestdomains) | **POST** /domain/suggest |  |
| [**updateDomainContacts**](DomainsApi.md#updatedomaincontacts) | **POST** /domain/update-domain-contacts |  |
| [**updateDomainLockStatus**](DomainsApi.md#updatedomainlockstatus) | **POST** /domain/update-lock-status |  |
| [**updateDomainNameservers**](DomainsApi.md#updatedomainnameservers) | **POST** /domain/update-nameservers |  |
| [**updateDomainSettings**](DomainsApi.md#updatedomainsettings) | **POST** /domain/update-domain-settings |  |



## addDnssecRecord

> AddDnssecRecordResponseContent addDnssecRecord(addDnssecRecordRequestContent)



Adds a DNSSEC DS record for an owned domain on supported registrars.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { AddDnssecRecordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // AddDnssecRecordRequestContent
    addDnssecRecordRequestContent: ...,
  } satisfies AddDnssecRecordRequest;

  try {
    const data = await api.addDnssecRecord(body);
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
| **addDnssecRecordRequestContent** | [AddDnssecRecordRequestContent](AddDnssecRecordRequestContent.md) |  | |

### Return type

[**AddDnssecRecordResponseContent**](AddDnssecRecordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | AddDnssecRecord 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addDomainRedirect

> AddDomainRedirectResponseContent addDomainRedirect(addDomainRedirectRequestContent)



Creates or updates HTTP redirect configuration for an owned domain. Upstream may create a DNS zone and point @/www A records at the redirector. If conflicting A records exist, retry with override&#x3D;true after confirming via get-redirect-details.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { AddDomainRedirectRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // AddDomainRedirectRequestContent
    addDomainRedirectRequestContent: ...,
  } satisfies AddDomainRedirectRequest;

  try {
    const data = await api.addDomainRedirect(body);
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
| **addDomainRedirectRequestContent** | [AddDomainRedirectRequestContent](AddDomainRedirectRequestContent.md) |  | |

### Return type

[**AddDomainRedirectResponseContent**](AddDomainRedirectResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | AddDomainRedirect 200 response |  -  |
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


## checkDomainAvailability

> CheckDomainAvailabilityResponseContent checkDomainAvailability(checkDomainAvailabilityRequestContent)



Use to check availability/pricing for known domain names. Pass exactly one of domain or domains (comma-separated, max 20); API rejects both omitted or both set. Optional currency (default ZAR). Returns availability, prices, and an external register_url. Prefer suggest_domains for name ideas.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CheckDomainAvailabilityRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // CheckDomainAvailabilityRequestContent (optional)
    checkDomainAvailabilityRequestContent: ...,
  } satisfies CheckDomainAvailabilityRequest;

  try {
    const data = await api.checkDomainAvailability(body);
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
| **checkDomainAvailabilityRequestContent** | [CheckDomainAvailabilityRequestContent](CheckDomainAvailabilityRequestContent.md) |  | [Optional] |

### Return type

[**CheckDomainAvailabilityResponseContent**](CheckDomainAvailabilityResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CheckDomainAvailability 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDnssecRecord

> DeleteDnssecRecordResponseContent deleteDnssecRecord(deleteDnssecRecordRequestContent)



Removes a DNSSEC DS record from an owned domain on supported registrars.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteDnssecRecordRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // DeleteDnssecRecordRequestContent
    deleteDnssecRecordRequestContent: ...,
  } satisfies DeleteDnssecRecordRequest;

  try {
    const data = await api.deleteDnssecRecord(body);
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
| **deleteDnssecRecordRequestContent** | [DeleteDnssecRecordRequestContent](DeleteDnssecRecordRequestContent.md) |  | |

### Return type

[**DeleteDnssecRecordResponseContent**](DeleteDnssecRecordResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteDnssecRecord 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDomainRedirect

> DeleteDomainRedirectResponseContent deleteDomainRedirect(deleteDomainRedirectRequestContent)



Removes redirect configuration for an owned domain from the redirector service. DNS records and zones are not modified.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteDomainRedirectRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // DeleteDomainRedirectRequestContent
    deleteDomainRedirectRequestContent: ...,
  } satisfies DeleteDomainRedirectRequest;

  try {
    const data = await api.deleteDomainRedirect(body);
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
| **deleteDomainRedirectRequestContent** | [DeleteDomainRedirectRequestContent](DeleteDomainRedirectRequestContent.md) |  | |

### Return type

[**DeleteDomainRedirectResponseContent**](DeleteDomainRedirectResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteDomainRedirect 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePrivateNameserver

> DeletePrivateNameserverResponseContent deletePrivateNameserver(deletePrivateNameserverRequestContent)



Deletes a private/child nameserver glue host for an owned domain.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeletePrivateNameserverRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // DeletePrivateNameserverRequestContent
    deletePrivateNameserverRequestContent: ...,
  } satisfies DeletePrivateNameserverRequest;

  try {
    const data = await api.deletePrivateNameserver(body);
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
| **deletePrivateNameserverRequestContent** | [DeletePrivateNameserverRequestContent](DeletePrivateNameserverRequestContent.md) |  | |

### Return type

[**DeletePrivateNameserverResponseContent**](DeletePrivateNameserverResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeletePrivateNameserver 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDomain

> GetDomainResponseContent getDomain(getDomainRequestContent)



Gets details for an owned domain.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { GetDomainRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // GetDomainRequestContent
    getDomainRequestContent: ...,
  } satisfies GetDomainRequest;

  try {
    const data = await api.getDomain(body);
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
| **getDomainRequestContent** | [GetDomainRequestContent](GetDomainRequestContent.md) |  | |

### Return type

[**GetDomainResponseContent**](GetDomainResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetDomain 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDomainContacts

> GetDomainContactsResponseContent getDomainContacts(getDomainContactsRequestContent)



Retrieves WHOIS contact information for an owned domain. Contact field names vary by TLD and registrar; use the returned structure when building custom contact update payloads.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { GetDomainContactsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // GetDomainContactsRequestContent
    getDomainContactsRequestContent: ...,
  } satisfies GetDomainContactsRequest;

  try {
    const data = await api.getDomainContacts(body);
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
| **getDomainContactsRequestContent** | [GetDomainContactsRequestContent](GetDomainContactsRequestContent.md) |  | |

### Return type

[**GetDomainContactsResponseContent**](GetDomainContactsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetDomainContacts 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDomainRedirectDetails

> GetDomainRedirectDetailsResponseContent getDomainRedirectDetails(getDomainRedirectDetailsRequestContent)



Retrieves redirect configuration and DNS readiness flags for an owned domain.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { GetDomainRedirectDetailsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // GetDomainRedirectDetailsRequestContent
    getDomainRedirectDetailsRequestContent: ...,
  } satisfies GetDomainRedirectDetailsRequest;

  try {
    const data = await api.getDomainRedirectDetails(body);
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
| **getDomainRedirectDetailsRequestContent** | [GetDomainRedirectDetailsRequestContent](GetDomainRedirectDetailsRequestContent.md) |  | |

### Return type

[**GetDomainRedirectDetailsResponseContent**](GetDomainRedirectDetailsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | GetDomainRedirectDetails 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDnssecRecords

> ListDnssecRecordsResponseContent listDnssecRecords(listDnssecRecordsRequestContent)



Lists DNSSEC DS records configured for an owned domain.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListDnssecRecordsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // ListDnssecRecordsRequestContent
    listDnssecRecordsRequestContent: ...,
  } satisfies ListDnssecRecordsRequest;

  try {
    const data = await api.listDnssecRecords(body);
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
| **listDnssecRecordsRequestContent** | [ListDnssecRecordsRequestContent](ListDnssecRecordsRequestContent.md) |  | |

### Return type

[**ListDnssecRecordsResponseContent**](ListDnssecRecordsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListDnssecRecords 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDomainRedirects

> ListDomainRedirectsResponseContent listDomainRedirects()



Lists configured domain redirects for the authenticated client.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListDomainRedirectsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  try {
    const data = await api.listDomainRedirects();
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

[**ListDomainRedirectsResponseContent**](ListDomainRedirectsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListDomainRedirects 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDomains

> ListDomainsResponseContent listDomains()



List all domains belonging to the authenticated client.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListDomainsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  try {
    const data = await api.listDomains();
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

[**ListDomainsResponseContent**](ListDomainsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListDomains 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDomainsRequiringData

> ListDomainsRequiringDataResponseContent listDomainsRequiringData()



Lists domains belonging to the authenticated client that require additional registrar or contact data.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListDomainsRequiringDataRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  try {
    const data = await api.listDomainsRequiringData();
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

[**ListDomainsRequiringDataResponseContent**](ListDomainsRequiringDataResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListDomainsRequiringData 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modifyPrivateNameserver

> ModifyPrivateNameserverResponseContent modifyPrivateNameserver(modifyPrivateNameserverRequestContent)



Modifies a private/child nameserver. Provide at least one of new_nameserver or new_ip_address. Some registrars (COZA/COCCA) require new_ip_address and reject hostname changes.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ModifyPrivateNameserverRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // ModifyPrivateNameserverRequestContent
    modifyPrivateNameserverRequestContent: ...,
  } satisfies ModifyPrivateNameserverRequest;

  try {
    const data = await api.modifyPrivateNameserver(body);
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
| **modifyPrivateNameserverRequestContent** | [ModifyPrivateNameserverRequestContent](ModifyPrivateNameserverRequestContent.md) |  | |

### Return type

[**ModifyPrivateNameserverResponseContent**](ModifyPrivateNameserverResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ModifyPrivateNameserver 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerPrivateNameserver

> RegisterPrivateNameserverResponseContent registerPrivateNameserver(registerPrivateNameserverRequestContent)



Registers a private/child nameserver (glue host) under an owned domain. Requires available_features.private_nameservers on get-domain. Distinct from update-nameservers.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { RegisterPrivateNameserverRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // RegisterPrivateNameserverRequestContent
    registerPrivateNameserverRequestContent: ...,
  } satisfies RegisterPrivateNameserverRequest;

  try {
    const data = await api.registerPrivateNameserver(body);
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
| **registerPrivateNameserverRequestContent** | [RegisterPrivateNameserverRequestContent](RegisterPrivateNameserverRequestContent.md) |  | |

### Return type

[**RegisterPrivateNameserverResponseContent**](RegisterPrivateNameserverResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | RegisterPrivateNameserver 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## saveDomainRequiredData

> SaveDomainRequiredDataResponseContent saveDomainRequiredData(saveDomainRequiredDataRequestContent)



Saves additional registrar field values for a pending domain. Keys must match additionalFields[].name from list-domains-requiring-data.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { SaveDomainRequiredDataRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // SaveDomainRequiredDataRequestContent
    saveDomainRequiredDataRequestContent: ...,
  } satisfies SaveDomainRequiredDataRequest;

  try {
    const data = await api.saveDomainRequiredData(body);
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
| **saveDomainRequiredDataRequestContent** | [SaveDomainRequiredDataRequestContent](SaveDomainRequiredDataRequestContent.md) |  | |

### Return type

[**SaveDomainRequiredDataResponseContent**](SaveDomainRequiredDataResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SaveDomainRequiredData 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## suggestDomains

> SuggestDomainsResponseContent suggestDomains(suggestDomainsRequestContent)



Use for domain name ideas from a description. For specific domains, use check_domain_availability.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { SuggestDomainsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // SuggestDomainsRequestContent
    suggestDomainsRequestContent: ...,
  } satisfies SuggestDomainsRequest;

  try {
    const data = await api.suggestDomains(body);
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
| **suggestDomainsRequestContent** | [SuggestDomainsRequestContent](SuggestDomainsRequestContent.md) |  | |

### Return type

[**SuggestDomainsResponseContent**](SuggestDomainsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | SuggestDomains 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDomainContacts

> UpdateDomainContactsResponseContent updateDomainContacts(updateDomainContactsRequestContent)



Updates WHOIS contact information for an owned domain. Each role (Registrant, Admin, Tech, Billing) uses a source type: owner (client profile), contact (saved WHMCS contact id), or custom (inline WHOIS fields). WHOIS values must be nested under fields; for owner and contact they are flattened upstream when present.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdateDomainContactsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // UpdateDomainContactsRequestContent
    updateDomainContactsRequestContent: ...,
  } satisfies UpdateDomainContactsRequest;

  try {
    const data = await api.updateDomainContacts(body);
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
| **updateDomainContactsRequestContent** | [UpdateDomainContactsRequestContent](UpdateDomainContactsRequestContent.md) |  | |

### Return type

[**UpdateDomainContactsResponseContent**](UpdateDomainContactsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateDomainContacts 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDomainLockStatus

> UpdateDomainLockStatusResponseContent updateDomainLockStatus(updateDomainLockStatusRequestContent)



Sets the registrar transfer lock for an owned domain. When the account has 2FA enabled, upstream may return 403 until two_fa_code (or two_fa_backup) is supplied.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdateDomainLockStatusRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // UpdateDomainLockStatusRequestContent
    updateDomainLockStatusRequestContent: ...,
  } satisfies UpdateDomainLockStatusRequest;

  try {
    const data = await api.updateDomainLockStatus(body);
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
| **updateDomainLockStatusRequestContent** | [UpdateDomainLockStatusRequestContent](UpdateDomainLockStatusRequestContent.md) |  | |

### Return type

[**UpdateDomainLockStatusResponseContent**](UpdateDomainLockStatusResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateDomainLockStatus 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDomainNameservers

> UpdateDomainNameserversResponseContent updateDomainNameservers(updateDomainNameserversRequestContent)



Updates nameservers for an owned domain. ns1 and ns2 are required; ns3 through ns5 are optional.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdateDomainNameserversRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // UpdateDomainNameserversRequestContent
    updateDomainNameserversRequestContent: ...,
  } satisfies UpdateDomainNameserversRequest;

  try {
    const data = await api.updateDomainNameservers(body);
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
| **updateDomainNameserversRequestContent** | [UpdateDomainNameserversRequestContent](UpdateDomainNameserversRequestContent.md) |  | |

### Return type

[**UpdateDomainNameserversResponseContent**](UpdateDomainNameserversResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateDomainNameservers 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDomainSettings

> UpdateDomainSettingsResponseContent updateDomainSettings(updateDomainSettingsRequestContent)



Updates a single domain setting (auto-renew, ID protection, or paid addons). One setting per request.

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdateDomainSettingsRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainsApi(config);

  const body = {
    // UpdateDomainSettingsRequestContent
    updateDomainSettingsRequestContent: ...,
  } satisfies UpdateDomainSettingsRequest;

  try {
    const data = await api.updateDomainSettings(body);
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
| **updateDomainSettingsRequestContent** | [UpdateDomainSettingsRequestContent](UpdateDomainSettingsRequestContent.md) |  | |

### Return type

[**UpdateDomainSettingsResponseContent**](UpdateDomainSettingsResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateDomainSettings 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

