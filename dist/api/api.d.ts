import SandboxEvent from "../model/sandbox-event";
import Chrome from "./chrome/chrome";
import Sandbox from "./sandbox/sandbox";
export default class Api {
    static chrome: Chrome;
    static sandbox: Sandbox;
    static onEventFromSandbox(sandboxEvent: SandboxEvent): void;
}
