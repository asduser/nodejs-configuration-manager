import {Helpers} from "../../core/helpers/index";

export class BasePlugin {

    constructor() {
        Helpers.Message.statusMsg(this.constructor);
    }
    
}