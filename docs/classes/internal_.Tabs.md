[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Tabs

# Class: Tabs

[<internal>](../modules/internal_.md).Tabs

## Hierarchy

- [`SandboxEventDispatcher`](internal_.SandboxEventDispatcher.md)

  ↳ **`Tabs`**

## Table of contents

### Constructors

- [constructor](internal_.Tabs.md#constructor)

### Properties

- [ACTIONS](internal_.Tabs.md#actions)
- [DOMAIN](internal_.Tabs.md#domain)
- [onActivatedCallbacks](internal_.Tabs.md#onactivatedcallbacks)
- [onAttachedCallbacks](internal_.Tabs.md#onattachedcallbacks)
- [onCreatedCallbacks](internal_.Tabs.md#oncreatedcallbacks)
- [onDetachedCallbacks](internal_.Tabs.md#ondetachedcallbacks)
- [onHighlightedCallbacks](internal_.Tabs.md#onhighlightedcallbacks)
- [onMovedCallbacks](internal_.Tabs.md#onmovedcallbacks)
- [onRemovedCallbacks](internal_.Tabs.md#onremovedcallbacks)
- [onReplacedCallbacks](internal_.Tabs.md#onreplacedcallbacks)
- [onUpdatedCallbacks](internal_.Tabs.md#onupdatedcallbacks)
- [onZoomChangeCallbacks](internal_.Tabs.md#onzoomchangecallbacks)
- [pendingRequests](internal_.Tabs.md#pendingrequests)

### Methods

- [onActivated](internal_.Tabs.md#onactivated)
- [onAttached](internal_.Tabs.md#onattached)
- [onCreated](internal_.Tabs.md#oncreated)
- [onDetached](internal_.Tabs.md#ondetached)
- [onEventFromSandbox](internal_.Tabs.md#oneventfromsandbox)
- [onHighlighted](internal_.Tabs.md#onhighlighted)
- [onMoved](internal_.Tabs.md#onmoved)
- [onRemoved](internal_.Tabs.md#onremoved)
- [onReplaced](internal_.Tabs.md#onreplaced)
- [onUpdated](internal_.Tabs.md#onupdated)
- [onZoomChange](internal_.Tabs.md#onzoomchange)
- [query](internal_.Tabs.md#query)
- [registerSubscription](internal_.Tabs.md#registersubscription)
- [sendSandboxEvent](internal_.Tabs.md#sendsandboxevent)

## Constructors

### constructor

• **new Tabs**()

#### Inherited from

[SandboxEventDispatcher](internal_.SandboxEventDispatcher.md).[constructor](internal_.SandboxEventDispatcher.md#constructor)

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

[src/api/chrome/tabs/tabs.ts:8](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L8)

___

### DOMAIN

• `Private` **DOMAIN**: `string` = `'extension'`

#### Defined in

[src/api/chrome/tabs/tabs.ts:7](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L7)

___

### onActivatedCallbacks

• `Private` **onActivatedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:35](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L35)

___

### onAttachedCallbacks

• `Private` **onAttachedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:47](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L47)

___

### onCreatedCallbacks

• `Private` **onCreatedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:53](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L53)

___

### onDetachedCallbacks

• `Private` **onDetachedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:59](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L59)

___

### onHighlightedCallbacks

• `Private` **onHighlightedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:71](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L71)

___

### onMovedCallbacks

• `Private` **onMovedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:77](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L77)

___

### onRemovedCallbacks

• `Private` **onRemovedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:83](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L83)

___

### onReplacedCallbacks

• `Private` **onReplacedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:89](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L89)

___

### onUpdatedCallbacks

• `Private` **onUpdatedCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:101](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L101)

___

### onZoomChangeCallbacks

• `Private` **onZoomChangeCallbacks**: `Function`[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:107](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L107)

___

### pendingRequests

• `Private` **pendingRequests**: [`SandboxEventPromise`](internal_.SandboxEventPromise.md)[] = `[]`

#### Defined in

[src/api/chrome/tabs/tabs.ts:25](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L25)

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

[src/api/chrome/tabs/tabs.ts:36](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L36)

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

[src/api/chrome/tabs/tabs.ts:48](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L48)

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

[src/api/chrome/tabs/tabs.ts:54](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L54)

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

[src/api/chrome/tabs/tabs.ts:60](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L60)

___

### onEventFromSandbox

▸ **onEventFromSandbox**(`sandboxEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sandboxEvent` | [`SandboxEvent`](internal_.SandboxEvent.md) |

#### Returns

`void`

#### Defined in

[src/api/chrome/tabs/tabs.ts:114](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L114)

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

[src/api/chrome/tabs/tabs.ts:72](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L72)

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

[src/api/chrome/tabs/tabs.ts:78](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L78)

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

[src/api/chrome/tabs/tabs.ts:84](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L84)

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

[src/api/chrome/tabs/tabs.ts:90](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L90)

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

[src/api/chrome/tabs/tabs.ts:102](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L102)

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

[src/api/chrome/tabs/tabs.ts:108](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L108)

___

### query

▸ **query**(): `Promise`<[`Tab`](../interfaces/internal_.Tab.md)[]\>

#### Returns

`Promise`<[`Tab`](../interfaces/internal_.Tab.md)[]\>

#### Defined in

[src/api/chrome/tabs/tabs.ts:27](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/api/chrome/tabs/tabs.ts#L27)

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
