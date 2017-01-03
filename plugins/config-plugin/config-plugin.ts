import {Settings} from "../../core/settings";
import {Helpers} from "../../core/helpers/index";
import {BasePlugin} from "../base/base-plugin";
const fs = require('fs-extra');
const options = {
    devCfg: './plugins/config-plugin/data/config_dev.json', // root directory is configuration-manager directory 
    prodCfg: './plugins/config-plugin/data/config_prod.json',
    targetCfg: './dist/app.json'
};

export class ConfigPlugin extends BasePlugin implements Settings.IPlugin {

    public specify(flags: string[]): boolean {

        let modeFlag, buildFlag;
        if (flags.length == 1) {
            buildFlag = flags[0] == Helpers.Flags.flag.defFlag ? Helpers.Flags.flag.devFlag : Helpers.Flags.flag.prodFlag;
        } else {
            buildFlag = flags[1];
        }

        let configFile: string;
        switch (true) {
            case buildFlag == Helpers.Flags.flag.devFlag:
                configFile = options.devCfg;
                break;
            case buildFlag == Helpers.Flags.flag.prodFlag:
                configFile = options.prodCfg;
                break;
        }

        fs.copySync(configFile, options.targetCfg);
        console.log("Application config has been updated.");

        return true;

    }
    
}