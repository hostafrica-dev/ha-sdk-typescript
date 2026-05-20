# FirewallApi

All URIs are relative to *https://api.hostafrica.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFirewallRule**](FirewallApi.md#createfirewallrule) | **POST** /vps/create-firewall-rule |  |
| [**deleteFirewallRule**](FirewallApi.md#deletefirewallrule) | **POST** /vps/delete-firewall-rule |  |
| [**listFirewallRules**](FirewallApi.md#listfirewallrules) | **POST** /vps/list-firewall-rules |  |
| [**moveFirewallRule**](FirewallApi.md#movefirewallrule) | **POST** /vps/move-firewall-rule |  |
| [**updateFirewallRule**](FirewallApi.md#updatefirewallrule) | **POST** /vps/update-firewall-rule |  |



## createFirewallRule

> CreateFirewallRuleResponseContent createFirewallRule(createFirewallRuleRequestContent)



Creates a new firewall rule for a VPS service

### Example

```ts
import {
  Configuration,
  FirewallApi,
} from '@hostafrica/ha-sdk-typescript';
import type { CreateFirewallRuleRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FirewallApi(config);

  const body = {
    // CreateFirewallRuleRequestContent
    createFirewallRuleRequestContent: ...,
  } satisfies CreateFirewallRuleRequest;

  try {
    const data = await api.createFirewallRule(body);
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
| **createFirewallRuleRequestContent** | [CreateFirewallRuleRequestContent](CreateFirewallRuleRequestContent.md) |  | |

### Return type

[**CreateFirewallRuleResponseContent**](CreateFirewallRuleResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CreateFirewallRule 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFirewallRule

> DeleteFirewallRuleResponseContent deleteFirewallRule(deleteFirewallRuleRequestContent)



Deletes a firewall rule from a VPS service

### Example

```ts
import {
  Configuration,
  FirewallApi,
} from '@hostafrica/ha-sdk-typescript';
import type { DeleteFirewallRuleRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FirewallApi(config);

  const body = {
    // DeleteFirewallRuleRequestContent
    deleteFirewallRuleRequestContent: ...,
  } satisfies DeleteFirewallRuleRequest;

  try {
    const data = await api.deleteFirewallRule(body);
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
| **deleteFirewallRuleRequestContent** | [DeleteFirewallRuleRequestContent](DeleteFirewallRuleRequestContent.md) |  | |

### Return type

[**DeleteFirewallRuleResponseContent**](DeleteFirewallRuleResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | DeleteFirewallRule 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listFirewallRules

> ListFirewallRulesResponseContent listFirewallRules(listFirewallRulesRequestContent)



Retrieves the list of firewall rules and available options for a VPS service

### Example

```ts
import {
  Configuration,
  FirewallApi,
} from '@hostafrica/ha-sdk-typescript';
import type { ListFirewallRulesRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FirewallApi(config);

  const body = {
    // ListFirewallRulesRequestContent
    listFirewallRulesRequestContent: ...,
  } satisfies ListFirewallRulesRequest;

  try {
    const data = await api.listFirewallRules(body);
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
| **listFirewallRulesRequestContent** | [ListFirewallRulesRequestContent](ListFirewallRulesRequestContent.md) |  | |

### Return type

[**ListFirewallRulesResponseContent**](ListFirewallRulesResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | ListFirewallRules 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveFirewallRule

> MoveFirewallRuleResponseContent moveFirewallRule(moveFirewallRuleRequestContent)



Moves a firewall rule to a different position in the rule list. Supports both absolute positioning (target_pos) and relative movement (direction). Exactly one of target_pos or direction must be provided.

### Example

```ts
import {
  Configuration,
  FirewallApi,
} from '@hostafrica/ha-sdk-typescript';
import type { MoveFirewallRuleRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FirewallApi(config);

  const body = {
    // MoveFirewallRuleRequestContent
    moveFirewallRuleRequestContent: ...,
  } satisfies MoveFirewallRuleRequest;

  try {
    const data = await api.moveFirewallRule(body);
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
| **moveFirewallRuleRequestContent** | [MoveFirewallRuleRequestContent](MoveFirewallRuleRequestContent.md) |  | |

### Return type

[**MoveFirewallRuleResponseContent**](MoveFirewallRuleResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | MoveFirewallRule 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFirewallRule

> UpdateFirewallRuleResponseContent updateFirewallRule(updateFirewallRuleRequestContent)



Updates an existing firewall rule for a VPS service

### Example

```ts
import {
  Configuration,
  FirewallApi,
} from '@hostafrica/ha-sdk-typescript';
import type { UpdateFirewallRuleRequest } from '@hostafrica/ha-sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/ha-sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FirewallApi(config);

  const body = {
    // UpdateFirewallRuleRequestContent
    updateFirewallRuleRequestContent: ...,
  } satisfies UpdateFirewallRuleRequest;

  try {
    const data = await api.updateFirewallRule(body);
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
| **updateFirewallRuleRequestContent** | [UpdateFirewallRuleRequestContent](UpdateFirewallRuleRequestContent.md) |  | |

### Return type

[**UpdateFirewallRuleResponseContent**](UpdateFirewallRuleResponseContent.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | UpdateFirewallRule 200 response |  -  |
| **400** | BadRequestError 400 response |  -  |
| **401** | UnauthorizedError 401 response |  -  |
| **403** | ForbiddenError 403 response |  -  |
| **404** | ResourceNotFoundError 404 response |  -  |
| **422** | ValidationError 422 response |  -  |
| **429** | TooManyRequestsError 429 response |  * Retry-After - Number of seconds to wait before retrying <br>  |
| **500** | InternalServiceError 500 response |  -  |
| **503** | ServiceUnavailableError 503 response |  * Retry-After - Number of seconds to wait before retrying <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

