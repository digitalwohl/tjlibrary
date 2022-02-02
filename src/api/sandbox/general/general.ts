import SandboxEvent from "../../../model/sandbox-event";
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
import SandboxEventPromise from "../../../model/sandbox-event-promise";
import Api from "../../api";

/**
 *  @internal
 */
export default class General extends SandboxEventDispatcher {

    private DOMAIN = 'sandbox';
    private ACTIONS = {
        JAIL_PAGE: 'jailPage',
        READY: 'isReady'
    }

    private pendingRequests: SandboxEventPromise[] = [];

    public ready(): Promise<boolean> {
        const sandboxEvent = new SandboxEvent(this.DOMAIN, this.ACTIONS.JAIL_PAGE);
        const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
        this.pendingRequests.push(sandboxEventPromise);
        this.sendSandboxEvent(sandboxEvent);
        this.registerSandboxEventsListener();
        return sandboxEventPromise.createPromise();
    }

    public onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        if (sandboxEvent.domain === this.DOMAIN) {
            switch (sandboxEvent.action) {
                case this.ACTIONS.READY:
                    const foundPromise = this.pendingRequests.find(request => request.sandboxEvent.id === sandboxEvent.id);
                    const fountPromiseIndex = this.pendingRequests.findIndex(request => request.sandboxEvent.id === sandboxEvent.id);
                    if (foundPromise) {
                        foundPromise.resolvePromise(true);
                        this.pendingRequests.splice(fountPromiseIndex, 1);
                    }
                    break;
                default:
                    break;
            }
        }
    }

    /**
     *  @internal
     */
    private registerSandboxEventsListener(): void {
        window.addEventListener('message', message => {
            Api.onEventFromSandbox(message.data as SandboxEvent);
        }, false);
    }

}