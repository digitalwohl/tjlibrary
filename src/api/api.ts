import sandboxEvent from "../model/sandbox-event";
import Chrome from "./chrome/chrome";

export default class Api {
    static chrome = new Chrome();

    static onEventFromSandbox(sandboxEvent: sandboxEvent): void {
        this.chrome.onEventFromSandbox(sandboxEvent);
    }
}