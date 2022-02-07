import SandboxEvent from "./sandbox-event";


export default class SandboxEventDispatcher {
    private PARENT_TARGET_ORIGIN = 'https://localhost/tabjail/sandbox';
    private REGISTER_SUBSCRIPTION_DOMAIN = 'sandbox';
    private REGISTER_SUBSCRIPTION_API = 'page';
    private REGISTER_SUBSCRIPTION_METHOD = 'registerSubscription';

    /**
     *  @internal
     */
    constructor() { }

    /**
     *  @internal
     */
    protected sendSandboxEvent(sandboxEvent: SandboxEvent) {
        window.parent.postMessage(sandboxEvent, this.PARENT_TARGET_ORIGIN);
    }

    /**
     *  @internal
     */
    protected registerSubscription(domain: string, api: string, method: string) {
        let data = {
            domain: domain,
            api: api,
            method: method
        }
        const sandboxEvent = new SandboxEvent(this.REGISTER_SUBSCRIPTION_DOMAIN, this.REGISTER_SUBSCRIPTION_API, this.REGISTER_SUBSCRIPTION_METHOD, data);
        this.sendSandboxEvent(sandboxEvent);
    }
}