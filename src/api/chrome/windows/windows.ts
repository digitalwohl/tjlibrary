import { sendSandboxEvent } from "../../..";
import SandboxEvent from "../../../model/sandbox-event";
import SandboxEventPromise from "../../../model/sandbox-event-promise";

export default class Windows {

    private DOMAIN = 'extension';
    private ACTIONS = {
        GET_ALL_WINDOWS: 'getAllWindows',
        ON_BOUNDS_CHANGED_WINDOWS: 'onBoundsChangedWindows',
        ON_CREATED_WINDOWS: 'onCreatedWindows',
        ON_FOCUS_CHANGED_WINDOWS: 'onFocusChangedWindows',
        ON_REMOVED_WINDOWS: 'onRemovedWindows'
    }

    private pendingRequests: SandboxEventPromise[];

    public async getAll(): Promise<chrome.windows.Window[]> {
        const sandboxEvent = new SandboxEvent(this.DOMAIN, this.ACTIONS.GET_ALL_WINDOWS);
        const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
        this.pendingRequests.push(sandboxEventPromise);
        sendSandboxEvent(sandboxEvent);
        return sandboxEventPromise.createPromise();
    }

    // public async update(windowId: string, updateInfo: chrome.windows.UpdateInfo): Promise<chrome.windows.Window> {
    //     const sandboxEvent = new SandboxEvent('extension','updateWindows', {windowId: windowId, updateInfo: updateInfo});
    //     const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
    //     this.pendingRequests.push(sandboxEventPromise);
    //     return sandboxEventPromise.createPromise();
    // }

    public onBoundsChanged(window: chrome.windows.Window, callback: Function): void {
        callback(window);
    }

    public onCreated(window: chrome.windows.Window, callback: Function): void {
        callback(window);
    }

    public onFocusChanged(windowId: number, callback: Function): void {
        callback(windowId);
    }

    public onRemoved(windowId: number, callback: Function): void {
        callback(windowId);
    }

    public registerCallback(callback: Function) {
        callback();
    }

    public onSandboxEvent(sandboxEvent: SandboxEvent): void {
        if (sandboxEvent.domain === this.DOMAIN) {
            switch (sandboxEvent.action) {
                case this.ACTIONS.GET_ALL_WINDOWS:
                    const sandboxEventPromise = this.pendingRequests.find(request => request.sandboxEvent.id === sandboxEvent.id);
                    if(sandboxEventPromise) {
                        sandboxEventPromise.resolvePromise(sandboxEvent.data);
                    } else {
                        sandboxEventPromise.rejectPromise('Cannot resolve event.');
                    }
                    break;
                default:
                    break;
            }
        }
    }

    public onIframeEvent(eventName: string): Promise<any> {
        let responsePromise = null;
        switch (eventName) {
            case this.ACTIONS.GET_ALL_WINDOWS:
                responsePromise = this.getAll();
                break;
            default:
                break;
        }
        return responsePromise;
    }
}