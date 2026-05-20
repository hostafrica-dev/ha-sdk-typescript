# @hostafrica/ha-sdk-typescript@1.0.0

A TypeScript SDK client for the api.hostafrica.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @hostafrica/ha-sdk-typescript --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *https://api.hostafrica.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*BackupsApi* | [**createBackup**](docs/BackupsApi.md#createbackup) | **POST** /vps/create-backup | 
*BackupsApi* | [**createBackupSchedule**](docs/BackupsApi.md#createbackupschedule) | **POST** /vps/create-backup-schedule | 
*BackupsApi* | [**deleteBackup**](docs/BackupsApi.md#deletebackup) | **POST** /vps/delete-backup | 
*BackupsApi* | [**deleteBackupSchedule**](docs/BackupsApi.md#deletebackupschedule) | **POST** /vps/delete-backup-schedule | 
*BackupsApi* | [**editBackupSchedule**](docs/BackupsApi.md#editbackupschedule) | **POST** /vps/edit-backup-schedule | 
*BackupsApi* | [**listBackupSchedules**](docs/BackupsApi.md#listbackupschedules) | **POST** /vps/list-backup-schedules | 
*BackupsApi* | [**listBackups**](docs/BackupsApi.md#listbackups) | **POST** /vps/list-backups | 
*BackupsApi* | [**restoreBackup**](docs/BackupsApi.md#restorebackup) | **POST** /vps/restore-backup | 
*ConsoleAccessApi* | [**getNoVncConsole**](docs/ConsoleAccessApi.md#getnovncconsole) | **POST** /vps/novnc-console | 
*DNSApi* | [**createRdnsRecord**](docs/DNSApi.md#createrdnsrecord) | **POST** /dns/create-rdns-record | 
*DNSApi* | [**deleteRdnsRecord**](docs/DNSApi.md#deleterdnsrecord) | **POST** /dns/delete-rdns-record | 
*DNSApi* | [**listRdnsRecords**](docs/DNSApi.md#listrdnsrecords) | **POST** /dns/list-rdns-records | 
*FirewallApi* | [**createFirewallRule**](docs/FirewallApi.md#createfirewallrule) | **POST** /vps/create-firewall-rule | 
*FirewallApi* | [**deleteFirewallRule**](docs/FirewallApi.md#deletefirewallrule) | **POST** /vps/delete-firewall-rule | 
*FirewallApi* | [**listFirewallRules**](docs/FirewallApi.md#listfirewallrules) | **POST** /vps/list-firewall-rules | 
*FirewallApi* | [**moveFirewallRule**](docs/FirewallApi.md#movefirewallrule) | **POST** /vps/move-firewall-rule | 
*FirewallApi* | [**updateFirewallRule**](docs/FirewallApi.md#updatefirewallrule) | **POST** /vps/update-firewall-rule | 
*MonitoringApi* | [**createNotification**](docs/MonitoringApi.md#createnotification) | **POST** /vps/create-notification | 
*MonitoringApi* | [**deleteNotification**](docs/MonitoringApi.md#deletenotification) | **POST** /vps/delete-notification | 
*MonitoringApi* | [**listNotifications**](docs/MonitoringApi.md#listnotifications) | **POST** /vps/list-notifications | 
*MonitoringApi* | [**updateNotification**](docs/MonitoringApi.md#updatenotification) | **POST** /vps/update-notification | 
*PowerManagementApi* | [**createPowerTask**](docs/PowerManagementApi.md#createpowertask) | **POST** /vps/create-power-task | 
*PowerManagementApi* | [**deletePowerTask**](docs/PowerManagementApi.md#deletepowertask) | **POST** /vps/delete-power-task | 
*PowerManagementApi* | [**listPowerTasks**](docs/PowerManagementApi.md#listpowertasks) | **POST** /vps/list-power-tasks | 
*PowerManagementApi* | [**rebootVps**](docs/PowerManagementApi.md#rebootvps) | **POST** /vps/reboot | 
*PowerManagementApi* | [**shutdownVps**](docs/PowerManagementApi.md#shutdownvps) | **POST** /vps/shutdown | 
*PowerManagementApi* | [**startVps**](docs/PowerManagementApi.md#startvps) | **POST** /vps/start | 
*PowerManagementApi* | [**stopVps**](docs/PowerManagementApi.md#stopvps) | **POST** /vps/stop | 
*PowerManagementApi* | [**updatePowerTask**](docs/PowerManagementApi.md#updatepowertask) | **POST** /vps/update-power-task | 
*SecurityApi* | [**changePassword**](docs/SecurityApi.md#changepassword) | **POST** /vps/change-password | 
*SecurityApi* | [**getPrivateSshKey**](docs/SecurityApi.md#getprivatesshkey) | **POST** /vps/get-private-ssh-keys | 
*SecurityApi* | [**getPublicSshKey**](docs/SecurityApi.md#getpublicsshkey) | **POST** /vps/get-public-ssh-keys | 
*SecurityApi* | [**updateSshKeys**](docs/SecurityApi.md#updatesshkeys) | **POST** /vps/update-ssh-keys | 
*ServiceManagementApi* | [**cancelVps**](docs/ServiceManagementApi.md#cancelvps) | **POST** /vps/cancel | 
*ServiceManagementApi* | [**createOrder**](docs/ServiceManagementApi.md#createorder) | **POST** /vps/create-order | 
*ServiceManagementApi* | [**getCatalogue**](docs/ServiceManagementApi.md#getcatalogue) | **POST** /vps/get-catalogue | 
*ServiceManagementApi* | [**listOrders**](docs/ServiceManagementApi.md#listorders) | **POST** /vps/list-orders | 
*ServiceManagementApi* | [**retryPayment**](docs/ServiceManagementApi.md#retrypayment) | **POST** /vps/retry-payment | 
*ServiceManagementApi* | [**validatePricing**](docs/ServiceManagementApi.md#validatepricing) | **POST** /vps/validate-pricing | 
*SnapshotsApi* | [**createSnapshot**](docs/SnapshotsApi.md#createsnapshot) | **POST** /vps/create-snapshot | 
*SnapshotsApi* | [**deleteSnapshot**](docs/SnapshotsApi.md#deletesnapshot) | **POST** /vps/delete-snapshot | 
*SnapshotsApi* | [**listSnapshots**](docs/SnapshotsApi.md#listsnapshots) | **POST** /vps/list-snapshots | 
*SnapshotsApi* | [**rollbackSnapshot**](docs/SnapshotsApi.md#rollbacksnapshot) | **POST** /vps/rollback-snapshot | 
*SnapshotsApi* | [**updateSnapshot**](docs/SnapshotsApi.md#updatesnapshot) | **POST** /vps/update-snapshot | 
*UserManagementApi* | [**userChangePassword**](docs/UserManagementApi.md#userchangepassword) | **POST** /user/change-password | 
*VPSManagementApi* | [**getVpsConfig**](docs/VPSManagementApi.md#getvpsconfig) | **POST** /vps/get-config | 
*VPSManagementApi* | [**getVpsDetails**](docs/VPSManagementApi.md#getvpsdetails) | **POST** /vps/get-details | 
*VPSManagementApi* | [**listIsos**](docs/VPSManagementApi.md#listisos) | **POST** /vps/list-isos | 
*VPSManagementApi* | [**listReinstallOs**](docs/VPSManagementApi.md#listreinstallos) | **POST** /vps/list-reinstall-images | 
*VPSManagementApi* | [**listVpsServices**](docs/VPSManagementApi.md#listvpsservices) | **POST** /vps/list-vps-services | 
*VPSManagementApi* | [**mountIso**](docs/VPSManagementApi.md#mountiso) | **POST** /vps/mount-iso | 
*VPSManagementApi* | [**triggerReinstall**](docs/VPSManagementApi.md#triggerreinstall) | **POST** /vps/trigger-reinstall | 
*VPSManagementApi* | [**updateVpsConfig**](docs/VPSManagementApi.md#updatevpsconfig) | **POST** /vps/update-config | 


### Models

- [BackupCreateResponseData](docs/BackupCreateResponseData.md)
- [BackupCreationInfo](docs/BackupCreationInfo.md)
- [BackupItem](docs/BackupItem.md)
- [BackupMode](docs/BackupMode.md)
- [BackupModeType](docs/BackupModeType.md)
- [BackupSchedule](docs/BackupSchedule.md)
- [BackupScheduleListResponseData](docs/BackupScheduleListResponseData.md)
- [BadRequestErrorResponseContent](docs/BadRequestErrorResponseContent.md)
- [BillingCycle](docs/BillingCycle.md)
- [CancelVpsRequestContent](docs/CancelVpsRequestContent.md)
- [CancelVpsResponseContent](docs/CancelVpsResponseContent.md)
- [CatalogueConfigOption](docs/CatalogueConfigOption.md)
- [CatalogueConfigSuboption](docs/CatalogueConfigSuboption.md)
- [CatalogueCurrency](docs/CatalogueCurrency.md)
- [CatalogueData](docs/CatalogueData.md)
- [CatalogueGroup](docs/CatalogueGroup.md)
- [CataloguePlan](docs/CataloguePlan.md)
- [CatalogueProduct](docs/CatalogueProduct.md)
- [ChangePasswordRequestContent](docs/ChangePasswordRequestContent.md)
- [ChangePasswordResponseContent](docs/ChangePasswordResponseContent.md)
- [CompressionMethod](docs/CompressionMethod.md)
- [CompressionType](docs/CompressionType.md)
- [CreateBackupRequestContent](docs/CreateBackupRequestContent.md)
- [CreateBackupResponseContent](docs/CreateBackupResponseContent.md)
- [CreateBackupScheduleRequestContent](docs/CreateBackupScheduleRequestContent.md)
- [CreateBackupScheduleResponseContent](docs/CreateBackupScheduleResponseContent.md)
- [CreateFirewallRuleRequestContent](docs/CreateFirewallRuleRequestContent.md)
- [CreateFirewallRuleResponseContent](docs/CreateFirewallRuleResponseContent.md)
- [CreateNotificationRequestContent](docs/CreateNotificationRequestContent.md)
- [CreateNotificationResponseContent](docs/CreateNotificationResponseContent.md)
- [CreateOrderDomainItem](docs/CreateOrderDomainItem.md)
- [CreateOrderItems](docs/CreateOrderItems.md)
- [CreateOrderProduct](docs/CreateOrderProduct.md)
- [CreateOrderProductItem](docs/CreateOrderProductItem.md)
- [CreateOrderRequestContent](docs/CreateOrderRequestContent.md)
- [CreateOrderResponseContent](docs/CreateOrderResponseContent.md)
- [CreateOrderResponseData](docs/CreateOrderResponseData.md)
- [CreateOrderTotal](docs/CreateOrderTotal.md)
- [CreatePowerTaskRequestContent](docs/CreatePowerTaskRequestContent.md)
- [CreatePowerTaskResponseContent](docs/CreatePowerTaskResponseContent.md)
- [CreateRdnsRecordRequestContent](docs/CreateRdnsRecordRequestContent.md)
- [CreateRdnsRecordResponseContent](docs/CreateRdnsRecordResponseContent.md)
- [CreateRdnsRecordResponseData](docs/CreateRdnsRecordResponseData.md)
- [CreateSnapshotRequestContent](docs/CreateSnapshotRequestContent.md)
- [CreateSnapshotResponseContent](docs/CreateSnapshotResponseContent.md)
- [DayOfWeek](docs/DayOfWeek.md)
- [DeleteBackupRequestContent](docs/DeleteBackupRequestContent.md)
- [DeleteBackupResponseContent](docs/DeleteBackupResponseContent.md)
- [DeleteBackupScheduleRequestContent](docs/DeleteBackupScheduleRequestContent.md)
- [DeleteBackupScheduleResponseContent](docs/DeleteBackupScheduleResponseContent.md)
- [DeleteFirewallRuleRequestContent](docs/DeleteFirewallRuleRequestContent.md)
- [DeleteFirewallRuleResponseContent](docs/DeleteFirewallRuleResponseContent.md)
- [DeleteNotificationRequestContent](docs/DeleteNotificationRequestContent.md)
- [DeleteNotificationResponseContent](docs/DeleteNotificationResponseContent.md)
- [DeletePowerTaskRequestContent](docs/DeletePowerTaskRequestContent.md)
- [DeletePowerTaskResponseContent](docs/DeletePowerTaskResponseContent.md)
- [DeleteRdnsRecordRequestContent](docs/DeleteRdnsRecordRequestContent.md)
- [DeleteRdnsRecordResponseContent](docs/DeleteRdnsRecordResponseContent.md)
- [DeleteSnapshotRequestContent](docs/DeleteSnapshotRequestContent.md)
- [DeleteSnapshotResponseContent](docs/DeleteSnapshotResponseContent.md)
- [EditBackupScheduleRequestContent](docs/EditBackupScheduleRequestContent.md)
- [EditBackupScheduleResponseContent](docs/EditBackupScheduleResponseContent.md)
- [FirewallListResponseData](docs/FirewallListResponseData.md)
- [FirewallMoveDirection](docs/FirewallMoveDirection.md)
- [FirewallMoveResponseData](docs/FirewallMoveResponseData.md)
- [FirewallOption](docs/FirewallOption.md)
- [FirewallRule](docs/FirewallRule.md)
- [FirewallRuleAction](docs/FirewallRuleAction.md)
- [FirewallRuleType](docs/FirewallRuleType.md)
- [ForbiddenErrorResponseContent](docs/ForbiddenErrorResponseContent.md)
- [GetCatalogueRequestContent](docs/GetCatalogueRequestContent.md)
- [GetCatalogueResponseContent](docs/GetCatalogueResponseContent.md)
- [GetNoVncConsoleRequestContent](docs/GetNoVncConsoleRequestContent.md)
- [GetNoVncConsoleResponseContent](docs/GetNoVncConsoleResponseContent.md)
- [GetPrivateSshKeyRequestContent](docs/GetPrivateSshKeyRequestContent.md)
- [GetPrivateSshKeyResponseContent](docs/GetPrivateSshKeyResponseContent.md)
- [GetPublicSshKeyRequestContent](docs/GetPublicSshKeyRequestContent.md)
- [GetPublicSshKeyResponseContent](docs/GetPublicSshKeyResponseContent.md)
- [GetVpsConfigRequestContent](docs/GetVpsConfigRequestContent.md)
- [GetVpsConfigResponseContent](docs/GetVpsConfigResponseContent.md)
- [GetVpsDetailsRequestContent](docs/GetVpsDetailsRequestContent.md)
- [GetVpsDetailsResponseContent](docs/GetVpsDetailsResponseContent.md)
- [InternalServiceErrorResponseContent](docs/InternalServiceErrorResponseContent.md)
- [InvalidStateErrorResponseContent](docs/InvalidStateErrorResponseContent.md)
- [ListBackupSchedulesRequestContent](docs/ListBackupSchedulesRequestContent.md)
- [ListBackupSchedulesResponseContent](docs/ListBackupSchedulesResponseContent.md)
- [ListBackupsRequestContent](docs/ListBackupsRequestContent.md)
- [ListBackupsResponseContent](docs/ListBackupsResponseContent.md)
- [ListFirewallRulesRequestContent](docs/ListFirewallRulesRequestContent.md)
- [ListFirewallRulesResponseContent](docs/ListFirewallRulesResponseContent.md)
- [ListIsosRequestContent](docs/ListIsosRequestContent.md)
- [ListIsosResponseContent](docs/ListIsosResponseContent.md)
- [ListIsosResponseData](docs/ListIsosResponseData.md)
- [ListNotificationsRequestContent](docs/ListNotificationsRequestContent.md)
- [ListNotificationsResponseContent](docs/ListNotificationsResponseContent.md)
- [ListOrdersResponseContent](docs/ListOrdersResponseContent.md)
- [ListOrdersResponseData](docs/ListOrdersResponseData.md)
- [ListPowerTasksRequestContent](docs/ListPowerTasksRequestContent.md)
- [ListPowerTasksResponseContent](docs/ListPowerTasksResponseContent.md)
- [ListRdnsRecordsResponseContent](docs/ListRdnsRecordsResponseContent.md)
- [ListRdnsResponseData](docs/ListRdnsResponseData.md)
- [ListReinstallOsRequestContent](docs/ListReinstallOsRequestContent.md)
- [ListReinstallOsResponseContent](docs/ListReinstallOsResponseContent.md)
- [ListReinstallOsResponseData](docs/ListReinstallOsResponseData.md)
- [ListSnapshotsRequestContent](docs/ListSnapshotsRequestContent.md)
- [ListSnapshotsResponseContent](docs/ListSnapshotsResponseContent.md)
- [ListVpsServicesData](docs/ListVpsServicesData.md)
- [ListVpsServicesResponseContent](docs/ListVpsServicesResponseContent.md)
- [MountIsoRequestContent](docs/MountIsoRequestContent.md)
- [MountIsoResponseContent](docs/MountIsoResponseContent.md)
- [MoveFirewallRuleRequestContent](docs/MoveFirewallRuleRequestContent.md)
- [MoveFirewallRuleResponseContent](docs/MoveFirewallRuleResponseContent.md)
- [NoVncConsoleDetails](docs/NoVncConsoleDetails.md)
- [NoVncConsoleResponseData](docs/NoVncConsoleResponseData.md)
- [Notification](docs/Notification.md)
- [NotificationCreateResponseData](docs/NotificationCreateResponseData.md)
- [NotificationDialogRules](docs/NotificationDialogRules.md)
- [NotificationListResponseData](docs/NotificationListResponseData.md)
- [NotificationStatus](docs/NotificationStatus.md)
- [OperationStatus](docs/OperationStatus.md)
- [Order](docs/Order.md)
- [OrderLastAttempt](docs/OrderLastAttempt.md)
- [OrderWarning](docs/OrderWarning.md)
- [PaymentError](docs/PaymentError.md)
- [PaymentStatus](docs/PaymentStatus.md)
- [PowerTask](docs/PowerTask.md)
- [PowerTaskAction](docs/PowerTaskAction.md)
- [PowerTaskCreateResponseData](docs/PowerTaskCreateResponseData.md)
- [PowerTaskDialogRules](docs/PowerTaskDialogRules.md)
- [PowerTaskJobType](docs/PowerTaskJobType.md)
- [PowerTaskListResponseData](docs/PowerTaskListResponseData.md)
- [PublicSshKeyResponseData](docs/PublicSshKeyResponseData.md)
- [RdnsAvailableItem](docs/RdnsAvailableItem.md)
- [RdnsPool](docs/RdnsPool.md)
- [RdnsRecord](docs/RdnsRecord.md)
- [RebootVpsRequestContent](docs/RebootVpsRequestContent.md)
- [RebootVpsResponseContent](docs/RebootVpsResponseContent.md)
- [ResourceNotFoundErrorResponseContent](docs/ResourceNotFoundErrorResponseContent.md)
- [RestoreBackupRequestContent](docs/RestoreBackupRequestContent.md)
- [RestoreBackupResponseContent](docs/RestoreBackupResponseContent.md)
- [RetryPaymentRequestContent](docs/RetryPaymentRequestContent.md)
- [RetryPaymentResponseContent](docs/RetryPaymentResponseContent.md)
- [RetryPaymentResponseData](docs/RetryPaymentResponseData.md)
- [RetryPaymentTotal](docs/RetryPaymentTotal.md)
- [RollbackSnapshotRequestContent](docs/RollbackSnapshotRequestContent.md)
- [RollbackSnapshotResponseContent](docs/RollbackSnapshotResponseContent.md)
- [ServiceBackupsResponseData](docs/ServiceBackupsResponseData.md)
- [ServiceSnapshotsResponseData](docs/ServiceSnapshotsResponseData.md)
- [ServiceUnavailableErrorResponseContent](docs/ServiceUnavailableErrorResponseContent.md)
- [ShutdownVpsRequestContent](docs/ShutdownVpsRequestContent.md)
- [ShutdownVpsResponseContent](docs/ShutdownVpsResponseContent.md)
- [SnapshotCreateResponseData](docs/SnapshotCreateResponseData.md)
- [SnapshotItem](docs/SnapshotItem.md)
- [SshKeyDetails](docs/SshKeyDetails.md)
- [StartVpsRequestContent](docs/StartVpsRequestContent.md)
- [StartVpsResponseContent](docs/StartVpsResponseContent.md)
- [StopVpsRequestContent](docs/StopVpsRequestContent.md)
- [StopVpsResponseContent](docs/StopVpsResponseContent.md)
- [TooManyRequestsErrorResponseContent](docs/TooManyRequestsErrorResponseContent.md)
- [TriggerReinstallRequestContent](docs/TriggerReinstallRequestContent.md)
- [TriggerReinstallResponseContent](docs/TriggerReinstallResponseContent.md)
- [TriggerReinstallResponseData](docs/TriggerReinstallResponseData.md)
- [UnauthorizedErrorResponseContent](docs/UnauthorizedErrorResponseContent.md)
- [UpdateFirewallRuleRequestContent](docs/UpdateFirewallRuleRequestContent.md)
- [UpdateFirewallRuleResponseContent](docs/UpdateFirewallRuleResponseContent.md)
- [UpdateNotificationRequestContent](docs/UpdateNotificationRequestContent.md)
- [UpdateNotificationResponseContent](docs/UpdateNotificationResponseContent.md)
- [UpdatePowerTaskRequestContent](docs/UpdatePowerTaskRequestContent.md)
- [UpdatePowerTaskResponseContent](docs/UpdatePowerTaskResponseContent.md)
- [UpdateSnapshotRequestContent](docs/UpdateSnapshotRequestContent.md)
- [UpdateSnapshotResponseContent](docs/UpdateSnapshotResponseContent.md)
- [UpdateSshKeysRequestContent](docs/UpdateSshKeysRequestContent.md)
- [UpdateSshKeysResponseContent](docs/UpdateSshKeysResponseContent.md)
- [UpdateVpsConfigRequestContent](docs/UpdateVpsConfigRequestContent.md)
- [UpdateVpsConfigResponseContent](docs/UpdateVpsConfigResponseContent.md)
- [UserChangePasswordDetails](docs/UserChangePasswordDetails.md)
- [UserChangePasswordRequestContent](docs/UserChangePasswordRequestContent.md)
- [UserChangePasswordResponseContent](docs/UserChangePasswordResponseContent.md)
- [UserChangePasswordResponseData](docs/UserChangePasswordResponseData.md)
- [ValidatePricingBase](docs/ValidatePricingBase.md)
- [ValidatePricingBreakdown](docs/ValidatePricingBreakdown.md)
- [ValidatePricingConfigItem](docs/ValidatePricingConfigItem.md)
- [ValidatePricingCurrency](docs/ValidatePricingCurrency.md)
- [ValidatePricingDiscount](docs/ValidatePricingDiscount.md)
- [ValidatePricingPlanConfig](docs/ValidatePricingPlanConfig.md)
- [ValidatePricingPlanPricing](docs/ValidatePricingPlanPricing.md)
- [ValidatePricingPriceRange](docs/ValidatePricingPriceRange.md)
- [ValidatePricingProduct](docs/ValidatePricingProduct.md)
- [ValidatePricingProductResult](docs/ValidatePricingProductResult.md)
- [ValidatePricingProrata](docs/ValidatePricingProrata.md)
- [ValidatePricingRequestContent](docs/ValidatePricingRequestContent.md)
- [ValidatePricingResponseContent](docs/ValidatePricingResponseContent.md)
- [ValidatePricingResponseData](docs/ValidatePricingResponseData.md)
- [ValidatePricingSummary](docs/ValidatePricingSummary.md)
- [ValidatePricingSummaryRecurring](docs/ValidatePricingSummaryRecurring.md)
- [ValidationErrorResponseContent](docs/ValidationErrorResponseContent.md)
- [VpsAvailableFeatures](docs/VpsAvailableFeatures.md)
- [VpsBandwidthInfo](docs/VpsBandwidthInfo.md)
- [VpsCancelResponseData](docs/VpsCancelResponseData.md)
- [VpsCancelType](docs/VpsCancelType.md)
- [VpsConfigResponseData](docs/VpsConfigResponseData.md)
- [VpsCpuInfo](docs/VpsCpuInfo.md)
- [VpsCredentials](docs/VpsCredentials.md)
- [VpsDetailsResponse](docs/VpsDetailsResponse.md)
- [VpsDiskInfo](docs/VpsDiskInfo.md)
- [VpsMemoryInfo](docs/VpsMemoryInfo.md)
- [VpsNetworkRate](docs/VpsNetworkRate.md)
- [VpsOsInfo](docs/VpsOsInfo.md)
- [VpsServiceInfo](docs/VpsServiceInfo.md)
- [VpsSimpleActionResponseData](docs/VpsSimpleActionResponseData.md)
- [VpsVmInfo](docs/VpsVmInfo.md)

### Authorization


Authentication schemes defined for the API:
<a id="smithy.api.httpBearerAuth"></a>
#### smithy.api.httpBearerAuth


- **Type**: HTTP Bearer Token authentication
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2026-01-01`
- Package version: `1.0.0`
- Generator version: `7.20.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
