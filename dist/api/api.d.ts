import sandboxEvent from "../model/sandbox-event";
import Chrome from "./chrome/chrome";
export default class Api {
    static chrome: Chrome;
    static onSandboxEvent(sandboxEvent: sandboxEvent): void;
    static onIframeEvent(eventName: string): Promise<any>;
}
