# Raze CLI [![npm version](https://badge.fury.io/js/raze-cli.svg)](https://badge.fury.io/js/raze-cli)
GKE Deployment Command Line Interface (CLI)

## Table of contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

## Requirements
- Google Cloud SDK
- Kubernetes

## Installation

### Globally
Install CLI global with

```bash
$ npm install -g --save raze-cli
```

Now you can run CLI using following command

```
$ raze
```

## Usage
```
Raze CLI

Commands:
  deploy
    Options:
      --name        App name            [aliases: -n]
      --project     GKE Project name    [aliases: -p]
      --cluster     Kubernetes Cluster  [aliases: -c]
      --image       Docker image url    [aliases: -i]

Options:
  --version   Show version number
  --help      Show help
```
