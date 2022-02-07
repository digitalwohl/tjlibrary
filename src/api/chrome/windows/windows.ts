import SandboxEvent from "../../../model/sandbox-event";
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
import SandboxEventPromise from "../../../model/sandbox-event-promise";

export default class Windows extends SandboxEventDispatcher {

    private CHROME = {
        domainName: 'CHROME',
        WINDOWS: {
            apiName: 'windows',
            GET_ALL: {
                methodName: 'getAll'
            },
            ON_BOUNDS_CHANGED: {
                methodName: 'onBoundsChanged'
            },
            ON_CREATED: {
                methodName: 'onCreated'
            },
            ON_FOCUS_CHANGED: {
                methodName: 'onFocusChanged'
            },
            ON_REMOVED: {
                methodName: 'onRemoved'
            }
        }
    }

    private pendingRequests: SandboxEventPromise[] = [];

    /**
     *  @internal
     */
    constructor() { super() }

    public getAll(): Promise<chrome.windows.Window[]> {
        const sandboxEvent = new SandboxEvent(this.CHROME.domainName, this.CHROME.WINDOWS.apiName, this.CHROME.WINDOWS.GET_ALL.methodName);
        const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
        this.pendingRequests.push(sandboxEventPromise);
        this.sendSandboxEvent(sandboxEvent);
        return sandboxEventPromise.createPromise();
    }

    private onBoundsChangedCallbacks: Function[] = [];
    public onBoundsChanged(callback: (window: chrome.windows.Window) => void): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.WINDOWS.apiName, this.CHROME.WINDOWS.ON_BOUNDS_CHANGED.methodName);
        this.onBoundsChangedCallbacks.push(callback);
    }

    private onCreatedCallbacks: Function[] = [];
    public onCreated(callback: (window: chrome.windows.Window) => void): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.WINDOWS.apiName, this.CHROME.WINDOWS.ON_CREATED.methodName);
        this.onCreatedCallbacks.push(callback);
    }

    private onFocusChangedCallbacks: Function[] = [];
    public onFocusChanged(callback: (windowId: number) => void): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.WINDOWS.apiName, this.CHROME.WINDOWS.ON_FOCUS_CHANGED.methodName);
        this.onFocusChangedCallbacks.push(callback);
    }

    private onRemovedCallbacks: Function[] = [];
    public onRemoved(callback: (windowId: number) => void): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.WINDOWS.apiName, this.CHROME.WINDOWS.ON_REMOVED.methodName);
        this.onRemovedCallbacks.push(callback);
    }

    /**
     *  @internal
     */
    public onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        if (sandboxEvent.domain === this.CHROME.domainName && sandboxEvent.api === this.CHROME.WINDOWS.apiName) {
            switch (sandboxEvent.method) {
                case this.CHROME.WINDOWS.GET_ALL.methodName:
                    const foundPromise = this.pendingRequests.find(request => request.sandboxEvent.id === sandboxEvent.id);
                    const fountPromiseIndex = this.pendingRequests.findIndex(request => request.sandboxEvent.id === sandboxEvent.id);
                    if (foundPromise) {
                        foundPromise.resolvePromise(sandboxEvent.data);
                        this.pendingRequests.splice(fountPromiseIndex, 1);
                    }
                    break;
                case this.CHROME.WINDOWS.ON_BOUNDS_CHANGED.methodName:
                    this.onBoundsChangedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.WINDOWS.ON_CREATED.methodName:
                    this.onCreatedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.WINDOWS.ON_FOCUS_CHANGED.methodName:
                    this.onFocusChangedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.WINDOWS.ON_BOUNDS_CHANGED.methodName:
                    this.onRemovedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                default:
                    break;
            }
        }
    }

}