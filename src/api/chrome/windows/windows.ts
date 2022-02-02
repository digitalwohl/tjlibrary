import SandboxEvent from "../../../model/sandbox-event";
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
import SandboxEventPromise from "../../../model/sandbox-event-promise";

export default class Windows extends SandboxEventDispatcher {

    private DOMAIN = 'extension';
    private ACTIONS = {
        GET_ALL_WINDOWS: 'getAllWindows',
        ON_BOUNDS_CHANGED_WINDOWS: 'onBoundsChangedWindows',
        ON_CREATED_WINDOWS: 'onCreatedWindows',
        ON_FOCUS_CHANGED_WINDOWS: 'onFocusChangedWindows',
        ON_REMOVED_WINDOWS: 'onRemovedWindows'
    }

    private pendingRequests: SandboxEventPromise[] = [];

    /**
     *  @internal
     */
    constructor() { super() }

    public getAll(): Promise<chrome.windows.Window[]> {
        const sandboxEvent = new SandboxEvent(this.DOMAIN, this.ACTIONS.GET_ALL_WINDOWS);
        const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
        this.pendingRequests.push(sandboxEventPromise);
        this.sendSandboxEvent(sandboxEvent);
        return sandboxEventPromise.createPromise();
    }

    // public async update(windowId: string, updateInfo: chrome.windows.UpdateInfo): Promise<chrome.windows.Window> {
    //     const sandboxEvent = new SandboxEvent('extension','updateWindows', {windowId: windowId, updateInfo: updateInfo});
    //     const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
    //     this.pendingRequests.push(sandboxEventPromise);
    //     return sandboxEventPromise.createPromise();
    // }


    private onBoundsChangedCallbacks: Function[] = [];
    public onBoundsChanged(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_BOUNDS_CHANGED_WINDOWS);
        this.onBoundsChangedCallbacks.push(callback);
    }

    private onCreatedCallbacks: Function[] = [];
    public onCreated(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_CREATED_WINDOWS);
        this.onCreatedCallbacks.push(callback);
    }

    private onFocusChangedCallbacks: Function[] = [];
    public onFocusChanged(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_FOCUS_CHANGED_WINDOWS);
        this.onFocusChangedCallbacks.push(callback);
    }

    private onRemovedCallbacks: Function[] = [];
    public onRemoved(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_REMOVED_WINDOWS);
        this.onRemovedCallbacks.push(callback);
    }

    /**
     *  @internal
     */
    public onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        if (sandboxEvent.domain === this.DOMAIN) {
            switch (sandboxEvent.action) {
                case this.ACTIONS.GET_ALL_WINDOWS:
                    const foundPromise = this.pendingRequests.find(request => request.sandboxEvent.id === sandboxEvent.id);
                    const fountPromiseIndex = this.pendingRequests.findIndex(request => request.sandboxEvent.id === sandboxEvent.id);
                    if (foundPromise) {
                        foundPromise.resolvePromise(sandboxEvent.data);
                        this.pendingRequests.splice(fountPromiseIndex, 1);
                    }
                    break;
                case this.ACTIONS.ON_BOUNDS_CHANGED_WINDOWS:
                    this.onBoundsChangedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_CREATED_WINDOWS:
                    this.onCreatedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_FOCUS_CHANGED_WINDOWS:
                    this.onFocusChangedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_BOUNDS_CHANGED_WINDOWS:
                    this.onRemovedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                default:
                    break;
            }
        }
    }

}