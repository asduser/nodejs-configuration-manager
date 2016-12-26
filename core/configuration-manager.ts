import {Settings} from "./settings";
import {Helpers} from "./helpers/index";

export class ConfigurationManager {

    private static _instance: ConfigurationManager;
    private static allFlags = Helpers.Flags.flag;
    private static modeFlags: string[] = Helpers.Flags.modeFlags;
    private static buildEnvFlags: string[] = Helpers.Flags.buildEnvFlags;
    private static cfgType: string;

    private static main(args: string[]): void {
        console.log(`\n**** WELCOME to "Configuration Manager v1.0"! ****\n`);

        let plugCounter = 0;
        let plugins = ConfigurationManager.getPluginsList(args);
        plugins.forEach((pl) => {
            pl.specify(args);
        });
        let availablePlugin = plugins.length ? plugins[plugCounter] : false;

        while (availablePlugin) {
            console.log(availablePlugin);
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
        if (args.length == 1 && ConfigurationManager.validInputs(args)) {
            switch (true) {
                case args[0] == ConfigurationManager.allFlags.defFlag:
                    ConfigurationManager.cfgType = ConfigurationManager.allFlags.devFlag;
                    plugins = Helpers.Plugins.getDefaultPluginsList();
                    break;
                case args[0] == ConfigurationManager.allFlags.lightFlag:
                    plugins = Helpers.Plugins.getLightPluginsList();
                    break;
            }
        } else if (args.length == 2 && ConfigurationManager.validInputs(args)) {
            /*if (ConfigurationManager.modeFlags.indexOf(args[0]) && ConfigurationManager.buildEnvFlags.indexOf(args[1]) > -1) {
                console.log('*** Custom mode ***');
            } else {
                Helpers.Message.showIncorrectMode();
            }*/
            console.log('2 params logic');
        } else {
            Helpers.Message.showIncorrectMode();
        }

        return plugins;
    }

    private static validInputs(args): boolean {

        const isOneValid = (args: string[]) => {
            console.log('One param');
            const modeFlag = args[0];
            if (modeFlag == ConfigurationManager.allFlags.fullFlag) {
                return false;
            }
            return ConfigurationManager.modeFlags.indexOf(args[0]) > -1;
        };

        const isTwoValid = (args: string[]) => {
            console.log('Two params');
            return ConfigurationManager.modeFlags.indexOf(args[0]) > -1 && ConfigurationManager.buildEnvFlags.indexOf(args[1]) > -1;
        };

        const argsLen = args.length;

        if (!args) return false;

        switch (argsLen) {
            case 1:
                return isOneValid(args);
            case 2:
                return isTwoValid(args);
            default:
                return false;
        }
    }

}