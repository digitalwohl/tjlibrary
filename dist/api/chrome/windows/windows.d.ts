/// <reference types="chrome" />
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
export default class Windows extends SandboxEventDispatcher {
    private DOMAIN;
    private ACTIONS;
    private pendingRequests;
    getAll(): Promise<chrome.windows.Window[]>;
    private onBoundsChangedCallbacks;
    onBoundsChanged(callback: Function): void;
    private onCreatedCallbacks;
    onCreated(callback: Function): void;
    private onFocusChangedCallbacks;
    onFocusChanged(callback: Function): void;
    private onRemovedCallbacks;
    onRemoved(callback: Function): void;
}
