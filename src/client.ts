/* tslint:disable */
/* eslint-disable */
/**
 * HostAfrica API Client
 *
 * Hand-written wrapper over the generated API classes.
 * Provides a pre-configured client with automatic retry on readonly operations.
 *
 * Usage:
 *   import { createClient } from "@hostafrica/sdk-typescript/client";
 *   const client = createClient({ accessToken: "Bearer ..." });
 *   const result = await client.VPSManagementApi.listVpsServices({ ... });
 *
 * The set of retryable paths is auto-generated from @readonly annotations in
 * hostafrica-api.smithy — run `make sdk-typescript` to keep it in sync.
 */

import fetchRetry from "fetch-retry";
import { Configuration, ConfigurationParameters, BASE_PATH } from "./runtime";
import * as GeneratedApis from "./apis/index";
import { RETRYABLE_PATHS } from "./retryablePaths";

export type { ConfigurationParameters };

export interface ClientOptions extends ConfigurationParameters {
    /**
     * Number of retry attempts for readonly operations that receive a
     * transient error (429, 502, 503, 504). Defaults to 3.
     */
    retries?: number;
    /**
     * Initial delay in milliseconds before the first retry.
     * Each subsequent retry doubles the delay (exponential backoff).
     * Defaults to 500 ms.
     */
    retryDelay?: number;
}

type ApiConstructor<T> = new (config: Configuration) => T;
type ApiInstances = { [K in keyof typeof GeneratedApis]: InstanceType<(typeof GeneratedApis)[K]> };

/**
 * Creates a fully-configured HostAfrica API client.
 *
 * All generated API classes are available as properties on the returned object.
 * Readonly operations (as annotated in the Smithy model) are automatically
 * retried up to `retries` times on transient HTTP errors.
 */
export function createClient(options: ClientOptions = {}): ApiInstances {
    const {
        retries = 3,
        retryDelay = 500,
        basePath = BASE_PATH,
        ...rest
    } = options;

    const retryStatuses = [429, 502, 503, 504];

    const plainFetch: typeof fetch = fetch;
    const retryFetch = fetchRetry(fetch, {
        retries,
        retryDelay: (attempt: number) => retryDelay * Math.pow(2, attempt),
        retryOn: retryStatuses,
    });

    const config = new Configuration({
        ...rest,
        basePath,
        fetchApi: (url: RequestInfo | URL, init?: RequestInit) => {
            const path = new URL(String(url), "http://x").pathname;
            return RETRYABLE_PATHS.has(path)
                ? retryFetch(url, init)
                : plainFetch(url, init);
        },
    });

    const instances: Record<string, unknown> = {};
    const apis = GeneratedApis as Record<string, unknown>;
    for (const name of Object.keys(apis)) {
        if (typeof apis[name] === "function") {
            instances[name] = new (apis[name] as ApiConstructor<unknown>)(config);
        }
    }
    return instances as ApiInstances;
}
