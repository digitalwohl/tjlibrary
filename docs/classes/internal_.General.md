[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / General

# Class: General

[<internal>](../modules/internal_.md).General

## Hierarchy

- [`SandboxEventDispatcher`](internal_.SandboxEventDispatcher.md)

  ↳ **`General`**

## Table of contents

### Constructors

- [constructor](internal_.General.md#constructor)

### Properties

- [ACTIONS](internal_.General.md#actions)
- [DOMAIN](internal_.General.md#domain)
- [pendingRequests](internal_.General.md#pendingrequests)

### Methods

- [onEventFromSandbox](internal_.General.md#oneventfromsandbox)
- [ready](internal_.General.md#ready)
- [registerSandboxEventsListener](internal_.General.md#registersandboxeventslistener)
- [registerSubscription](internal_.General.md#registersubscription)
- [sendSandboxEvent](internal_.General.md#sendsandboxevent)

## Constructors

### constructor

• **new General**()

#### Inherited from

[SandboxEventDispatcher](internal_.SandboxEventDispatcher.md).[constructor](internal_.SandboxEventDispatcher.md#constructor)

## Properties

### ACTIONS

• `Private` **ACTIONS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `JAIL_PAGE` | `string` |
| `READY` | `string` |

#### Defined in

[src/api/sandbox/general/general.ts:9](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/sandbox/general/general.ts#L9)

___

### DOMAIN

• `Private` **DOMAIN**: `string` = `'sandbox'`

#### Defined in

[src/api/sandbox/general/general.ts:8](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/sandbox/general/general.ts#L8)

___

### pendingRequests

• `Private` **pendingRequests**: [`SandboxEventPromise`](internal_.SandboxEventPromise.md)[] = `[]`

#### Defined in

[src/api/sandbox/general/general.ts:14](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/sandbox/general/general.ts#L14)

## Methods

### onEventFromSandbox

▸ **onEventFromSandbox**(`sandboxEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sandboxEvent` | [`SandboxEvent`](internal_.SandboxEvent.md) |

#### Returns

`void`

#### Defined in

[src/api/sandbox/general/general.ts:25](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/sandbox/general/general.ts#L25)

___

### ready

▸ **ready**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/sandbox/general/general.ts:16](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/sandbox/general/general.ts#L16)

___

### registerSandboxEventsListener

▸ `Private` **registerSandboxEventsListener**(): `void`

#### Returns

`void`

#### Defined in

[src/api/sandbox/general/general.ts:42](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/sandbox/general/general.ts#L42)

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

[SandboxEventDispatcher](internal_.SandboxEventDispatcher.md).[registerSubscription](internal_.SandboxEventDispatcher.md#registersubscription)

#### Defined in

[src/model/sandbox-event-dispatcher.ts:12](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-dispatcher.ts#L12)

___

### sendSandboxEvent

▸ **sendSandboxEvent**(`sandboxEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sandboxEvent` | [`SandboxEvent`](internal_.SandboxEvent.md) |

#### Returns

`void`

#### Inherited from

[SandboxEventDispatcher](internal_.SandboxEventDispatcher.md).[sendSandboxEvent](internal_.SandboxEventDispatcher.md#sendsandboxevent)

#### Defined in

[src/model/sandbox-event-dispatcher.ts:8](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-dispatcher.ts#L8)
