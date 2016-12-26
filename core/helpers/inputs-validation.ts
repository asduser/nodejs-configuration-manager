import {Helpers} from "./index";

export class InputsValidationHelper {

    public static isValid(args: string[]): boolean {

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

const isOneValid = (args: string[]) => {
    const modeFlag = args[0];
    if (modeFlag == Helpers.Flags.flag.fullFlag) {
        return false;
    }
    return Helpers.Flags.modeFlags.indexOf(args[0]) > -1;
};

const isTwoValid = (args: string[]) => {
    return Helpers.Flags.modeFlags.indexOf(args[0]) > -1 && Helpers.Flags.buildEnvFlags.indexOf(args[1]) > -1;
};