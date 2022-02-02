/// <reference types="chrome" />
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
export default class Tabs extends SandboxEventDispatcher {
    private DOMAIN;
    private ACTIONS;
    private pendingRequests;
    query(): Promise<chrome.tabs.Tab[]>;
    private onActivatedCallbacks;
    onActivated(callback: Function): void;
    private onAttachedCallbacks;
    onAttached(callback: Function): void;
    private onCreatedCallbacks;
    onCreated(callback: Function): void;
    private onDetachedCallbacks;
    onDetached(callback: Function): void;
    private onHighlightedCallbacks;
    onHighlighted(callback: Function): void;
    private onMovedCallbacks;
    onMoved(callback: Function): void;
    private onRemovedCallbacks;
    onRemoved(callback: Function): void;
    private onReplacedCallbacks;
    onReplaced(callback: Function): void;
    private onUpdatedCallbacks;
    onUpdated(callback: Function): void;
    private onZoomChangeCallbacks;
    onZoomChange(callback: Function): void;
}
