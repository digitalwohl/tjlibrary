import sandboxEvent from "../../model/sandbox-event";
import Windows from "./windows/windows";

export default class Chrome {

    public windows = new Windows();

    onEventFromSandbox(sandboxEvent: sandboxEvent): void {
        this.windows.onEventFromSandbox(sandboxEvent);
    }
}