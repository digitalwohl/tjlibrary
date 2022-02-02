import SandboxEvent from "./sandbox-event";

/**
 *  @internal
 */
export default class SandboxEventDispatcher {
    private PARENT_TARGET_ORIGIN = 'https://localhost/tabjail/sandbox';
    private REGISTER_SUBSCRIPTION_DOMAIN = 'sandbox';
    private REGISTER_SUBSCRIPTION_ACTION = 'registerSubscription';

    constructor() {}

    /**
     *  @internal
     */
    public sendSandboxEvent(sandboxEvent: SandboxEvent) {
        window.parent.postMessage(sandboxEvent, this.PARENT_TARGET_ORIGIN);
    }

    /**
     *  @internal
     */
    public registerSubscription(domain: string, action: string) {
        let data = {
            domain: domain,
            action: action
        }
        const sandboxEvent = new SandboxEvent(this.REGISTER_SUBSCRIPTION_DOMAIN, this.REGISTER_SUBSCRIPTION_ACTION, data);
        this.sendSandboxEvent(sandboxEvent);
    }
}