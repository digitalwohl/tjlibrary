import SandboxEvent from "./sandbox-event";

export default class SandboxEventDispatcher {
    private PARENT_TARGET_ORIGIN = 'https://localhost/tabjail/sandbox';

    public sendSandboxEvent(sandboxEvent: SandboxEvent) {
        window.parent.postMessage(sandboxEvent, this.PARENT_TARGET_ORIGIN);
    }

    public registerSubscription(domain:string, action: string) {
        const sandboxEvent = new SandboxEvent(domain, action);
        this.sendSandboxEvent(sandboxEvent);
    }
}