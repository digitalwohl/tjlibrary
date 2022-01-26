import SandboxEvent from "./sandbox-event";

export default class SandboxEventDispatcher {
    private PARENT_TARGET_ORIGIN = 'https://localhost/tabjail/sandbox';

    public sendSandboxEvent(sandboxEvent: SandboxEvent) {
        window.parent.postMessage(JSON.stringify(sandboxEvent), this.PARENT_TARGET_ORIGIN);
    }
}