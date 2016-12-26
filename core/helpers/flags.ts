import {Settings} from "../settings";

export class FlagsHelper {
    
    public static flag = {
        devFlag: null,
        prodFlag: null,
        defFlag: null,
        lightFlag: null,
        fullFlag: null,
    };
    public static modeFlags: string[] = [];
    public static buildEnvFlags: string[] = [];
    
}

let devFlag, prodFlag, defFlag, fullFlag, lightFlag;
for (let key in Settings.inputBuildEnvironment) {
    if (Settings.inputBuildEnvironment[key] == Settings.BuildEnvironment.Dev) {
        devFlag = key;
        FlagsHelper.flag.devFlag = devFlag;
        FlagsHelper.buildEnvFlags.push(devFlag);
    }
    if (Settings.inputBuildEnvironment[key] == Settings.BuildEnvironment.Prod) {
        prodFlag = key;
        FlagsHelper.flag.prodFlag = prodFlag;
        FlagsHelper.buildEnvFlags.push(prodFlag);
    }
}
for (let key in Settings.inputMode) {
    if (Settings.inputMode[key] == Settings.Mode.Default) {
        defFlag = key;
        FlagsHelper.flag.defFlag = defFlag;
        FlagsHelper.modeFlags.push(defFlag);
    }
    if (Settings.inputMode[key] == Settings.Mode.Light) {
        lightFlag = key;
        FlagsHelper.flag.lightFlag = lightFlag;
        FlagsHelper.modeFlags.push(lightFlag);
    }
    if (Settings.inputMode[key] == Settings.Mode.Full) {
        fullFlag = key;
        FlagsHelper.flag.fullFlag = fullFlag;
        FlagsHelper.modeFlags.push(fullFlag);
    }
}