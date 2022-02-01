[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[<internal>](../modules/internal_.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](internal_.default-4.md)

  ↳ [`default`](internal_.default-5.md)

  ↳ [`default`](internal_.default-6.md)

## Table of contents

### Constructors

- [constructor](internal_.default-7.md#constructor)

### Properties

- [PARENT\_TARGET\_ORIGIN](internal_.default-7.md#parent_target_origin)
- [REGISTER\_SUBSCRIPTION\_ACTION](internal_.default-7.md#register_subscription_action)
- [REGISTER\_SUBSCRIPTION\_DOMAIN](internal_.default-7.md#register_subscription_domain)

### Methods

- [registerSubscription](internal_.default-7.md#registersubscription)
- [sendSandboxEvent](internal_.default-7.md#sendsandboxevent)

## Constructors

### constructor

• **new default**()

## Properties

### PARENT\_TARGET\_ORIGIN

• `Private` **PARENT\_TARGET\_ORIGIN**: `string` = `'https://localhost/tabjail/sandbox'`

#### Defined in

[src/model/sandbox-event-dispatcher.ts:4](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-dispatcher.ts#L4)

___

### REGISTER\_SUBSCRIPTION\_ACTION

• `Private` **REGISTER\_SUBSCRIPTION\_ACTION**: `string` = `'registerSubscription'`

#### Defined in

[src/model/sandbox-event-dispatcher.ts:6](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-dispatcher.ts#L6)

___

### REGISTER\_SUBSCRIPTION\_DOMAIN

• `Private` **REGISTER\_SUBSCRIPTION\_DOMAIN**: `string` = `'sandbox'`

#### Defined in

[src/model/sandbox-event-dispatcher.ts:5](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-dispatcher.ts#L5)

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

#### Defined in

[src/model/sandbox-event-dispatcher.ts:8](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event-dispatcher.ts#L8)
