# DomainsApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkDomainAvailability**](DomainsApi.md#checkdomainavailability) | **POST** /domain/check-availability |  |
| [**getDomain**](DomainsApi.md#getdomain) | **POST** /domain/get-domain |  |
| [**getDomainContacts**](DomainsApi.md#getdomaincontacts) | **POST** /domain/get-domain-contacts |  |
| [**listDomains**](DomainsApi.md#listdomains) | **POST** /domain/list-domains |  |
| [**listDomainsRequiringData**](DomainsApi.md#listdomainsrequiringdata) | **POST** /domain/list-domains-requiring-data |  |
| [**saveDomainRequiredData**](DomainsApi.md#savedomainrequireddata) | **POST** /domain/save-domain-required-data |  |
| [**suggestDomains**](DomainsApi.md#suggestdomains) | **POST** /domain/suggest |  |
| [**updateDomainSettings**](DomainsApi.md#updatedomainsettings) | **POST** /domain/update-domain-settings |  |



## checkDomainAvailability

> CheckDomainAvailabilityResponseContent checkDomainAvailability(checkDomainAvailabilityRequestContent)



Checks domain name availability for a single domain or a comma-separated batch. Exactly one of domain or domains must be provided. Returns pricing, suggestions, and register_url scoped to the requested currency.

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



Generates AI-powered domain name suggestions from a natural-language description. Returns suggested domains with availability status and pricing.

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

