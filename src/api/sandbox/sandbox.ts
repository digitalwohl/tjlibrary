import SandboxEvent from "../../model/sandbox-event";
import Page from "./page/page";

export default class Sandbox {

    public page = new Page();

    /**
     *  @internal
     */
    constructor() { }

    /**
     *  @internal
     */
    onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        this.page.onEventFromSandbox(sandboxEvent);
    }
}