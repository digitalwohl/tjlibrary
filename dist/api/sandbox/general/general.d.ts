import SandboxEvent from "../../../model/sandbox-event";
import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
export default class General extends SandboxEventDispatcher {
    private DOMAIN;
    private ACTIONS;
    private pendingRequests;
    ready(): Promise<boolean>;
    onEventFromSandbox(sandboxEvent: SandboxEvent): void;
    private registerSandboxEventsListener;
}
