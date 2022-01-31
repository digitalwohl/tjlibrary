import SandboxEvent from "./sandbox-event";
export default class SandboxEventDispatcher {
    private PARENT_TARGET_ORIGIN;
    sendSandboxEvent(sandboxEvent: SandboxEvent): void;
    registerSubscription(domain: string, action: string): void;
}
