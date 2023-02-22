## Description

This repo creates a single CLI command to illustrate the termination behaviour when it quits with or without an unhandled exception.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# Normal running
$ npx ts-node src/cli.ts simple

# Unhandled exception
$ npx ts-node src/cli.ts simple -e
```
