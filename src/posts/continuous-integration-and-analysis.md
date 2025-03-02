---
title: Continuous integration and analysis tools for open source nodeJS development
author: TED Vortex
date: '2016-06-22T00:00:00.000Z'
draft: false
tags:
  - open source
  - engineering
  - cloud
comments: {}
---

Initial idea is based on the list available at https://github.com/ligurio/Continuous-Integration-services/blob/master/continuous-integration-services-list.md.

It contains only services that provide a sensible amount of features for open source projects or non-profit organisations. I've also added several tools I used or tested with a minimal up and running configuration.

<!-- more -->

To summarise the review factors for this document:

- open source tools
- suitable for nodeJS application development
- minimal developer downtime and configuration setback
- fast build times (RAD)

## The list covers services that can be broken down into "type" categories:

1. **[Continuous Integration](#continuous-integration)**
2. **[Continuous Delivery](#continuous-delivery)**
3. **[Continuous Analysis](#continuous-analysis)**

The list of services can be narrowed down based on main programming language target audience (opinionated):

**NodeJS:**

1. [Travis](#travis-ci)
2. [Snap](#snap-ci)
3. [Bithound](#bithound)
4. [Snyk](#snyk)
5. [Dependency CI](#dependency-ci)
6. [Coveralls](#coveralls)

**Docker:**

1. [Wercker](#wercker)
2. [Codeship](#codeship)
3. [Buildkite](#buildkite)
4. [Coveralls](#coveralls)

**Ruby:**

1. [Codeship](#codeship)
2. [Coveralls](#coveralls)

## Continuous Integration:

### [Travis CI](https://travis-ci.org)

**Pro**:

- github/bitbucket
- integrated with virtually every 3rd party
- fast (for ubuntu machines)
- free build matrix

**Con**:

- local testing version is not free
- missing red hat based distros

**Verdict**: _**current preferred solution overall.**_

### [Snap CI](https://snap-ci.com)

**Pro**:

- github/bitbucket
- support for database adaptors
- support for pipes
- support for stages
- bamboo like usage

**Con**:

- full integration takes some configuration downtime

**Verdict**: This is the current preferred solution for enterprise level applications.

### [Buildkite](https://buildkite.com)

**Pro**:

- github support
- docker support
- supports multiple db engines
- pipes

**Con**:

- manual configuration on everything

**Verdict**: Looks like the best overall solution for docker applications but the limitations and level of configuration required makes this service difficult to use for nodeJS applications. When considering microservices and multiple backend technologies this tool shines.

### [Semaphore CI](https://semaphoreci.com)

**Pro**:

- github/bitbucket

**Con**:

- latest node development not supported
- no build matrix
- poor integration with other services

**Verdict**: I don't find this service suitable for nodeJS application development.

### [Magnum CI](https://magnum-ci.com)

**Pro**:

- github/bitbucket/hosted
- developer flow

**Con**:

- node 0.10 is highest version
- deployed technologies make the service unmaintainable

**Verdict**: I don't find this service suitable for nodeJS application development.

### [Drone](https://drone.io)

**Pro**:

- github/bitbucket/google code
- support for all web languages
- support for database adaptors

**Con**:

- node 0.10 is highest version
- deployed technologies make the service unmaintainable

**Verdict**: I don't find this service suitable for nodeJS application development.

## Continuous Delivery

### [Wercker](http://wercker.com)

**Pro**:

- github/bitbucket
- docker support
- kubernetes support
- pipes
- local testing
- awesome developer flow

**Con**:

- not very useful for simple NPM packages

**Verdict**: Looks like the most solid continuous integration solution out there. Will test this in production with a react application.

### [Codeship](https://codeship.com)

**Pro**:

- github/bitbucket
- docker native

**Con**:

- ruby targeted audience
- OSS features limited vastly

**Verdict**: Looks like a solid choice for ruby/docker inspired projects. Performance seems good for small projects. With competitive technologies I would prefer this service for ruby development and asset revision.

### [Shippable](https://app.shippable.com)

**Pro**:

- github/bitbucket
- docker support
- pipes

**Con**:

- major user experience issues
- unable to select free license

**Verdict**: I would like to use this service ...

### [Factor](https://factor.io)

**Pro**:

- github support
- custom workflow generator

**Con**:

- ruby based
- lacks open source integrations

**Verdict**: It's only useful in the ruby ecosystem with complex workflows. Most of the features this service offers are provided by several packages and standards via NPM.

## Continuous Analysis

### [Bithound](https://www.bithound.io)

**Pro**:

- local version
- code quality
- dependency security advisory
- builds on top of NSP

**Con**:

- eslint highest supported version is 2.0

**Verdict**: So far very good and fast tool with extremely fast customer support.

### [Snyk](https://snyk.io)

**Pro**:

- github/bitbucket
- local check
- builds on top of nsp
- builds on top of src:clr security advisory

**Con**:

- monitor command can fail (local backfall)

**Verdict**: Using this tool on top of

### [Dependency CI](https://dependencyci.com)

**Pro**:

- lightning fast setup due to lack of features
- vast number of programming languages supported
- go/julia/swift wow

**Con**:

- not configurable
- nodeJS purpose is completely superseded by other tools already open source

**Verdict**: This tool is useful for projects that don't have a complete generic stack, for example a plugin theme pushed to NPM might not need complex integrations and this tools would serve well to notify in the rare cases of lost/forgotten packages.

### [Coveralls CC](https://coveralls.io)

**Pro**:

- support for multiple programming languages
- support for multiple CIs

**Con**:

- local tests are cumbersome

**Verdict**: Using this as part of the LCOV data upload gulp task in parallel with bithound.
