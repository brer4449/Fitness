## Table of contents

- [General info](#general-info)
- [Instructions](#instructions)
- [Functionality](#functionality)
- [Technologies](#technologies)
- [Dependencies](#dependencies)

## General Info

This application is meant to track one's daily workout routine. One can simply add their workout and modify what their workout looks like. They can also look back at previous workouts to see what activities were performed and for how long. This app is intended to organize one's workout regimen.

## Instructions

In order to use the application, be sure to install all of the dependencies (see below). No seed file is provided so sample seeds are run in the server file. Change these seeds if you want to see different workout activities. Going to the /api/ routes will give you JSON payloads of whatever it is you're looking for (exercise, workout or activity). To start the app, run node server in the command line and go to localhost/3000. From there it is simple to navigate, typing in new workouts and adding them with the "add" button or clicking on workouts that are above the input field to dive deeper.

## Functionality

![example of working application](./assets/fitness.gif)

## Technologies

- Node
- Express
- Mongoose
- MongoDB
- Robo3T

## Dependencies

- Express version 4.16.3
- Mongoose version 5.3.16
- Morgan version 1.9.1
