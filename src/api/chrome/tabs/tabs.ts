import SandboxEvent from "../../../model/sandbox-event";
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
import SandboxEventPromise from "../../../model/sandbox-event-promise";

export default class Tabs extends SandboxEventDispatcher {

    private CHROME = {
        domainName: 'chrome',
        TABS: {
            apiName: 'tabs',
            QUERY: {
                methodName: 'query'
            },
            ON_ACTIVATED: {
                methodName: 'onActivated'
            },
            ON_ATTACHED: {
                methodName: 'onAttached'
            },
            ON_CREATED: {
                methodName: 'onCreated'
            },
            ON_DETACHED: {
                methodName: 'onDetached'
            },
            ON_HIGHLIGHT_CHANGED: {
                methodName: 'onHighlightChanged'
            },
            ON_HIGHLIGHTED: {
                methodName: 'onHighlighted'
            },
            ON_MOVED: {
                methodName: 'onMoved'
            },
            ON_REMOVED: {
                methodName: 'onRemoved'
            },
            ON_REPLACED: {
                methodName: 'onReplaced'
            },
            ON_SELECTION_CHANGED: {
                methodName: 'onSelectionChanged'
            },
            ON_UPDATED: {
                methodName: 'onUpdated'
            },
            ON_ZOOM_CHANGE: {
                methodName: 'onZoomChange'
            }
        }
    }

    /**
     *  @internal
     */
    constructor() { super() }

    private pendingRequests: SandboxEventPromise[] = [];

    public query(): Promise<chrome.tabs.Tab[]> {
        const sandboxEvent = new SandboxEvent(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.QUERY.methodName);
        const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
        this.pendingRequests.push(sandboxEventPromise);
        this.sendSandboxEvent(sandboxEvent);
        return sandboxEventPromise.createPromise();
    }

    private onActivatedCallbacks: Function[] = [];
    public onActivated(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_ACTIVATED.methodName);
        this.onActivatedCallbacks.push(callback);
    }

    private onAttachedCallbacks: Function[] = [];
    public onAttached(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_ATTACHED.methodName);
        this.onAttachedCallbacks.push(callback);
    }

    private onCreatedCallbacks: Function[] = [];
    public onCreated(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_CREATED.methodName);
        this.onCreatedCallbacks.push(callback);
    }

    private onDetachedCallbacks: Function[] = [];
    public onDetached(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_DETACHED.methodName);
        this.onDetachedCallbacks.push(callback);
    }

    private onHighlightedCallbacks: Function[] = [];
    public onHighlighted(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_HIGHLIGHTED.methodName);
        this.onHighlightedCallbacks.push(callback);
    }

    private onMovedCallbacks: Function[] = [];
    public onMoved(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_MOVED.methodName);
        this.onMovedCallbacks.push(callback);
    }

    private onRemovedCallbacks: Function[] = [];
    public onRemoved(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_REMOVED.methodName);
        this.onRemovedCallbacks.push(callback);
    }

    private onReplacedCallbacks: Function[] = [];
    public onReplaced(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_REPLACED.methodName);
        this.onReplacedCallbacks.push(callback);
    }

    private onUpdatedCallbacks: Function[] = [];
    public onUpdated(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_UPDATED.methodName);
        this.onUpdatedCallbacks.push(callback);
    }

    private onZoomChangeCallbacks: Function[] = [];
    public onZoomChange(callback: Function): void {
        this.registerSubscription(this.CHROME.domainName, this.CHROME.TABS.apiName, this.CHROME.TABS.ON_ZOOM_CHANGE.methodName);
        this.onZoomChangeCallbacks.push(callback);
    }

    /**
     *  @internal
     */
    public onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        if (sandboxEvent.domain === this.CHROME.domainName && sandboxEvent.api === this.CHROME.TABS.apiName) {
            switch (sandboxEvent.method) {
                case this.CHROME.TABS.QUERY.methodName:
                    const foundPromise = this.pendingRequests.find(request => request.sandboxEvent.id === sandboxEvent.id);
                    const fountPromiseIndex = this.pendingRequests.findIndex(request => request.sandboxEvent.id === sandboxEvent.id);
                    if (foundPromise) {
                        foundPromise.resolvePromise(sandboxEvent.data);
                        this.pendingRequests.splice(fountPromiseIndex, 1);
                    }
                    break;
                case this.CHROME.TABS.ON_ACTIVATED.methodName:
                    this.onActivatedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_ATTACHED.methodName:
                    this.onAttachedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_CREATED.methodName:
                    this.onCreatedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_DETACHED.methodName:
                    this.onDetachedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_HIGHLIGHTED.methodName:
                    this.onHighlightedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_MOVED.methodName:
                    this.onMovedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_REMOVED.methodName:
                    this.onRemovedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_REPLACED.methodName:
                    this.onReplacedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_UPDATED.methodName:
                    this.onUpdatedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.CHROME.TABS.ON_ZOOM_CHANGE.methodName:
                    this.onZoomChangeCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                default:
                    break;
            }
        }
    }


}