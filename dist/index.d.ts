import SandboxEvent from "./model/sandbox-event";
export declare function sendSandboxEvent(sandboxEvent: SandboxEvent): void;
export declare function onSandboxEvent(sandboxEvent: SandboxEvent): void;
export declare function onIframeEvent(eventName: string): Promise<any>;
export declare function registerIframeCallback(): void;
