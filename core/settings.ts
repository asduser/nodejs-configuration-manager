export namespace Settings {
    
    export enum BuildEnvironment {
        Dev = 0,
        Prod = 1
    }

    export enum Mode {
        Default = 0,
        Light = 1,
        Full = 2
    }

    export const inputMode = {
        "-full": Mode.Full,
        "-light": Mode.Light,
        "-def": Mode.Default
    };

    export const inputBuildEnvironment = {
        "-dev": BuildEnvironment.Dev,
        "-prod": BuildEnvironment.Prod
    };
    
    export interface IPlugin {
        specify(flags: string[]): void;
    }
    
}