## Table of contents

- [General info](#general-info)
- [Instructions](#instructions)
- [Technologies](#technologies)
- [Dependencies](#dependencies)
- [Github Link](#github-link)

## General Info

This application is meant to track one's daily workout routine. One can simply add their workout and modify what their workout looks like. They can also look back at previous workouts to see what activities were performed and for how long. This app is intended to organize one's workout regimen.

## Instructions

In order to use the application, be sure to install all of the dependencies (see below). No seed file is provided so sample seeds are run in the server file. Change these seeds if you want to see different workout activities. Going to the /api/ routes will give you JSON payloads of whatever it is you're looking for (exercise, workout or activity). To start the app, run node server in the command line and go to localhost/3000. From there it is simple to navigate, typing in new workouts and adding them with the "add" button or clicking on workouts that are above the input field to dive deeper.

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

## Github Link

https://github.com/brer4449/homework17

# Summary

You will be creating an application that tracks daily workout activities. The app will consist of these three core elements:

Workouts, each of which has a name and date associated with it; as well as an unlimited amount of Activities.

Activities: these are the parts of each workout. Each activity consists of an Exercise (Barbell Curl, Lateral Curl, Bench Press, Treadmill, Stairmaster, etc.) and then info about Duration, Weight, Sets, Reps, and Distance.
Example: Bob's workout for Feb 20 consisted of these Activities:

Barbell Curl, Weight: 50 Sets: 5 Reps: 5
Stairmaster: Duration: 30 minutes Distance: 50 flights
The list of Exercises can be entered directly into Mongo.

MOST of the client side functionality will be provided. Focus on the back-end.
You will NOT be reloading the index.html page in order to update state. You'll be dynamically updating the DOM, but most of this will be done for you.
You'll be using Express Router this time, and you'll map your routes to controllers, which will then reference Mongoose models. You'll be provided with one example of this.
You'll use:
Node
MongoDB
Mongoose
Express & Express Router
jQuery and Bootstrap
Bonus Points:
Develop a seeder file that seeds the exercises instead of you putting them in manually.
More Bonus Points:
Your seeder file can also seed a few initial workouts.
