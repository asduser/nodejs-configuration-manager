export class MessageHelper {
    
    private static pluginInitializationLogging: boolean = true;
    
    public static showIncorrectMode(): void {
        incorrectMode();
    }

    public static statusMsg(classConstructor: Function): void {
        if (MessageHelper.pluginInitializationLogging) {
            const ctorName = classConstructor.toString().match(/\w+/g)[1];
            console.log(`'${ctorName}' plugin initialized.`);
        }
    }
    
}

const incorrectMode = () => {
    console.log('\n--- Incorrect format ---\n');
    console.log('1. Use the followings mode with prefix "-":\n   -full, -light, -def.');
    console.log('2. Use the followings environment type with prefix "-":\n   -dev, -prod.');

    console.log('\n--- Input parameters sequence ---\n');
    console.log('1. Mode: -def, -light, -full.');
    console.log('2. BuildEnvironment: -dev, -prod.');
    console.log('Note: to run default plugins sequence with predefined options use a special flag -def.');
    console.log('\n--- Examples ---\n');
    console.log('a) ts-node init-builder -def;');
    console.log('b) ts-node init-builder -light;');
    console.log('c) ts-node init-builder -full -prod;');
    console.log('c) ts-node init-builder -full -dev;');
};