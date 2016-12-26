[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)]()
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

# Node.js - Configuration Manager

> Scalable and flexible *ts-node* utility to manage different application configurations to simplify the main build process.

## Using

First parameter is mode, the second one - environment type.

Mode: `-def`, `-light`, `-full`.

Environment: `-dev`, `-prod`.

**Note**: to run default sequence plugins with predefined options use a special flag `-def`.

## CLI Commands

#### `ts-node run -def`
- execute default plugins list (defined in *plugins.ts*).

#### `ts-node run -light`
- execute a light-version with limited plugins number.

#### `ts-node run -full -prod`
- execute all existing plugins list and specify `production` environment type to generate an appropriate application settings.
  
## Installation

1. `typings install`
2. `npm install`

## Structure

> **Plugin**

Each functional entity in this module is a "Plugin". It's a simple typescript class, which implements IPlugin interface.

The main purpose - receive arguments list and execute an appropriate behaviour after.

All plugins included into the `plugins` directory and injected into the index.ts file there (to simplify handling their behaviour in the future).

Each plugin should return `true` if it is valid.

> **Helpers**

Special static classes which allow to use common methods to manage lists, messages, accomplish repeated logic and change self behaviour.

> **Initializer**

An entry file which receives arguments list from CLI inside node.js script.

**Note**: you may just call init.bat file to get the same result above. 

## Licence

MIT License

Copyright (c) 2016 [asduser](https://github.com/asduser)