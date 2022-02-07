import SandboxEvent from "../../../model/sandbox-event";
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
import SandboxEventPromise from "../../../model/sandbox-event-promise";
import Api from "../../api";

export default class Page extends SandboxEventDispatcher {

    private SANDBOX = {
        domainName: 'sandbox',
        PAGE: {
            apiName: 'page',
            JAIL: {
                methodName: 'jail'
            },
            READY: {
                methodName: 'ready'
            }
        }
    }

    private pendingRequests: SandboxEventPromise[] = [];

    public ready(): Promise<boolean> {
        const sandboxEvent = new SandboxEvent(this.SANDBOX.domainName, this.SANDBOX.PAGE.apiName, this.SANDBOX.PAGE.JAIL.methodName);
        const sandboxEventPromise = new SandboxEventPromise(sandboxEvent);
        this.pendingRequests.push(sandboxEventPromise);
        this.sendSandboxEvent(sandboxEvent);
        this.registerSandboxEventsListener();
        return sandboxEventPromise.createPromise();
    }

    /**
     *  @internal
     */
    public onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        if (sandboxEvent.domain === this.SANDBOX.domainName && sandboxEvent.api === this.SANDBOX.PAGE.apiName) {
            switch (sandboxEvent.method) {
                case this.SANDBOX.PAGE.READY.methodName:
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