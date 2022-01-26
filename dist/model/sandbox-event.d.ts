export default class SandboxEvent {
    id: string;
    domain: string;
    action: string;
    data: object;
    constructor(domain: string, action: string, data?: object);
    private generateId;
}
