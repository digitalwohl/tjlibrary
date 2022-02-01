[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SandboxEventDispatcher

# Class: SandboxEventDispatcher

[<internal>](../modules/internal_.md).SandboxEventDispatcher

## Hierarchy

- **`SandboxEventDispatcher`**

  ↳ [`Windows`](internal_.Windows.md)

  ↳ [`Tabs`](internal_.Tabs.md)

  ↳ [`General`](internal_.General.md)

## Table of contents

### Constructors

- [constructor](internal_.SandboxEventDispatcher.md#constructor)

### Properties

- [PARENT\_TARGET\_ORIGIN](internal_.SandboxEventDispatcher.md#parent_target_origin)
- [REGISTER\_SUBSCRIPTION\_ACTION](internal_.SandboxEventDispatcher.md#register_subscription_action)
- [REGISTER\_SUBSCRIPTION\_DOMAIN](internal_.SandboxEventDispatcher.md#register_subscription_domain)

### Methods

- [registerSubscription](internal_.SandboxEventDispatcher.md#registersubscription)
- [sendSandboxEvent](internal_.SandboxEventDispatcher.md#sendsandboxevent)

## Constructors

### constructor

• **new SandboxEventDispatcher**()

## Properties

### PARENT\_TARGET\_ORIGIN

• `Private` **PARENT\_TARGET\_ORIGIN**: `string` = `'https://localhost/tabjail/sandbox'`

#### Defined in

[src/model/sandbox-event-dispatcher.ts:4](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-dispatcher.ts#L4)

___

### REGISTER\_SUBSCRIPTION\_ACTION

• `Private` **REGISTER\_SUBSCRIPTION\_ACTION**: `string` = `'registerSubscription'`

#### Defined in

[src/model/sandbox-event-dispatcher.ts:6](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-dispatcher.ts#L6)

___

### REGISTER\_SUBSCRIPTION\_DOMAIN

• `Private` **REGISTER\_SUBSCRIPTION\_DOMAIN**: `string` = `'sandbox'`

#### Defined in

[src/model/sandbox-event-dispatcher.ts:5](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-dispatcher.ts#L5)

## Methods

### registerSubscription

▸ **registerSubscription**(`domain`, `action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `action` | `string` |

#### Returns

`void`

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

#### Defined in

[src/model/sandbox-event-dispatcher.ts:8](https://github.com/digitalwohl/tjlibrary/blob/ea250d0/src/model/sandbox-event-dispatcher.ts#L8)
