[tj_comm](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Tab

# Interface: Tab

[<internal>](../modules/internal_.md).Tab

## Table of contents

### Properties

- [active](internal_.Tab.md#active)
- [audible](internal_.Tab.md#audible)
- [autoDiscardable](internal_.Tab.md#autodiscardable)
- [discarded](internal_.Tab.md#discarded)
- [favIconUrl](internal_.Tab.md#faviconurl)
- [groupId](internal_.Tab.md#groupid)
- [height](internal_.Tab.md#height)
- [highlighted](internal_.Tab.md#highlighted)
- [id](internal_.Tab.md#id)
- [incognito](internal_.Tab.md#incognito)
- [index](internal_.Tab.md#index)
- [mutedInfo](internal_.Tab.md#mutedinfo)
- [openerTabId](internal_.Tab.md#openertabid)
- [pendingUrl](internal_.Tab.md#pendingurl)
- [pinned](internal_.Tab.md#pinned)
- [selected](internal_.Tab.md#selected)
- [sessionId](internal_.Tab.md#sessionid)
- [status](internal_.Tab.md#status)
- [title](internal_.Tab.md#title)
- [url](internal_.Tab.md#url)
- [width](internal_.Tab.md#width)
- [windowId](internal_.Tab.md#windowid)

## Properties

### active

• **active**: `boolean`

Whether the tab is active in its window. (Does not necessarily mean the window is focused.)

**`since`** Chrome 16.

#### Defined in

node_modules/@types/chrome/index.d.ts:8460

___

### audible

• `Optional` **audible**: `boolean`

Optional.
Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also muted). Equivalent to whether the speaker audio indicator is showing.

**`since`** Chrome 45.

#### Defined in

node_modules/@types/chrome/index.d.ts:8483

___

### autoDiscardable

• **autoDiscardable**: `boolean`

Whether the tab can be discarded automatically by the browser when resources are low.

**`since`** Chrome 54.

#### Defined in

node_modules/@types/chrome/index.d.ts:8493

___

### discarded

• **discarded**: `boolean`

Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.

**`since`** Chrome 54.

#### Defined in

node_modules/@types/chrome/index.d.ts:8488

___

### favIconUrl

• `Optional` **favIconUrl**: `string`

Optional.
The URL of the tab's favicon. This property is only present if the extension's manifest includes the "tabs" permission. It may also be an empty string if the tab is loading.

#### Defined in

node_modules/@types/chrome/index.d.ts:8465

___

### groupId

• **groupId**: `number`

The ID of the group that the tab belongs to.

**`since`** Chrome 88

#### Defined in

node_modules/@types/chrome/index.d.ts:8519

___

### height

• `Optional` **height**: `number`

Optional. The height of the tab in pixels.

**`since`** Chrome 31.

#### Defined in

node_modules/@types/chrome/index.d.ts:8509

___

### highlighted

• **highlighted**: `boolean`

Whether the tab is highlighted.

**`since`** Chrome 16.

#### Defined in

node_modules/@types/chrome/index.d.ts:8453

___

### id

• `Optional` **id**: `number`

Optional.
The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be assigned an ID, for example when querying foreign tabs using the sessions API, in which case a session ID may be present. Tab ID can also be set to chrome.tabs.TAB_ID_NONE for apps and devtools windows.

#### Defined in

node_modules/@types/chrome/index.d.ts:8470

___

### incognito

• **incognito**: `boolean`

Whether the tab is in an incognito window.

#### Defined in

node_modules/@types/chrome/index.d.ts:8472

___

### index

• **index**: `number`

The zero-based index of the tab within its window.

#### Defined in

node_modules/@types/chrome/index.d.ts:8421

___

### mutedInfo

• `Optional` **mutedInfo**: [`MutedInfo`](internal_.MutedInfo.md)

Optional.
Current tab muted state and the reason for the last state change.

**`since`** Chrome 46. Warning: this is the current Beta channel.

#### Defined in

node_modules/@types/chrome/index.d.ts:8499

___

### openerTabId

• `Optional` **openerTabId**: `number`

Optional.
The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.

**`since`** Chrome 18.

#### Defined in

node_modules/@types/chrome/index.d.ts:8427

___

### pendingUrl

• `Optional` **pendingUrl**: `string`

The URL the tab is navigating to, before it has committed.
This property is only present if the extension's manifest includes the "tabs" permission and there is a pending navigation.

**`since`** Chrome 79.

#### Defined in

node_modules/@types/chrome/index.d.ts:8443

___

### pinned

• **pinned**: `boolean`

Whether the tab is pinned.

**`since`** Chrome 9.

#### Defined in

node_modules/@types/chrome/index.d.ts:8448

___

### selected

• **selected**: `boolean`

Whether the tab is selected.

**`deprecated`** since Chrome 33. Please use tabs.Tab.highlighted.

#### Defined in

node_modules/@types/chrome/index.d.ts:8477

___

### sessionId

• `Optional` **sessionId**: `string`

Optional. The session ID used to uniquely identify a Tab obtained from the sessions API.

**`since`** Chrome 31.

#### Defined in

node_modules/@types/chrome/index.d.ts:8514

___

### status

• `Optional` **status**: `string`

Optional.
Either loading or complete.

#### Defined in

node_modules/@types/chrome/index.d.ts:8419

___

### title

• `Optional` **title**: `string`

Optional.
The title of the tab. This property is only present if the extension's manifest includes the "tabs" permission.

#### Defined in

node_modules/@types/chrome/index.d.ts:8432

___

### url

• `Optional` **url**: `string`

Optional.
The URL the tab is displaying. This property is only present if the extension's manifest includes the "tabs" permission.

#### Defined in

node_modules/@types/chrome/index.d.ts:8437

___

### width

• `Optional` **width**: `number`

Optional. The width of the tab in pixels.

**`since`** Chrome 31.

#### Defined in

node_modules/@types/chrome/index.d.ts:8504

___

### windowId

• **windowId**: `number`

The ID of the window the tab is contained within.

#### Defined in

node_modules/@types/chrome/index.d.ts:8455
