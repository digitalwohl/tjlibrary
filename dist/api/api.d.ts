import sandboxEvent from "../model/sandbox-event";
import Chrome from "./chrome/chrome";
export default class Api {
    static chrome: Chrome;
    static onEventFromSandbox(sandboxEvent: sandboxEvent): void;
}
