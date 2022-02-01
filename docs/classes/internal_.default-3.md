[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / default

# Class: default

[<internal>](../modules/internal_.md).default

 Event that is sent across the sandbox event bus,
 it can be exchanged with the sandbox page

## Table of contents

### Constructors

- [constructor](internal_.default-3.md#constructor)

### Properties

- [action](internal_.default-3.md#action)
- [data](internal_.default-3.md#data)
- [domain](internal_.default-3.md#domain)
- [id](internal_.default-3.md#id)

### Methods

- [generateId](internal_.default-3.md#generateid)

## Constructors

### constructor

• **new default**(`domain`, `action`, `data?`)

Creates an instance of SandboxEvent.

**`memberof`** SandboxEvent

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `action` | `string` |
| `data?` | `object` |

#### Defined in

[src/model/sandbox-event.ts:24](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event.ts#L24)

## Properties

### action

• **action**: `string`

#### Defined in

[src/model/sandbox-event.ts:14](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event.ts#L14)

___

### data

• **data**: `object`

#### Defined in

[src/model/sandbox-event.ts:15](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event.ts#L15)

___

### domain

• **domain**: `string`

#### Defined in

[src/model/sandbox-event.ts:13](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event.ts#L13)

___

### id

• **id**: `string`

#### Defined in

[src/model/sandbox-event.ts:12](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event.ts#L12)

## Methods

### generateId

▸ `Private` **generateId**(): `string`

Generates a random event id,
used to track events when exchanged with the sandbox

**`memberof`** SandboxEvent

#### Returns

`string`

#### Defined in

[src/model/sandbox-event.ts:38](https://github.com/digitalwohl/tjlibrary/blob/bcb5078/src/model/sandbox-event.ts#L38)
