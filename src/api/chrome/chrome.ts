import sandboxEvent from "../../model/sandbox-event";
import Windows from "./windows/windows";

export default class Chrome {

    public windows = new Windows();

    onSandboxEvent(sandboxEvent: sandboxEvent): void {
        this.windows.onSandboxEvent(sandboxEvent);
    }

    onIframeEvent(eventName: string): Promise<any> {
        return this.windows.onIframeEvent(eventName);
    }
}