import {Settings} from "../settings";
import {Plugins} from "../../plugins/index";

export class PluginsHelper {
    
    public static getDefaultPluginsList(): Settings.IPlugin[] {
        return [
            new Plugins.Version(),
            new Plugins.Config(),
        ];
    }

    public static getLightPluginsList(): Settings.IPlugin[] {
        return [
            new Plugins.Version()
        ]
    }

    public static getFullPluginsList(): Settings.IPlugin[] {
        return [
            new Plugins.Version(),
            new Plugins.Config(),
            new Plugins.Custom()
        ]
    }
    
}