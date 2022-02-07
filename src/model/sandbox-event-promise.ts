import SandboxEvent from "./sandbox-event";

export default class SandboxEventPromise {
    private resolve: (value: any) => void;
    private reject: (reason?: any) => void;
    /**
     *  @internal
     */ 
    public sandboxEvent: SandboxEvent;

    /**
     *  @internal
     */ 
    constructor(sandboxEvent: SandboxEvent) {
        this.sandboxEvent = sandboxEvent;
    }

    /**
     *  @internal
     */ 
    public createPromise(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }

    /**
     *  @internal
     */ 
    public resolvePromise(data: any): void {
        this.resolve(data);
    }

    /**
     *  @internal
     */ 
    public rejectPromise(reason: string): void {
        this.reject(reason);
    }
}