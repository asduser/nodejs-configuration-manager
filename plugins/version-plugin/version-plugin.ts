import {Settings} from "../../core/settings";
import {BasePlugin} from "../base/base-plugin";
const jsonfile = require('jsonfile');
const path = '../src/config/cache-manager/config.json'; // root category is build-manager
const version = new Date().getTime();
const data = { version: `${version}` };

export class VersionPlugin extends BasePlugin implements Settings.IPlugin {

    public specify(flags?: string[]): boolean {

        jsonfile.writeFileSync(path, data, {spaces: 2});
        console.log(`Build #${version} successfully created!`);

        return true;

    }

}