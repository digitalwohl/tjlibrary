import SandboxEvent from "../../model/sandbox-event";
import General from "./general/general";

export default class Sandbox {

    public general = new General();

    onEventFromSandbox(sandboxEvent: SandboxEvent): void {
        this.general.onEventFromSandbox(sandboxEvent);
    }
}