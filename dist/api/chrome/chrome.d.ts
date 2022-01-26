import SandboxEvent from "../../model/sandbox-event";
import Windows from "./windows/windows";
export default class Chrome {
    windows: Windows;
    onEventFromSandbox(sandboxEvent: SandboxEvent): void;
}
