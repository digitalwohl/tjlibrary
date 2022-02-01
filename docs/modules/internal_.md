[tj_comm](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Classes

- [default](../classes/internal_.default.md)
- [default](../classes/internal_.default-1.md)
- [default](../classes/internal_.default-2.md)
- [default](../classes/internal_.default-3.md)
- [default](../classes/internal_.default-4.md)
- [default](../classes/internal_.default-5.md)
- [default](../classes/internal_.default-6.md)
- [default](../classes/internal_.default-7.md)
- [default](../classes/internal_.default-8.md)

### Interfaces

- [MutedInfo](../interfaces/internal_.MutedInfo.md)
- [Tab](../interfaces/internal_.Tab.md)
- [Window](../interfaces/internal_.Window.md)

### Type aliases

- [windowStateEnum](internal_.md#windowstateenum)
- [windowTypeEnum](internal_.md#windowtypeenum)

## Type aliases

### windowStateEnum

Ƭ **windowStateEnum**: ``"normal"`` \| ``"minimized"`` \| ``"maximized"`` \| ``"fullscreen"`` \| ``"locked-fullscreen"``

The state of this browser window.
In some circumstances a window may not be assigned a state property; for example, when querying closed windows from the sessions API.

**`since`** Chrome 44.

#### Defined in

node_modules/@types/chrome/index.d.ts:10847

___

### windowTypeEnum

Ƭ **windowTypeEnum**: ``"normal"`` \| ``"popup"`` \| ``"panel"`` \| ``"app"`` \| ``"devtools"``

The type of browser window this is.
In some circumstances a window may not be assigned a type property; for example, when querying closed windows from the sessions API.

**`since`** Chrome 44.

#### Defined in

node_modules/@types/chrome/index.d.ts:10854
