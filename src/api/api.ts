import SandboxEvent from "../model/sandbox-event";
import Chrome from "./chrome/chrome";
import Sandbox from "./sandbox/sandbox";

export default class Api {
    static chrome = new Chrome();
    static sandbox = new Sandbox();

    static onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        this.sandbox.onEventFromSandbox(sandboxEvent);
        this.chrome.onEventFromSandbox(sandboxEvent);
    }
}