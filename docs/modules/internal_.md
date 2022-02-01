[tj_comm](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Classes

- [Api](../classes/internal_.Api.md)
- [Chrome](../classes/internal_.Chrome.md)
- [General](../classes/internal_.General.md)
- [Sandbox](../classes/internal_.Sandbox.md)
- [SandboxEvent](../classes/internal_.SandboxEvent.md)
- [SandboxEventDispatcher](../classes/internal_.SandboxEventDispatcher.md)
- [SandboxEventPromise](../classes/internal_.SandboxEventPromise.md)
- [Tabs](../classes/internal_.Tabs.md)
- [Windows](../classes/internal_.Windows.md)

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
