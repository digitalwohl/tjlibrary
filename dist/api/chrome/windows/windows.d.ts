/// <reference types="chrome" />
import SandboxEvent from "../../../model/sandbox-event";
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
    onEventFromSandbox(sandboxEvent: SandboxEvent): void;
}
