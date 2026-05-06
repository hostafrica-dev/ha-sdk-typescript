# @hostafrica/sdk-typescript@1.0.0

A TypeScript SDK client for the api.hostafrica.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @hostafrica/sdk-typescript --save
```

Next, try it out.


```ts
import {
  Configuration,
  BackupsApi,
} from '@hostafrica/sdk-typescript';
import type { CreateBackupRequest } from '@hostafrica/sdk-typescript';

async function example() {
  console.log("🚀 Testing @hostafrica/sdk-typescript SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: smithy.api.httpBearerAuth
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
*VPSManagementApi* | [**getOsTemplateDetails**](docs/VPSManagementApi.md#getostemplatedetails) | **POST** /vps/get-os-template-details | 
*VPSManagementApi* | [**getVpsConfig**](docs/VPSManagementApi.md#getvpsconfig) | **POST** /vps/get-config | 
*VPSManagementApi* | [**getVpsDetails**](docs/VPSManagementApi.md#getvpsdetails) | **POST** /vps/get-details | 
*VPSManagementApi* | [**listAllowedFeatures**](docs/VPSManagementApi.md#listallowedfeatures) | **POST** /vps/list-allowed-features | 
*VPSManagementApi* | [**listIsos**](docs/VPSManagementApi.md#listisos) | **POST** /vps/list-isos | 
*VPSManagementApi* | [**listOsTemplates**](docs/VPSManagementApi.md#listostemplates) | **POST** /vps/list-os-templates | 
*VPSManagementApi* | [**listReinstallOs**](docs/VPSManagementApi.md#listreinstallos) | **POST** /vps/list-reinstall-images | 
*VPSManagementApi* | [**listVpsServices**](docs/VPSManagementApi.md#listvpsservices) | **POST** /vps/list-vps-services | 
*VPSManagementApi* | [**mountIso**](docs/VPSManagementApi.md#mountiso) | **POST** /vps/mount-iso | 
*VPSManagementApi* | [**suspendVps**](docs/VPSManagementApi.md#suspendvps) | **POST** /vps/suspend | 
*VPSManagementApi* | [**terminateVps**](docs/VPSManagementApi.md#terminatevps) | **POST** /vps/terminate | 
*VPSManagementApi* | [**triggerReinstall**](docs/VPSManagementApi.md#triggerreinstall) | **POST** /vps/trigger-reinstall | 
*VPSManagementApi* | [**unsuspendVps**](docs/VPSManagementApi.md#unsuspendvps) | **POST** /vps/unsuspend | 
*VPSManagementApi* | [**updateVpsConfig**](docs/VPSManagementApi.md#updatevpsconfig) | **POST** /vps/update-config | 


### Models

- [AllowedFeaturesResponseData](docs/AllowedFeaturesResponseData.md)
- [BackupCreateResponseData](docs/BackupCreateResponseData.md)
- [BackupCreationInfo](docs/BackupCreationInfo.md)
- [BackupItem](docs/BackupItem.md)
- [BackupMode](docs/BackupMode.md)
- [BackupSchedule](docs/BackupSchedule.md)
- [BackupScheduleListResponseData](docs/BackupScheduleListResponseData.md)
- [BadRequestError](docs/BadRequestError.md)
- [BadRequestErrorResponseContent](docs/BadRequestErrorResponseContent.md)
- [CatalogueConfigOption](docs/CatalogueConfigOption.md)
- [CatalogueConfigSuboption](docs/CatalogueConfigSuboption.md)
- [CatalogueCurrency](docs/CatalogueCurrency.md)
- [CatalogueData](docs/CatalogueData.md)
- [CatalogueGroup](docs/CatalogueGroup.md)
- [CataloguePlan](docs/CataloguePlan.md)
- [CatalogueProduct](docs/CatalogueProduct.md)
- [ChangePasswordInput](docs/ChangePasswordInput.md)
- [ChangePasswordOutput](docs/ChangePasswordOutput.md)
- [ChangePasswordRequestContent](docs/ChangePasswordRequestContent.md)
- [ChangePasswordResponseContent](docs/ChangePasswordResponseContent.md)
- [CompressionMethod](docs/CompressionMethod.md)
- [CompressionType](docs/CompressionType.md)
- [CreateBackupInput](docs/CreateBackupInput.md)
- [CreateBackupOutput](docs/CreateBackupOutput.md)
- [CreateBackupRequestContent](docs/CreateBackupRequestContent.md)
- [CreateBackupResponseContent](docs/CreateBackupResponseContent.md)
- [CreateBackupScheduleInput](docs/CreateBackupScheduleInput.md)
- [CreateBackupScheduleOutput](docs/CreateBackupScheduleOutput.md)
- [CreateBackupScheduleRequestContent](docs/CreateBackupScheduleRequestContent.md)
- [CreateBackupScheduleResponseContent](docs/CreateBackupScheduleResponseContent.md)
- [CreateFirewallRuleInput](docs/CreateFirewallRuleInput.md)
- [CreateFirewallRuleOutput](docs/CreateFirewallRuleOutput.md)
- [CreateFirewallRuleRequestContent](docs/CreateFirewallRuleRequestContent.md)
- [CreateFirewallRuleResponseContent](docs/CreateFirewallRuleResponseContent.md)
- [CreateNotificationInput](docs/CreateNotificationInput.md)
- [CreateNotificationOutput](docs/CreateNotificationOutput.md)
- [CreateNotificationRequestContent](docs/CreateNotificationRequestContent.md)
- [CreateNotificationResponseContent](docs/CreateNotificationResponseContent.md)
- [CreateOrderDomainItem](docs/CreateOrderDomainItem.md)
- [CreateOrderInput](docs/CreateOrderInput.md)
- [CreateOrderItems](docs/CreateOrderItems.md)
- [CreateOrderOutput](docs/CreateOrderOutput.md)
- [CreateOrderProduct](docs/CreateOrderProduct.md)
- [CreateOrderProductItem](docs/CreateOrderProductItem.md)
- [CreateOrderRequestContent](docs/CreateOrderRequestContent.md)
- [CreateOrderResponseContent](docs/CreateOrderResponseContent.md)
- [CreateOrderResponseData](docs/CreateOrderResponseData.md)
- [CreateOrderTotal](docs/CreateOrderTotal.md)
- [CreatePowerTaskInput](docs/CreatePowerTaskInput.md)
- [CreatePowerTaskOutput](docs/CreatePowerTaskOutput.md)
- [CreatePowerTaskRequestContent](docs/CreatePowerTaskRequestContent.md)
- [CreatePowerTaskResponseContent](docs/CreatePowerTaskResponseContent.md)
- [CreateSnapshotInput](docs/CreateSnapshotInput.md)
- [CreateSnapshotOutput](docs/CreateSnapshotOutput.md)
- [CreateSnapshotRequestContent](docs/CreateSnapshotRequestContent.md)
- [CreateSnapshotResponseContent](docs/CreateSnapshotResponseContent.md)
- [DeleteBackupInput](docs/DeleteBackupInput.md)
- [DeleteBackupOutput](docs/DeleteBackupOutput.md)
- [DeleteBackupRequestContent](docs/DeleteBackupRequestContent.md)
- [DeleteBackupResponseContent](docs/DeleteBackupResponseContent.md)
- [DeleteBackupScheduleInput](docs/DeleteBackupScheduleInput.md)
- [DeleteBackupScheduleOutput](docs/DeleteBackupScheduleOutput.md)
- [DeleteBackupScheduleRequestContent](docs/DeleteBackupScheduleRequestContent.md)
- [DeleteBackupScheduleResponseContent](docs/DeleteBackupScheduleResponseContent.md)
- [DeleteFirewallRuleInput](docs/DeleteFirewallRuleInput.md)
- [DeleteFirewallRuleOutput](docs/DeleteFirewallRuleOutput.md)
- [DeleteFirewallRuleRequestContent](docs/DeleteFirewallRuleRequestContent.md)
- [DeleteFirewallRuleResponseContent](docs/DeleteFirewallRuleResponseContent.md)
- [DeleteNotificationInput](docs/DeleteNotificationInput.md)
- [DeleteNotificationOutput](docs/DeleteNotificationOutput.md)
- [DeleteNotificationRequestContent](docs/DeleteNotificationRequestContent.md)
- [DeleteNotificationResponseContent](docs/DeleteNotificationResponseContent.md)
- [DeletePowerTaskInput](docs/DeletePowerTaskInput.md)
- [DeletePowerTaskOutput](docs/DeletePowerTaskOutput.md)
- [DeletePowerTaskRequestContent](docs/DeletePowerTaskRequestContent.md)
- [DeletePowerTaskResponseContent](docs/DeletePowerTaskResponseContent.md)
- [DeleteSnapshotInput](docs/DeleteSnapshotInput.md)
- [DeleteSnapshotOutput](docs/DeleteSnapshotOutput.md)
- [DeleteSnapshotRequestContent](docs/DeleteSnapshotRequestContent.md)
- [DeleteSnapshotResponseContent](docs/DeleteSnapshotResponseContent.md)
- [EditBackupScheduleInput](docs/EditBackupScheduleInput.md)
- [EditBackupScheduleOutput](docs/EditBackupScheduleOutput.md)
- [EditBackupScheduleRequestContent](docs/EditBackupScheduleRequestContent.md)
- [EditBackupScheduleResponseContent](docs/EditBackupScheduleResponseContent.md)
- [FirewallListResponseData](docs/FirewallListResponseData.md)
- [FirewallMoveDirection](docs/FirewallMoveDirection.md)
- [FirewallMoveResponseData](docs/FirewallMoveResponseData.md)
- [FirewallOption](docs/FirewallOption.md)
- [FirewallRule](docs/FirewallRule.md)
- [FirewallRuleAction](docs/FirewallRuleAction.md)
- [FirewallRuleType](docs/FirewallRuleType.md)
- [ForbiddenError](docs/ForbiddenError.md)
- [ForbiddenErrorResponseContent](docs/ForbiddenErrorResponseContent.md)
- [GetCatalogueInput](docs/GetCatalogueInput.md)
- [GetCatalogueOutput](docs/GetCatalogueOutput.md)
- [GetCatalogueRequestContent](docs/GetCatalogueRequestContent.md)
- [GetCatalogueResponseContent](docs/GetCatalogueResponseContent.md)
- [GetNoVncConsoleInput](docs/GetNoVncConsoleInput.md)
- [GetNoVncConsoleOutput](docs/GetNoVncConsoleOutput.md)
- [GetNoVncConsoleRequestContent](docs/GetNoVncConsoleRequestContent.md)
- [GetNoVncConsoleResponseContent](docs/GetNoVncConsoleResponseContent.md)
- [GetOsTemplateDetailsInput](docs/GetOsTemplateDetailsInput.md)
- [GetOsTemplateDetailsOutput](docs/GetOsTemplateDetailsOutput.md)
- [GetOsTemplateDetailsRequestContent](docs/GetOsTemplateDetailsRequestContent.md)
- [GetOsTemplateDetailsResponseContent](docs/GetOsTemplateDetailsResponseContent.md)
- [GetOsTemplateDetailsResponseData](docs/GetOsTemplateDetailsResponseData.md)
- [GetPrivateSshKeyInput](docs/GetPrivateSshKeyInput.md)
- [GetPrivateSshKeyOutput](docs/GetPrivateSshKeyOutput.md)
- [GetPrivateSshKeyRequestContent](docs/GetPrivateSshKeyRequestContent.md)
- [GetPrivateSshKeyResponseContent](docs/GetPrivateSshKeyResponseContent.md)
- [GetPublicSshKeyInput](docs/GetPublicSshKeyInput.md)
- [GetPublicSshKeyOutput](docs/GetPublicSshKeyOutput.md)
- [GetPublicSshKeyRequestContent](docs/GetPublicSshKeyRequestContent.md)
- [GetPublicSshKeyResponseContent](docs/GetPublicSshKeyResponseContent.md)
- [GetVpsConfigInput](docs/GetVpsConfigInput.md)
- [GetVpsConfigOutput](docs/GetVpsConfigOutput.md)
- [GetVpsConfigRequestContent](docs/GetVpsConfigRequestContent.md)
- [GetVpsConfigResponseContent](docs/GetVpsConfigResponseContent.md)
- [GetVpsDetailsInput](docs/GetVpsDetailsInput.md)
- [GetVpsDetailsOutput](docs/GetVpsDetailsOutput.md)
- [GetVpsDetailsRequestContent](docs/GetVpsDetailsRequestContent.md)
- [GetVpsDetailsResponseContent](docs/GetVpsDetailsResponseContent.md)
- [InternalServiceError](docs/InternalServiceError.md)
- [InternalServiceErrorResponseContent](docs/InternalServiceErrorResponseContent.md)
- [InvalidStateError](docs/InvalidStateError.md)
- [InvalidStateErrorResponseContent](docs/InvalidStateErrorResponseContent.md)
- [ListAllowedFeaturesInput](docs/ListAllowedFeaturesInput.md)
- [ListAllowedFeaturesOutput](docs/ListAllowedFeaturesOutput.md)
- [ListAllowedFeaturesRequestContent](docs/ListAllowedFeaturesRequestContent.md)
- [ListAllowedFeaturesResponseContent](docs/ListAllowedFeaturesResponseContent.md)
- [ListBackupSchedulesInput](docs/ListBackupSchedulesInput.md)
- [ListBackupSchedulesOutput](docs/ListBackupSchedulesOutput.md)
- [ListBackupSchedulesRequestContent](docs/ListBackupSchedulesRequestContent.md)
- [ListBackupSchedulesResponseContent](docs/ListBackupSchedulesResponseContent.md)
- [ListBackupsInput](docs/ListBackupsInput.md)
- [ListBackupsOutput](docs/ListBackupsOutput.md)
- [ListBackupsRequestContent](docs/ListBackupsRequestContent.md)
- [ListBackupsResponseContent](docs/ListBackupsResponseContent.md)
- [ListFirewallRulesInput](docs/ListFirewallRulesInput.md)
- [ListFirewallRulesOutput](docs/ListFirewallRulesOutput.md)
- [ListFirewallRulesRequestContent](docs/ListFirewallRulesRequestContent.md)
- [ListFirewallRulesResponseContent](docs/ListFirewallRulesResponseContent.md)
- [ListIsosInput](docs/ListIsosInput.md)
- [ListIsosOutput](docs/ListIsosOutput.md)
- [ListIsosRequestContent](docs/ListIsosRequestContent.md)
- [ListIsosResponseContent](docs/ListIsosResponseContent.md)
- [ListIsosResponseData](docs/ListIsosResponseData.md)
- [ListNotificationsInput](docs/ListNotificationsInput.md)
- [ListNotificationsOutput](docs/ListNotificationsOutput.md)
- [ListNotificationsRequestContent](docs/ListNotificationsRequestContent.md)
- [ListNotificationsResponseContent](docs/ListNotificationsResponseContent.md)
- [ListOrdersOutput](docs/ListOrdersOutput.md)
- [ListOrdersResponseContent](docs/ListOrdersResponseContent.md)
- [ListOrdersResponseData](docs/ListOrdersResponseData.md)
- [ListOsTemplatesInput](docs/ListOsTemplatesInput.md)
- [ListOsTemplatesOutput](docs/ListOsTemplatesOutput.md)
- [ListOsTemplatesRequestContent](docs/ListOsTemplatesRequestContent.md)
- [ListOsTemplatesResponseContent](docs/ListOsTemplatesResponseContent.md)
- [ListOsTemplatesResponseData](docs/ListOsTemplatesResponseData.md)
- [ListPowerTasksInput](docs/ListPowerTasksInput.md)
- [ListPowerTasksOutput](docs/ListPowerTasksOutput.md)
- [ListPowerTasksRequestContent](docs/ListPowerTasksRequestContent.md)
- [ListPowerTasksResponseContent](docs/ListPowerTasksResponseContent.md)
- [ListReinstallOsInput](docs/ListReinstallOsInput.md)
- [ListReinstallOsOutput](docs/ListReinstallOsOutput.md)
- [ListReinstallOsRequestContent](docs/ListReinstallOsRequestContent.md)
- [ListReinstallOsResponseContent](docs/ListReinstallOsResponseContent.md)
- [ListReinstallOsResponseData](docs/ListReinstallOsResponseData.md)
- [ListSnapshotsInput](docs/ListSnapshotsInput.md)
- [ListSnapshotsOutput](docs/ListSnapshotsOutput.md)
- [ListSnapshotsRequestContent](docs/ListSnapshotsRequestContent.md)
- [ListSnapshotsResponseContent](docs/ListSnapshotsResponseContent.md)
- [ListVpsServicesData](docs/ListVpsServicesData.md)
- [ListVpsServicesOutput](docs/ListVpsServicesOutput.md)
- [ListVpsServicesResponseContent](docs/ListVpsServicesResponseContent.md)
- [MountIsoInput](docs/MountIsoInput.md)
- [MountIsoOutput](docs/MountIsoOutput.md)
- [MountIsoRequestContent](docs/MountIsoRequestContent.md)
- [MountIsoResponseContent](docs/MountIsoResponseContent.md)
- [MoveFirewallRuleInput](docs/MoveFirewallRuleInput.md)
- [MoveFirewallRuleOutput](docs/MoveFirewallRuleOutput.md)
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
- [OsImage](docs/OsImage.md)
- [PaymentError](docs/PaymentError.md)
- [PaymentStatus](docs/PaymentStatus.md)
- [PowerTask](docs/PowerTask.md)
- [PowerTaskCreateResponseData](docs/PowerTaskCreateResponseData.md)
- [PowerTaskDialogRules](docs/PowerTaskDialogRules.md)
- [PowerTaskListResponseData](docs/PowerTaskListResponseData.md)
- [PublicSshKeyResponseData](docs/PublicSshKeyResponseData.md)
- [RebootVpsInput](docs/RebootVpsInput.md)
- [RebootVpsOutput](docs/RebootVpsOutput.md)
- [RebootVpsRequestContent](docs/RebootVpsRequestContent.md)
- [RebootVpsResponseContent](docs/RebootVpsResponseContent.md)
- [ResourceNotFoundError](docs/ResourceNotFoundError.md)
- [ResourceNotFoundErrorResponseContent](docs/ResourceNotFoundErrorResponseContent.md)
- [RestoreBackupInput](docs/RestoreBackupInput.md)
- [RestoreBackupOutput](docs/RestoreBackupOutput.md)
- [RestoreBackupRequestContent](docs/RestoreBackupRequestContent.md)
- [RestoreBackupResponseContent](docs/RestoreBackupResponseContent.md)
- [RetryPaymentInput](docs/RetryPaymentInput.md)
- [RetryPaymentOutput](docs/RetryPaymentOutput.md)
- [RetryPaymentRequestContent](docs/RetryPaymentRequestContent.md)
- [RetryPaymentResponseContent](docs/RetryPaymentResponseContent.md)
- [RetryPaymentResponseData](docs/RetryPaymentResponseData.md)
- [RetryPaymentTotal](docs/RetryPaymentTotal.md)
- [RollbackSnapshotInput](docs/RollbackSnapshotInput.md)
- [RollbackSnapshotOutput](docs/RollbackSnapshotOutput.md)
- [RollbackSnapshotRequestContent](docs/RollbackSnapshotRequestContent.md)
- [RollbackSnapshotResponseContent](docs/RollbackSnapshotResponseContent.md)
- [ServiceBackupsResponseData](docs/ServiceBackupsResponseData.md)
- [ServiceSnapshotsResponseData](docs/ServiceSnapshotsResponseData.md)
- [ServiceUnavailableError](docs/ServiceUnavailableError.md)
- [ServiceUnavailableErrorResponseContent](docs/ServiceUnavailableErrorResponseContent.md)
- [ShutdownVpsInput](docs/ShutdownVpsInput.md)
- [ShutdownVpsOutput](docs/ShutdownVpsOutput.md)
- [ShutdownVpsRequestContent](docs/ShutdownVpsRequestContent.md)
- [ShutdownVpsResponseContent](docs/ShutdownVpsResponseContent.md)
- [SnapshotCreateResponseData](docs/SnapshotCreateResponseData.md)
- [SnapshotItem](docs/SnapshotItem.md)
- [SshKeyDetails](docs/SshKeyDetails.md)
- [StartVpsInput](docs/StartVpsInput.md)
- [StartVpsOutput](docs/StartVpsOutput.md)
- [StartVpsRequestContent](docs/StartVpsRequestContent.md)
- [StartVpsResponseContent](docs/StartVpsResponseContent.md)
- [StopVpsInput](docs/StopVpsInput.md)
- [StopVpsOutput](docs/StopVpsOutput.md)
- [StopVpsRequestContent](docs/StopVpsRequestContent.md)
- [StopVpsResponseContent](docs/StopVpsResponseContent.md)
- [SuspendVpsInput](docs/SuspendVpsInput.md)
- [SuspendVpsOutput](docs/SuspendVpsOutput.md)
- [SuspendVpsRequestContent](docs/SuspendVpsRequestContent.md)
- [SuspendVpsResponseContent](docs/SuspendVpsResponseContent.md)
- [TerminateVpsInput](docs/TerminateVpsInput.md)
- [TerminateVpsOutput](docs/TerminateVpsOutput.md)
- [TerminateVpsRequestContent](docs/TerminateVpsRequestContent.md)
- [TerminateVpsResponseContent](docs/TerminateVpsResponseContent.md)
- [TooManyRequestsError](docs/TooManyRequestsError.md)
- [TooManyRequestsErrorResponseContent](docs/TooManyRequestsErrorResponseContent.md)
- [TriggerReinstallInput](docs/TriggerReinstallInput.md)
- [TriggerReinstallOutput](docs/TriggerReinstallOutput.md)
- [TriggerReinstallRequestContent](docs/TriggerReinstallRequestContent.md)
- [TriggerReinstallResponseContent](docs/TriggerReinstallResponseContent.md)
- [TriggerReinstallResponseData](docs/TriggerReinstallResponseData.md)
- [UnauthorizedError](docs/UnauthorizedError.md)
- [UnauthorizedErrorResponseContent](docs/UnauthorizedErrorResponseContent.md)
- [UnsuspendVpsInput](docs/UnsuspendVpsInput.md)
- [UnsuspendVpsOutput](docs/UnsuspendVpsOutput.md)
- [UnsuspendVpsRequestContent](docs/UnsuspendVpsRequestContent.md)
- [UnsuspendVpsResponseContent](docs/UnsuspendVpsResponseContent.md)
- [UpdateFirewallRuleInput](docs/UpdateFirewallRuleInput.md)
- [UpdateFirewallRuleOutput](docs/UpdateFirewallRuleOutput.md)
- [UpdateFirewallRuleRequestContent](docs/UpdateFirewallRuleRequestContent.md)
- [UpdateFirewallRuleResponseContent](docs/UpdateFirewallRuleResponseContent.md)
- [UpdateNotificationInput](docs/UpdateNotificationInput.md)
- [UpdateNotificationOutput](docs/UpdateNotificationOutput.md)
- [UpdateNotificationRequestContent](docs/UpdateNotificationRequestContent.md)
- [UpdateNotificationResponseContent](docs/UpdateNotificationResponseContent.md)
- [UpdatePowerTaskInput](docs/UpdatePowerTaskInput.md)
- [UpdatePowerTaskOutput](docs/UpdatePowerTaskOutput.md)
- [UpdatePowerTaskRequestContent](docs/UpdatePowerTaskRequestContent.md)
- [UpdatePowerTaskResponseContent](docs/UpdatePowerTaskResponseContent.md)
- [UpdateSnapshotInput](docs/UpdateSnapshotInput.md)
- [UpdateSnapshotOutput](docs/UpdateSnapshotOutput.md)
- [UpdateSnapshotRequestContent](docs/UpdateSnapshotRequestContent.md)
- [UpdateSnapshotResponseContent](docs/UpdateSnapshotResponseContent.md)
- [UpdateSshKeysInput](docs/UpdateSshKeysInput.md)
- [UpdateSshKeysOutput](docs/UpdateSshKeysOutput.md)
- [UpdateSshKeysRequestContent](docs/UpdateSshKeysRequestContent.md)
- [UpdateSshKeysResponseContent](docs/UpdateSshKeysResponseContent.md)
- [UpdateVpsConfigInput](docs/UpdateVpsConfigInput.md)
- [UpdateVpsConfigOutput](docs/UpdateVpsConfigOutput.md)
- [UpdateVpsConfigRequestContent](docs/UpdateVpsConfigRequestContent.md)
- [UpdateVpsConfigResponseContent](docs/UpdateVpsConfigResponseContent.md)
- [UserChangePasswordDetails](docs/UserChangePasswordDetails.md)
- [UserChangePasswordInput](docs/UserChangePasswordInput.md)
- [UserChangePasswordOutput](docs/UserChangePasswordOutput.md)
- [UserChangePasswordRequestContent](docs/UserChangePasswordRequestContent.md)
- [UserChangePasswordResponseContent](docs/UserChangePasswordResponseContent.md)
- [UserChangePasswordResponseData](docs/UserChangePasswordResponseData.md)
- [ValidatePricingBase](docs/ValidatePricingBase.md)
- [ValidatePricingBreakdown](docs/ValidatePricingBreakdown.md)
- [ValidatePricingConfigItem](docs/ValidatePricingConfigItem.md)
- [ValidatePricingCurrency](docs/ValidatePricingCurrency.md)
- [ValidatePricingDiscount](docs/ValidatePricingDiscount.md)
- [ValidatePricingInput](docs/ValidatePricingInput.md)
- [ValidatePricingOutput](docs/ValidatePricingOutput.md)
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
- [ValidationError](docs/ValidationError.md)
- [ValidationErrorResponseContent](docs/ValidationErrorResponseContent.md)
- [VpsAvailableFeatures](docs/VpsAvailableFeatures.md)
- [VpsBandwidthInfo](docs/VpsBandwidthInfo.md)
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
