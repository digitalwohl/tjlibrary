import SandboxEvent from "../../../model/sandbox-event";
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
import SandboxEventPromise from "../../../model/sandbox-event-promise";

export default class Tabs extends SandboxEventDispatcher {

    private DOMAIN = 'extension';
    private ACTIONS = {
        QUERY: 'queryTabs',
        ON_ACTIVATED_TABS: 'onActivatedTabs',
        ON_ACTIVE_CHANGED_TABS: 'onActiveChangedTabs',
        ON_ATTACHED_TABS: 'onAttachedTabs',
        ON_CREATED_TABS: 'onCreatedTabs',
        ON_DETACHED_TABS: 'onDetachedTabs',
        ON_HIGHLIGHT_CHANGED_TABS: 'onHighlightChangedTabs',
        ON_HIGHLIGHTED_TABS: 'onHighlightedTabs',
        ON_MOVED_TABS: 'onMovedTabs',
        ON_REMOVED_TABS: 'onRemovedTabs',
        ON_REPLACED_TABS: 'onReplacedTabs',
        ON_SELECTION_CHANGED_TABS: 'onSelectionChangedTabs',
        ON_UPDATED_TABS: 'onUpdatedTabs',
        ON_ZOOM_CHANGE_TABS: 'onZoomChangeTabs'
    }

    private pendingRequests: SandboxEventPromise[] = [];

    public query(): Promise<chrome.tabs.Tab[]> {
        const sandboxEvent = new SandboxEvent(this.DOMAIN, this.ACTIONS.QUERY);
        const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
        this.pendingRequests.push(sandboxEventPromise);
        this.sendSandboxEvent(sandboxEvent);
        return sandboxEventPromise.createPromise();
    }

    private onActivatedCallbacks: Function[] = [];
    public onActivated(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_ACTIVATED_TABS);
        this.onActivatedCallbacks.push(callback);
    }

    private onActiveChangedCallbacks: Function[] = [];
    public onActiveChanged(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_ACTIVE_CHANGED_TABS);
        this.onActiveChangedCallbacks.push(callback);
    }

    private onAttachedCallbacks: Function[] = [];
    public onAttached(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_ATTACHED_TABS);
        this.onAttachedCallbacks.push(callback);
    }

    private onCreatedCallbacks: Function[] = [];
    public onCreated(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_CREATED_TABS);
        this.onCreatedCallbacks.push(callback);
    }

    private onDetachedCallbacks: Function[] = [];
    public onDetached(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_DETACHED_TABS);
        this.onDetachedCallbacks.push(callback);
    }

    private onHighlightChangedCallbacks: Function[] = [];
    public onHighlightChanged(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_HIGHLIGHT_CHANGED_TABS);
        this.onHighlightChangedCallbacks.push(callback);
    }

    private onHighlightedCallbacks: Function[] = [];
    public onHighlighted(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_HIGHLIGHTED_TABS);
        this.onHighlightedCallbacks.push(callback);
    }

    private onMovedCallbacks: Function[] = [];
    public onMoved(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_MOVED_TABS);
        this.onMovedCallbacks.push(callback);
    }

    private onRemovedCallbacks: Function[] = [];
    public onRemoved(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_REMOVED_TABS);
        this.onRemovedCallbacks.push(callback);
    }

    private onReplacedCallbacks: Function[] = [];
    public onReplaced(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_REPLACED_TABS);
        this.onReplacedCallbacks.push(callback);
    }

    private onSelectionChangedCallbacks: Function[] = [];
    public onSelectionChanged(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_SELECTION_CHANGED_TABS);
        this.onSelectionChangedCallbacks.push(callback);
    }

    private onUpdatedCallbacks: Function[] = [];
    public onUpdated(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_UPDATED_TABS);
        this.onUpdatedCallbacks.push(callback);
    }

    private onZoomChangeCallbacks: Function[] = [];
    public onZoomChange(callback: Function): void {
        this.registerSubscription(this.DOMAIN, this.ACTIONS.ON_ZOOM_CHANGE_TABS);
        this.onZoomChangeCallbacks.push(callback);
    }


    public onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        if (sandboxEvent.domain === this.DOMAIN) {
            switch (sandboxEvent.action) {
                case this.ACTIONS.QUERY:
                    const foundPromise = this.pendingRequests.find(request => request.sandboxEvent.id === sandboxEvent.id);
                    const fountPromiseIndex = this.pendingRequests.findIndex(request => request.sandboxEvent.id === sandboxEvent.id);
                    if (foundPromise) {
                        foundPromise.resolvePromise(sandboxEvent.data);
                        this.pendingRequests.splice(fountPromiseIndex, 1);
                    }
                    break;
                case this.ACTIONS.ON_ACTIVATED_TABS:
                    this.onActivatedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_ACTIVE_CHANGED_TABS:
                    this.onActiveChangedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_ATTACHED_TABS:
                    this.onAttachedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_CREATED_TABS:
                    this.onCreatedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_DETACHED_TABS:
                    this.onDetachedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_HIGHLIGHT_CHANGED_TABS:
                    this.onHighlightChangedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_HIGHLIGHTED_TABS:
                    this.onHighlightedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_MOVED_TABS:
                    this.onMovedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_REMOVED_TABS:
                    this.onRemovedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_REPLACED_TABS:
                    this.onReplacedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_SELECTION_CHANGED_TABS:
                    this.onSelectionChangedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_UPDATED_TABS:
                    this.onUpdatedCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                case this.ACTIONS.ON_ZOOM_CHANGE_TABS:
                    this.onZoomChangeCallbacks.forEach(callback => callback(sandboxEvent.data));
                    break;
                default:
                    break;
            }
        }
    }


}