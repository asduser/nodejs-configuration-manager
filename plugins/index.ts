import {ConfigPlugin} from "./config-plugin/config-plugin";
import {VersionPlugin} from "./version-plugin/version-plugin";
import {CustomPlugin} from "./custom-plugin/custom-plugin";

export namespace Plugins {
    
    export const Config = ConfigPlugin;
    export const Version = VersionPlugin;
    export const Custom = CustomPlugin;
    
}