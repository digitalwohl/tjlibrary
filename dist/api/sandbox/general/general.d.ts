import SandboxEventDispatcher from "../../../model/sandbox-event-dispatcher";
export default class General extends SandboxEventDispatcher {
    private SANDBOX;
    private pendingRequests;
    ready(): Promise<boolean>;
}
