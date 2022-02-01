[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MutedInfo

# Interface: MutedInfo

[<internal>](../modules/internal_.md).MutedInfo

Tab muted state and the reason for the last state change.

**`since`** Chrome 46. Warning: this is the current Beta channel.

## Table of contents

### Properties

- [extensionId](internal_.MutedInfo.md#extensionid)
- [muted](internal_.MutedInfo.md#muted)
- [reason](internal_.MutedInfo.md#reason)

## Properties

### extensionId

• `Optional` **extensionId**: `string`

Optional.
The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last changed.

#### Defined in

node_modules/@types/chrome/index.d.ts:8411

___

### muted

• **muted**: `boolean`

Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound). Equivalent to whether the muted audio indicator is showing.

#### Defined in

node_modules/@types/chrome/index.d.ts:8398

___

### reason

• `Optional` **reason**: `string`

Optional.
The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed.
"user": A user input action has set/overridden the muted state.
"capture": Tab capture started, forcing a muted state change.
"extension": An extension, identified by the extensionId field, set the muted state.

#### Defined in

node_modules/@types/chrome/index.d.ts:8406
