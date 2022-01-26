/// <reference types="chrome" />
import SandboxEvent from "../../../model/sandbox-event";
export default class Windows {
    private DOMAIN;
    private ACTIONS;
    private pendingRequests;
    getAll(): Promise<chrome.windows.Window[]>;
    onBoundsChanged(window: chrome.windows.Window, callback: Function): void;
    onCreated(window: chrome.windows.Window, callback: Function): void;
    onFocusChanged(windowId: number, callback: Function): void;
    onRemoved(windowId: number, callback: Function): void;
    registerCallback(callback: Function): void;
    onSandboxEvent(sandboxEvent: SandboxEvent): void;
    onIframeEvent(eventName: string): Promise<any>;
}
