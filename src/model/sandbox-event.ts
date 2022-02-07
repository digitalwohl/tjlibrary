import { customAlphabet } from 'nanoid';

/**
 * 
 *  Event that is sent across the sandbox event bus,
 *  it can be exchanged with the sandbox page
 * 
 * @class SandboxEvent
 */
export default class SandboxEvent {
    // STRING_SEPARATOR = '#';

    id: string;
    domain: string;
    api: string;
    method: string;
    data: object;

    /**
     * @internal
     * Creates an instance of SandboxEvent.
     * @param {string} domain
     * @param {string} api
     * @param {string} method
     * @param {object} data
     * @memberof SandboxEvent
     */
    constructor(domain: string, api: string, method: string,  data?: object) {
        this.domain = domain;
        this.api = api;
        this.method = method;
        this.data = data;
        this.id = this.generateId();
    }

    /**
     * @internal
     * Generates a random event id,
     * used to track events when exchanged with the sandbox
     *
     * @return {string} 
     * @memberof SandboxEvent
     */
    private generateId() {
        const nanoid = customAlphabet('1234567890', 16);
        return nanoid();
    }

    // public toString():string {
    //     return `${this.id}${this.STRING_SEPARATOR}${this.domain}${this.STRING_SEPARATOR}${this.action}`;
    // }
}
