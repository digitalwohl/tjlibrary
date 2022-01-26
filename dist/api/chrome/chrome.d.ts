import sandboxEvent from "../../model/sandbox-event";
import Windows from "./windows/windows";
export default class Chrome {
    windows: Windows;
    onSandboxEvent(sandboxEvent: sandboxEvent): void;
    onIframeEvent(eventName: string): Promise<any>;
}
