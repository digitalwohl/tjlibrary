import sandboxEvent from "../model/sandbox-event";
import Chrome from "./chrome/chrome";

export default class Api {
    static chrome = new Chrome();
    
    static onSandboxEvent(sandboxEvent: sandboxEvent) {
        return this.chrome.onSandboxEvent(sandboxEvent);
    }

    static onIframeEvent(eventName: string): Promise<any> {
        return this.chrome.onIframeEvent(eventName);
    }
}