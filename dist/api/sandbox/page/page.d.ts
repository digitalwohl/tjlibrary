import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
export default class Page extends SandboxEventDispatcher {
    private SANDBOX;
    private pendingRequests;
    ready(): Promise<boolean>;
}
