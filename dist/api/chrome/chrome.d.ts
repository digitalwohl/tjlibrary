import SandboxEvent from "../../model/sandbox-event";
import Tabs from "./tabs/tabs";
import Windows from "./windows/windows";
export default class Chrome {
    windows: Windows;
    tabs: Tabs;
    onEventFromSandbox(sandboxEvent: SandboxEvent): void;
}
