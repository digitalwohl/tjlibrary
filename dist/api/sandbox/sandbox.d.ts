import SandboxEvent from "../../model/sandbox-event";
import General from "./general/general";
export default class Sandbox {
    general: General;
    onEventFromSandbox(sandboxEvent: SandboxEvent): void;
}
