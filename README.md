cwc-cli
======

For creating base web-component

[![Build Status](https://travis-ci.com/OReshetnikov/cwc-cli.svg?branch=master)](https://travis-ci.com/OReshetnikov/cwc-cli)
[![Maintainability](https://api.codeclimate.com/v1/badges/39f6c875b2059bcef536/maintainability)](https://codeclimate.com/github/OReshetnikov/cwc-cli/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/39f6c875b2059bcef536/test_coverage)](https://codeclimate.com/github/OReshetnikov/cwc-cli/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/OReshetnikov/cwc-cli/badge.svg?targetFile=package.json)](https://snyk.io/test/github/OReshetnikov/cwc-cli?targetFile=package.json)
[![Dependencies Status](https://david-dm.org/OReshetnikov/cwc-cli/status.svg)](https://david-dm.org/OReshetnikov/cwc-cli)
[![devDependencies Status](https://david-dm.org/OReshetnikov/cwc-cli/dev-status.svg)](https://david-dm.org/OReshetnikov/cwc-cli?type=dev)
[![License](https://img.shields.io/github/license/OReshetnikov/cwc-cli)](https://github.com/OReshetnikov/cwc-cli/blob/master/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cwc-cli
$ wc-base COMMAND
running command...
$ wc-base (-v|--version|version)
cwc-cli/0.0.1 win32-x64 node-v11.12.0
$ wc-base --help [COMMAND]
USAGE
  $ wc-base COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wc-base hello`](#wc-base-hello)
* [`wc-base help [COMMAND]`](#wc-base-help-command)

## `wc-base hello`

Describe the command here

```
USAGE
  $ wc-base hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src\commands\hello.js](https://github.com/oreshetnikov/cwc-cli/blob/v0.0.1/src\commands\hello.js)_

## `wc-base help [COMMAND]`

display help for wc-base

```
USAGE
  $ wc-base help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_
<!-- commandsstop -->
