/// <reference types="chrome" />
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
export default class Windows extends SandboxEventDispatcher {
    private CHROME;
    private pendingRequests;
    getAll(): Promise<chrome.windows.Window[]>;
    private onBoundsChangedCallbacks;
    onBoundsChanged(callback: (window: chrome.windows.Window) => void): void;
    private onCreatedCallbacks;
    onCreated(callback: (window: chrome.windows.Window) => void): void;
    private onFocusChangedCallbacks;
    onFocusChanged(callback: (windowId: number) => void): void;
    private onRemovedCallbacks;
    onRemoved(callback: (windowId: number) => void): void;
}
