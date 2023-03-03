## Description

This repo creates a single CLI command to illustrate the termination behaviour when it quits with or without an unhandled exception.

When the command terminates normally (no unhandled exception), clean up process is carried out and everything goes as expected. However, when the command terminates due to an unhandled exception, the clean up routine (onApplicationShutdown) is not triggered and any background tasks keep on running, preventing the process to fully terminate. In this example, the console will forever print "Still running ...".

## [Update] 1 March 2023

This issue has been addressed by [@jmcdo29](https://github.com/jmcdo29) with the release of version 3.6.0, but there is a small bug in the fix in applying the `serviceErrorHandler` option. The `simple` command should print "My error handler" when handling the unhandled exception, but it doesn't because the option wasn't read properly.

## [Update] 3 March 2023

This issue has been fully fixed with the release of version 3.6.1.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# Normal termination
$ npx ts-node src/cli.ts simple

# Terminate by some unhandled exception
$ npx ts-node src/cli.ts simple -e
```
