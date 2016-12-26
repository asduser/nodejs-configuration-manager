import {Settings} from "../../core/settings";
import {Helpers} from "../../core/helpers/index";
const fs = require('fs-extra');
const options = {
    devCfg: './plugins/config-plugin/data/config_dev.json', // root category is build-manager
    prodCfg: './plugins/config-plugin/data/config_prod.json', // root category is build-manager
    targetCfg: '../src/config/app.json' // root category is build-manager
};

export class ConfigPlugin implements Settings.IPlugin {

    public specify(flags: string[]): boolean {

        let modeFlag, buildFlag;
        if (flags.length == 1) {
            buildFlag = flags[0] == Helpers.Flags.flag.defFlag ? Helpers.Flags.flag.devFlag : Helpers.Flags.flag.prodFlag;
        }

        console.log(`Initialized config plugin with ${buildFlag}`);

        let configFile: string;
        switch (true) {
            case buildFlag == Helpers.Flags.flag.devFlag:
                configFile = options.devCfg;
                break;
            case buildFlag == Helpers.Flags.flag.prodFlag:
                configFile = options.prodCfg;
                break;
        }

        fs.copy(configFile, options.targetCfg, function (err) {
            if (err) return console.error(err);
            console.log("Application config has been updated.")
        });

        return true;

    }
    
}