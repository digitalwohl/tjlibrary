import SandboxEvent from "./sandbox-event";

export default class SandboxEventPromise {
    // public promiseId: string;
    private resolve: (value: any) => void;
    private reject: (reason?: any) => void;
    public sandboxEvent: SandboxEvent;
    
    constructor(sandboxEvent: SandboxEvent) {
        this.sandboxEvent = sandboxEvent;
        // this.promiseId = this.sandboxEvent.id;
    }

    public createPromise(): Promise<any> {
        return new Promise( (resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }

    public resolvePromise(data: any): void {
        this.resolve(data);
    }

    public rejectPromise(reason: string) :void {
        this.reject(reason);
    }
}