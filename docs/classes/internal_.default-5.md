[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[<internal>](../modules/internal_.md).default

## Hierarchy

- [`default`](internal_.default-7.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](internal_.default-5.md#constructor)

### Properties

- [ACTIONS](internal_.default-5.md#actions)
- [DOMAIN](internal_.default-5.md#domain)
- [onActivatedCallbacks](internal_.default-5.md#onactivatedcallbacks)
- [onAttachedCallbacks](internal_.default-5.md#onattachedcallbacks)
- [onCreatedCallbacks](internal_.default-5.md#oncreatedcallbacks)
- [onDetachedCallbacks](internal_.default-5.md#ondetachedcallbacks)
- [onHighlightedCallbacks](internal_.default-5.md#onhighlightedcallbacks)
- [onMovedCallbacks](internal_.default-5.md#onmovedcallbacks)
- [onRemovedCallbacks](internal_.default-5.md#onremovedcallbacks)
- [onReplacedCallbacks](internal_.default-5.md#onreplacedcallbacks)
- [onUpdatedCallbacks](internal_.default-5.md#onupdatedcallbacks)
- [onZoomChangeCallbacks](internal_.default-5.md#onzoomchangecallbacks)
- [pendingRequests](internal_.default-5.md#pendingrequests)

### Methods

- [onActivated](internal_.default-5.md#onactivated)
- [onAttached](internal_.default-5.md#onattached)
- [onCreated](internal_.default-5.md#oncreated)
- [onDetached](internal_.default-5.md#ondetached)
- [onEventFromSandbox](internal_.default-5.md#oneventfromsandbox)
- [onHighlighted](internal_.default-5.md#onhighlighted)
- [onMoved](internal_.default-5.md#onmoved)
- [onRemoved](internal_.default-5.md#onremoved)
- [onReplaced](internal_.default-5.md#onreplaced)
- [onUpdated](internal_.default-5.md#onupdated)
- [onZoomChange](internal_.default-5.md#onzoomchange)
- [query](internal_.default-5.md#query)
- [registerSubscription](internal_.default-5.md#registersubscription)
- [sendSandboxEvent](internal_.default-5.md#sendsandboxevent)

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
| `ON_ACTIVATED_TABS` | `string` |
| `ON_ACTIVE_CHANGED_TABS` | `string` |
| `ON_ATTACHED_TABS` | `string` |
| `ON_CREATED_TABS` | `string` |
| `ON_DETACHED_TABS` | `string` |
| `ON_HIGHLIGHTED_TABS` | `string` |
| `ON_HIGHLIGHT_CHANGED_TABS` | `string` |
| `ON_MOVED_TABS` | `string` |
| `ON_REMOVED_TABS` | `string` |
| `ON_REPLACED_TABS` | `string` |
| `ON_SELECTION_CHANGED_TABS` | `string` |
| `ON_UPDATED_TABS` | `string` |
| `ON_ZOOM_CHANGE_TABS` | `string` |
| `QUERY` | `string` |

#### Defined in

[src/api/chrome/tabs/tabs.ts:8](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L8)

___

### DOMAIN

• `Private` **DOMAIN**: `string` = `'extension'`

#### Defined in

[src/api/chrome/tabs/tabs.ts:7](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L7)

___

### onActivatedCallbacks

• `Private` **onActivatedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:35](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L35)

___

### onAttachedCallbacks

• `Private` **onAttachedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:47](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L47)

___

### onCreatedCallbacks

• `Private` **onCreatedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:53](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L53)

___

### onDetachedCallbacks

• `Private` **onDetachedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:59](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L59)

___

### onHighlightedCallbacks

• `Private` **onHighlightedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:71](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L71)

___

### onMovedCallbacks

• `Private` **onMovedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:77](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L77)

___

### onRemovedCallbacks

• `Private` **onRemovedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:83](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L83)

___

### onReplacedCallbacks

• `Private` **onReplacedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:89](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L89)

___

### onUpdatedCallbacks

• `Private` **onUpdatedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:101](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L101)

___

### onZoomChangeCallbacks

• `Private` **onZoomChangeCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:107](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L107)

___

### pendingRequests

• `Private` **pendingRequests**: [`default`](internal_.default-8.md)[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:25](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L25)

## Methods

### onActivated

▸ **onActivated**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:36](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L36)

___

### onAttached

▸ **onAttached**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:48](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L48)

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

[src/api/chrome/tabs/tabs.ts:54](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L54)

___

### onDetached

▸ **onDetached**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:60](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L60)

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

[src/api/chrome/tabs/tabs.ts:114](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L114)

___

### onHighlighted

▸ **onHighlighted**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:72](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L72)

___

### onMoved

▸ **onMoved**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:78](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L78)

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

[src/api/chrome/tabs/tabs.ts:84](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L84)

___

### onReplaced

▸ **onReplaced**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:90](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L90)

___

### onUpdated

▸ **onUpdated**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:102](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L102)

___

### onZoomChange

▸ **onZoomChange**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:108](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L108)

___

### query

▸ **query**(): `Promise`<[`Tab`](../interfaces/internal_.Tab.md)[]\>

#### Returns

`Promise`<[`Tab`](../interfaces/internal_.Tab.md)[]\>

#### Defined in

[src/api/chrome/tabs/tabs.ts:27](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/api/chrome/tabs/tabs.ts#L27)

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
