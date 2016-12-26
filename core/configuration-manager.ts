import {Settings} from "./settings";
import {Helpers} from "./helpers/index";

export class ConfigurationManager {

    private static _instance: ConfigurationManager;
    private static allFlags = Helpers.Flags.flag;

    private static main(args: string[]): void {
        console.log(`\n**** WELCOME to "Configuration Manager v1.0"! ****\n`);

        let plugCounter = 0;
        let plugins = ConfigurationManager.getPluginsList(args);
        plugins.forEach((pl) => {
            pl.specify(args);
        });
        let availablePlugin = plugins.length ? plugins[plugCounter] : false;

        while (availablePlugin) {
            plugCounter++;
            availablePlugin = plugins[plugCounter];
        }
    }

    constructor(args: string[]) {
        if (!ConfigurationManager._instance) {
            ConfigurationManager.main(args);
            ConfigurationManager._instance = this;
        } else {
            throw new Error('Configuration manager is already used!');
        }
    }

    private static getPluginsList(args): any[] {

        let plugins: Settings.IPlugin[] = [];

        if (!args || !args.length) {
            Helpers.Message.showIncorrectMode();
        }
        if (args.length == 1 && Helpers.InputsValidation.isValid(args)) {
            switch (true) {
                case args[0] == ConfigurationManager.allFlags.defFlag:
                    plugins = Helpers.Plugins.getDefaultPluginsList();
                    break;
                case args[0] == ConfigurationManager.allFlags.lightFlag:
                    plugins = Helpers.Plugins.getLightPluginsList();
                    break;
            }
        } else if (args.length == 2 && Helpers.InputsValidation.isValid(args)) {
            plugins = Helpers.Plugins.getFullPluginsList();
        } else {
            Helpers.Message.showIncorrectMode();
        }

        return plugins;
    }

}