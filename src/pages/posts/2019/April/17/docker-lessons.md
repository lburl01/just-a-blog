---
title: Docker 101
description: Filling in my Docker knowledge with the play-with-docker tutorials
date: '2019-04-17'
image: 'cameron-venti-1327675-unsplash.jpg'
tags: ['docker', 'learning', 'todo']
---

## What is Docker?
From their homepage, [Docker](https://www.docker.com/) is an "Enterprise Container Platform for High Velocity Innovation". Now, if you're not familiar with containers as a concept, that definition probably doesn't mean much to you. [Container architecture](https://www.docker.com/resources/what-container) is a way of collecting all the different parts of your app into their own boxes that manage their own dependencies. This means you could have a container that manages your database and utilizes Postgres and another container that manages your Ruby on Rails API.

The benefits of containerization is that you can have an environment that's built for development with a certain set of dependencies but you can easily swap out the code running in the container. Also, let's say you have an API written in Ruby but want to change that to use a Python microservice. Containers make this easy, too, since you can change the dependencies the container is using as easily as changing the microservice.

## My Docker Experience
At my previous job we used Docker and containerization to manage our deployed environments of our app and its required microservices. We had a basic Ruby on Rails app with a frontend jammed up inside the asset pipeline. Then we had 10+ microservices that our app needed to function in various other repositories. Docker allowed us to manage those repositories independently and have our Docker Compose file manage ports and dependencies between containers.

While I knew we used Docker and understood the general principles of containers, I didn't really have much experience with the glue connecting all these concepts. I set out to try a few of the [play-with-docker](https://training.play-with-docker.com/alacart/) labs to see if I could make more sense of how the pieces fit together.

## Play with Docker Labs
As most people do, I started with the developer intro labs that gave a gentle introduction to Docker. These were great because you could get some muscle memory started with the basic commands:

```bash
$ docker container ls
$ docker image build
```

One hiccup I ran into was that attempting the tutorials on my local machine wouldn't allow me to run some of the commands. Turns out that Docker requires quite a bit of memory on your machine to perform, so I had to up the amount I was granting Docker. [This](https://github.com/Microsoft/mssql-docker/issues/114) ended up being a helpful starting point to fix the issue.

Next I moved on to more complicated tutorials exploring Volumes and "microservice orchestration".

## TODOs
The tutorials and sandbox environment that Docker labs present are one of the more helpful tutorials I've done with new technologies. That said, they are still just the tip of the iceberg of many of these concepts and I have even more questions than before. Here's some topics that I plan to do more reading about:

* Mount types: volumes vs. bind mounts
* The different configurations you can set up in a Docker Compose file: dependencies, args, caching, etc.
* Actually deploying a containerized app somewhere (AWS seems to be the most frequently used option)
