import {Settings} from "../../core/settings";
import {Helpers} from "../../core/helpers/index";
import {BasePlugin} from "../base/base-plugin";

export class CustomPlugin extends BasePlugin implements Settings.IPlugin {

    public specify(flags?: string[]): boolean {

        let envFlag = flags[1];
        switch (envFlag) {
            case Helpers.Flags.flag.devFlag:
                console.log('Logic for development environment.');
                break;
            case Helpers.Flags.flag.prodFlag:
                console.log('Logic for production environment.');
                break;
        }

        return true;

    }

}