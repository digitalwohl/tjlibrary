[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[<internal>](../modules/internal_.md).default

## Hierarchy

- [`default`](internal_.default-7.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](internal_.default-6.md#constructor)

### Properties

- [ACTIONS](internal_.default-6.md#actions)
- [DOMAIN](internal_.default-6.md#domain)
- [pendingRequests](internal_.default-6.md#pendingrequests)

### Methods

- [onEventFromSandbox](internal_.default-6.md#oneventfromsandbox)
- [ready](internal_.default-6.md#ready)
- [registerSandboxEventsListener](internal_.default-6.md#registersandboxeventslistener)
- [registerSubscription](internal_.default-6.md#registersubscription)
- [sendSandboxEvent](internal_.default-6.md#sendsandboxevent)

## Constructors

### constructor

• **new default**()

#### Inherited from

[default](internal_.default-7.md).[constructor](internal_.default-7.md#constructor)

## Properties

### ACTIONS

• `Private` **ACTIONS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `JAIL_PAGE` | `string` |
| `READY` | `string` |

#### Defined in

[src/api/sandbox/general/general.ts:9](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/sandbox/general/general.ts#L9)

___

### DOMAIN

• `Private` **DOMAIN**: `string` = `'sandbox'`

#### Defined in

[src/api/sandbox/general/general.ts:8](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/sandbox/general/general.ts#L8)

___

### pendingRequests

• `Private` **pendingRequests**: [`default`](internal_.default-8.md)[] = `[]`

#### Defined in

[src/api/sandbox/general/general.ts:14](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/sandbox/general/general.ts#L14)

## Methods

### onEventFromSandbox

▸ **onEventFromSandbox**(`sandboxEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sandboxEvent` | [`default`](internal_.default-3.md) |

#### Returns

`void`

#### Defined in

[src/api/sandbox/general/general.ts:25](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/sandbox/general/general.ts#L25)

___

### ready

▸ **ready**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/sandbox/general/general.ts:16](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/sandbox/general/general.ts#L16)

___

### registerSandboxEventsListener

▸ `Private` **registerSandboxEventsListener**(): `void`

#### Returns

`void`

#### Defined in

[src/api/sandbox/general/general.ts:42](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/sandbox/general/general.ts#L42)

___

### registerSubscription

▸ **registerSubscription**(`domain`, `action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `action` | `string` |

#### Returns

`void`

#### Inherited from

[default](internal_.default-7.md).[registerSubscription](internal_.default-7.md#registersubscription)

#### Defined in

[src/model/sandbox-event-dispatcher.ts:12](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-dispatcher.ts#L12)

___

### sendSandboxEvent

▸ **sendSandboxEvent**(`sandboxEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sandboxEvent` | [`default`](internal_.default-3.md) |

#### Returns

`void`

#### Inherited from

[default](internal_.default-7.md).[sendSandboxEvent](internal_.default-7.md#sendsandboxevent)

#### Defined in

[src/model/sandbox-event-dispatcher.ts:8](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-dispatcher.ts#L8)
