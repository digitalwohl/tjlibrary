import { customAlphabet } from 'nanoid';

/**
 * @internal
 *  Event that is sent across the sandbox event bus,
 *  it can be exchanged with the sandbox page
 * 
 * @class SandboxEvent
 */
export default class SandboxEvent {
    // STRING_SEPARATOR = '#';

    id: string;
    domain: string;
    action: string;
    data: object;

    /**
     * Creates an instance of SandboxEvent.
     * @param {string} domain
     * @param {string} action
     * @param {object} data
     * @memberof SandboxEvent
     */
    constructor(domain: string, action: string, data?: object) {
        this.domain = domain;
        this.action = action;
        this.data = data;
        this.id = this.generateId();
    }

    /**
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
