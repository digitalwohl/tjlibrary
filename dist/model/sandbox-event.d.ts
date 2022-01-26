export default class SandboxEvent {
    STRING_SEPARATOR: string;
    id: string;
    domain: string;
    action: string;
    data: object;
    constructor(domain: string, action: string, data?: object);
    private generateId;
    toString(): string;
}
