import Api from "./api/api";
import Windows from "./api/chrome/windows/windows";
import SandboxEvent from "./model/sandbox-event";

const SANDBOX_EVENT_PATH = 'tabjail.event';

export function sendSandboxEvent(sandboxEvent: SandboxEvent) {
    fetch(SANDBOX_EVENT_PATH, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sandboxEvent)
    });
}

// export function sendExtensionEvent(sandboxEvent: SandboxEvent) {
//     // @ts-ignore
//     chrome.runtime.sendMessage(sandboxEvent.data.extensionId, sandboxEvent);
// }

export function onSandboxEvent(sandboxEvent: SandboxEvent) {
    return Api.onSandboxEvent(sandboxEvent);
}

export function onIframeEvent(eventName: string): Promise<any> {
    return Api.onIframeEvent(eventName);
}

export function registerIframeCallback(): void {
    window.addEventListener('message', message => {
        return onIframeEvent(message.data as string);
    }, false);
}
