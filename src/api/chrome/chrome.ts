import SandboxEvent from "../../model/sandbox-event";
import Tabs from "./tabs/tabs";
import Windows from "./windows/windows";

export default class Chrome {

    public windows = new Windows();
    public tabs = new Tabs();

    onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        this.windows.onEventFromSandbox(sandboxEvent);
    }
}