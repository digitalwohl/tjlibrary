[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SandboxEventPromise

# Class: SandboxEventPromise

[<internal>](../modules/internal_.md).SandboxEventPromise

## Table of contents

### Constructors

- [constructor](internal_.SandboxEventPromise.md#constructor)

### Properties

- [reject](internal_.SandboxEventPromise.md#reject)
- [resolve](internal_.SandboxEventPromise.md#resolve)
- [sandboxEvent](internal_.SandboxEventPromise.md#sandboxevent)

### Methods

- [createPromise](internal_.SandboxEventPromise.md#createpromise)
- [rejectPromise](internal_.SandboxEventPromise.md#rejectpromise)
- [resolvePromise](internal_.SandboxEventPromise.md#resolvepromise)

## Constructors

### constructor

• **new SandboxEventPromise**(`sandboxEvent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sandboxEvent` | [`SandboxEvent`](internal_.SandboxEvent.md) |

#### Defined in

[src/model/sandbox-event-promise.ts:8](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-promise.ts#L8)

## Properties

### reject

• `Private` **reject**: (`reason?`: `any`) => `void`

#### Type declaration

▸ (`reason?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

##### Returns

`void`

#### Defined in

[src/model/sandbox-event-promise.ts:5](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-promise.ts#L5)

___

### resolve

• `Private` **resolve**: (`value`: `any`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`void`

#### Defined in

[src/model/sandbox-event-promise.ts:4](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-promise.ts#L4)

___

### sandboxEvent

• **sandboxEvent**: [`SandboxEvent`](internal_.SandboxEvent.md)

#### Defined in

[src/model/sandbox-event-promise.ts:6](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-promise.ts#L6)

## Methods

### createPromise

▸ **createPromise**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/model/sandbox-event-promise.ts:12](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-promise.ts#L12)

___

### rejectPromise

▸ **rejectPromise**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |

#### Returns

`void`

#### Defined in

[src/model/sandbox-event-promise.ts:23](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-promise.ts#L23)

___

### resolvePromise

▸ **resolvePromise**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/model/sandbox-event-promise.ts:19](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-promise.ts#L19)
