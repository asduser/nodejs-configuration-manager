[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)]()
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

# Node.js - Configuration Manager

> Scalable and flexible *ts-node* utility to manage different application configurations to simplify the main build process.

---

✓ Typescript on server-side.<br/>
✓ It doesn't depend on webpack, grunt, gulp and other tools, but allows to run them inside itself.<br/>
✓ Simplifies build process for dev\prod environments.<br/>
✓ Works with different project types: Angular2, React, Angular.js, Native JavaScript etc.<br/>
✓ Extensible internal plugins, which may be used together or separately.

## CLI Commands

First parameter is mode, the second one - environment type.

Mode: `-def`, `-light`, `-full`.

Environment: `-dev`, `-prod`.

**Note**: to run default sequence plugins with predefined options use a special flag `-def`.

---

#### `run -def`
- execute default plugins list (defined in *plugins.ts*).

#### `run -light`
- execute a light-version with limited plugins number.

#### `run -full -prod`
- execute all existing plugins list and specify `production` environment type to generate an appropriate application settings.

#### `run -full -dev`
- all plugins list but apply an internal behaviour for `development` environment.
  
## Installation

1. `typings install`.
2. `npm install`.

**Info:** be sure, that you have installed typescript & ts-node globally. If not, put hte followings commands in terminal:

1. `npm install typescript@next -g`.
2. `npm install ts-node -g`.  

## Structure

> **Plugin**

Each functional entity in this module is a "Plugin". It's a simple typescript class, which extends *BasePlugin* class & implements *IPlugin* interface.

The main purpose - receive arguments list and execute an appropriate behaviour after.

All plugins included into the `plugins` directory and injected into the index.ts file there (to simplify handling their behaviour in the future).

Each plugin should return `true` if it is valid.

> **Helpers**

Special static classes which allow to use common methods to manage lists, messages, accomplish repeated logic and change self behaviour.

> **Initializer**

An entry file which receives arguments list from CLI inside node.js script.

**Note**: you may just call `ts-node initializer %mode% %env%` *.ts* file to get the same results above. 

## Licence

MIT License

Copyright (c) 2016 [asduser](https://github.com/asduser)