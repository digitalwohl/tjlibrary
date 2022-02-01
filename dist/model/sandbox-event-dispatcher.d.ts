import SandboxEvent from "./sandbox-event";
export default class SandboxEventDispatcher {
    private PARENT_TARGET_ORIGIN;
    private REGISTER_SUBSCRIPTION_DOMAIN;
    private REGISTER_SUBSCRIPTION_ACTION;
    sendSandboxEvent(sandboxEvent: SandboxEvent): void;
    registerSubscription(domain: string, action: string): void;
}
