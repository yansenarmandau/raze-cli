#!/usr/bin/env node
'use strict'

const yargs = require('yargs')
const { execSync } = require('child_process')

const deployCommand = {
  builder: (yargs) => {
    yargs
      .option('name', {
        alias: 'n',
        describe: 'Your App name.'
      })
      .option('project', {
        alias: 'p',
        describe: 'Your Google cloud project.'
      })
      .option('cluster', {
        alias: 'c',
        describe: 'Your Kubernetes cluster.'
      })
      .option('zone', {
        alias: 'z',
        describe: 'Your Cluster zone.'
      })
      .option('image', {
        alias: 'i',
        describe: 'Docker image url.'
      })
      .demandOption(['project', 'cluster', 'zone', 'image'], 'Please provide project, cluster, zone and image arguments to work with this command')
  },
  handler: (args) => {
    const { name, project, cluster, image, zone } = args
    const setProject = execSync(`gcloud config set project ${project}`)
    const getCredentials = execSync(`gcloud container clusters get-credentials ${cluster} --zone ${zone}`)
    const setImages = execSync(`kubectl set image deployment/${name} ${name}=${image}`)
  }
}

yargs
  .command('deploy [project] [cluster] [zone] [image]', 'Deploy to GKE', deployCommand)
  .help()
  .argv
