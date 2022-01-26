import SandboxEvent from "./sandbox-event";
export default class SandboxEventPromise {
    private resolve;
    private reject;
    sandboxEvent: SandboxEvent;
    constructor(sandboxEvent: SandboxEvent);
    createPromise(): Promise<any>;
    resolvePromise(data: any): void;
    rejectPromise(reason: string): void;
}
