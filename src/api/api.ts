import SandboxEvent from "../model/sandbox-event";
import Chrome from "./chrome/chrome";

export default class Api {
    static chrome = new Chrome();

    static onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        this.chrome.onEventFromSandbox(sandboxEvent);
    }
}