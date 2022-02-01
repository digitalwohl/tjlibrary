[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[<internal>](../modules/internal_.md).default

## Hierarchy

- [`default`](internal_.default-7.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](internal_.default-4.md#constructor)

### Properties

- [ACTIONS](internal_.default-4.md#actions)
- [DOMAIN](internal_.default-4.md#domain)
- [onBoundsChangedCallbacks](internal_.default-4.md#onboundschangedcallbacks)
- [onCreatedCallbacks](internal_.default-4.md#oncreatedcallbacks)
- [onFocusChangedCallbacks](internal_.default-4.md#onfocuschangedcallbacks)
- [onRemovedCallbacks](internal_.default-4.md#onremovedcallbacks)
- [pendingRequests](internal_.default-4.md#pendingrequests)

### Methods

- [getAll](internal_.default-4.md#getall)
- [onBoundsChanged](internal_.default-4.md#onboundschanged)
- [onCreated](internal_.default-4.md#oncreated)
- [onEventFromSandbox](internal_.default-4.md#oneventfromsandbox)
- [onFocusChanged](internal_.default-4.md#onfocuschanged)
- [onRemoved](internal_.default-4.md#onremoved)
- [registerSubscription](internal_.default-4.md#registersubscription)
- [sendSandboxEvent](internal_.default-4.md#sendsandboxevent)

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
| `GET_ALL_WINDOWS` | `string` |
| `ON_BOUNDS_CHANGED_WINDOWS` | `string` |
| `ON_CREATED_WINDOWS` | `string` |
| `ON_FOCUS_CHANGED_WINDOWS` | `string` |
| `ON_REMOVED_WINDOWS` | `string` |

#### Defined in

[src/api/chrome/windows/windows.ts:8](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L8)

___

### DOMAIN

• `Private` **DOMAIN**: `string` = `'extension'`

#### Defined in

[src/api/chrome/windows/windows.ts:7](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L7)

___

### onBoundsChangedCallbacks

• `Private` **onBoundsChangedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/windows/windows.ts:34](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L34)

___

### onCreatedCallbacks

• `Private` **onCreatedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/windows/windows.ts:40](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L40)

___

### onFocusChangedCallbacks

• `Private` **onFocusChangedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/windows/windows.ts:46](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L46)

___

### onRemovedCallbacks

• `Private` **onRemovedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/windows/windows.ts:52](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L52)

___

### pendingRequests

• `Private` **pendingRequests**: [`default`](internal_.default-8.md)[] = `[]`

#### Defined in

[src/api/chrome/windows/windows.ts:16](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L16)

## Methods

### getAll

▸ **getAll**(): `Promise`<[`Window`](../interfaces/internal_.Window.md)[]\>

#### Returns

`Promise`<[`Window`](../interfaces/internal_.Window.md)[]\>

#### Defined in

[src/api/chrome/windows/windows.ts:18](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L18)

___

### onBoundsChanged

▸ **onBoundsChanged**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/windows/windows.ts:35](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L35)

___

### onCreated

▸ **onCreated**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/windows/windows.ts:41](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L41)

___

### onEventFromSandbox

▸ **onEventFromSandbox**(`sandboxEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sandboxEvent` | [`default`](internal_.default-3.md) |

#### Returns

`void`

#### Defined in

[src/api/chrome/windows/windows.ts:58](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L58)

___

### onFocusChanged

▸ **onFocusChanged**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/windows/windows.ts:47](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L47)

___

### onRemoved

▸ **onRemoved**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/windows/windows.ts:53](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/windows/windows.ts#L53)

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
