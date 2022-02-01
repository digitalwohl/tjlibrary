[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[<internal>](../modules/internal_.md).default

## Table of contents

### Constructors

- [constructor](internal_.default-8.md#constructor)

### Properties

- [reject](internal_.default-8.md#reject)
- [resolve](internal_.default-8.md#resolve)
- [sandboxEvent](internal_.default-8.md#sandboxevent)

### Methods

- [createPromise](internal_.default-8.md#createpromise)
- [rejectPromise](internal_.default-8.md#rejectpromise)
- [resolvePromise](internal_.default-8.md#resolvepromise)

## Constructors

### constructor

• **new default**(`sandboxEvent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sandboxEvent` | [`default`](internal_.default-3.md) |

#### Defined in

[src/model/sandbox-event-promise.ts:8](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-promise.ts#L8)

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

[src/model/sandbox-event-promise.ts:5](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-promise.ts#L5)

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

[src/model/sandbox-event-promise.ts:4](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-promise.ts#L4)

___

### sandboxEvent

• **sandboxEvent**: [`default`](internal_.default-3.md)

#### Defined in

[src/model/sandbox-event-promise.ts:6](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-promise.ts#L6)

## Methods

### createPromise

▸ **createPromise**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/model/sandbox-event-promise.ts:12](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-promise.ts#L12)

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

[src/model/sandbox-event-promise.ts:23](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-promise.ts#L23)

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

[src/model/sandbox-event-promise.ts:19](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-promise.ts#L19)
