import Api from "./api/api";
import SandboxEvent from "./model/sandbox-event";

export function listenForSandboxEvents(): void {
    window.addEventListener('message', message => {
        Api.onEventFromSandbox(JSON.parse(message.data) as SandboxEvent);
    }, false);
}

export const TJ = Api;
