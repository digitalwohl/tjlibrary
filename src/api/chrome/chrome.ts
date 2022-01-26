import SandboxEvent from "../../model/sandbox-event";
import Windows from "./windows/windows";

export default class Chrome {

    public windows = new Windows();

    onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        this.windows.onEventFromSandbox(sandboxEvent);
    }
}