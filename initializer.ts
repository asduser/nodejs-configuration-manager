import {ConfigurationManager} from "./core/configuration-manager";
const args = process.argv.slice(2);
const buildManager = new ConfigurationManager(args);