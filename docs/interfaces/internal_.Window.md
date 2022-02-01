[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Window

# Interface: Window

[<internal>](../modules/internal_.md).Window

## Table of contents

### Properties

- [alwaysOnTop](internal_.Window.md#alwaysontop)
- [focused](internal_.Window.md#focused)
- [height](internal_.Window.md#height)
- [id](internal_.Window.md#id)
- [incognito](internal_.Window.md#incognito)
- [left](internal_.Window.md#left)
- [sessionId](internal_.Window.md#sessionid)
- [state](internal_.Window.md#state)
- [tabs](internal_.Window.md#tabs)
- [top](internal_.Window.md#top)
- [type](internal_.Window.md#type)
- [width](internal_.Window.md#width)

## Properties

### alwaysOnTop

• **alwaysOnTop**: `boolean`

Whether the window is set to be always on top.

**`since`** Chrome 19.

#### Defined in

node_modules/@types/chrome/index.d.ts:10703

___

### focused

• **focused**: `boolean`

Whether the window is currently the focused window.

#### Defined in

node_modules/@types/chrome/index.d.ts:10698

___

### height

• `Optional` **height**: `number`

Optional. The height of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned height property, for example when querying closed windows from the sessions API.

#### Defined in

node_modules/@types/chrome/index.d.ts:10689

___

### id

• `Optional` **id**: `number`

Optional. The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may not be assigned an ID, for example when querying windows using the sessions API, in which case a session ID may be present.

#### Defined in

node_modules/@types/chrome/index.d.ts:10711

___

### incognito

• **incognito**: `boolean`

Whether the window is incognito.

#### Defined in

node_modules/@types/chrome/index.d.ts:10705

___

### left

• `Optional` **left**: `number`

Optional. The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may not be assigned left property, for example when querying closed windows from the sessions API.

#### Defined in

node_modules/@types/chrome/index.d.ts:10713

___

### sessionId

• `Optional` **sessionId**: `string`

Optional. The session ID used to uniquely identify a Window obtained from the sessions API.

**`since`** Chrome 31.

#### Defined in

node_modules/@types/chrome/index.d.ts:10718

___

### state

• `Optional` **state**: [`windowStateEnum`](../modules/internal_.md#windowstateenum)

The state of this browser window.

**`since`** Chrome 17.

#### Defined in

node_modules/@types/chrome/index.d.ts:10696

___

### tabs

• `Optional` **tabs**: [`Tab`](internal_.Tab.md)[]

Optional. Array of tabs.Tab objects representing the current tabs in the window.

#### Defined in

node_modules/@types/chrome/index.d.ts:10685

___

### top

• `Optional` **top**: `number`

Optional. The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may not be assigned top property, for example when querying closed windows from the sessions API.

#### Defined in

node_modules/@types/chrome/index.d.ts:10687

___

### type

• `Optional` **type**: [`windowTypeEnum`](../modules/internal_.md#windowtypeenum)

The type of browser window this is.

#### Defined in

node_modules/@types/chrome/index.d.ts:10709

___

### width

• `Optional` **width**: `number`

Optional. The width of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned width property, for example when querying closed windows from the sessions API.

#### Defined in

node_modules/@types/chrome/index.d.ts:10691
