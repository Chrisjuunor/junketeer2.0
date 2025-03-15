# Junketeer (2.0)

This is Junketeer (2.0), a booking system for land transit. Why (2.0), you may ask? Well, Junketeer was initially a class project, and so many groups submitted their various versions of what they thought Junketeer was supposed to be, mine included. It was a fun project, and there was a whole process involved to get whatever results we all eventually submitted.

My group flunked—ouch! But the lessons we learned were immense, and I have carried them with me ever since. And now, even when the project is long behind me, I have decided to attempt to build it again, better this time, with the lessons I learned from the time my team flunked the project.
It is a work in progress and is therefore open to all forms of scrutiny and judgement, I welcome them all. Anyway, this is my little explanation of what this is and what it does.

## Content:

- [Junketeer (2.0)](#junketeer-20)
  - [Content:](#content)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Endpoints/Routes](#endpointsroutes)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Description

So, as already established, Junketeer is a booking system for transit on land (don't mind the grammar, it's a mass transit type organisation) but how was it built?

This project was built using node.js and express. It's very low effort and doesn't really incorporate any database. All data used are stored as json, thereby reducing the number of dependencies required.

## Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/Chrisjuunor/junketeer2.0.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To run this project's server, make sure you are in the server directory. If you aren't, run the following command in the terminal:
`cd server`
This command will take you into the server directory where you can now run the project properly.
After which you run `npm start` to start the server or `npm run watch` to run the server in watch mode.

What can you do after running the server you may ask. Well, you may explore some of the project endpoints.

### Endpoints/Routes

For better results, I strongly suggest you use an API tester like Postman or insomnia.

- Explore this endpoint to see all the current bookings available in the server

  ```bash
    http://localhost:8000/bookings/
  ```

  The expected result is an array of json objects containing details of all the booking made by the user.

- Explore the endpoint to make a new booking

  ```bash
    http://localhost:8000/bookings/add
  ```

  This particular endpoint uses a post method and therefore takes a few variables as request so there are a few things to put in place before hitting send.
  Firstly, make sure the body type is json. then entire the request body to send, like so;

  ```bash
   {
  "vehicle": "mini bus",
   "tripDate": "April 20, 2025",
   "destination": "Lagos",
   "passenger": "Charlie"
   }
  ```

  ...then you can hit send.
  The expected result is also a json object showing you all the parameters you entered along with a few key information regarding the booking like the success status, the upcoming status, and the booking id

- Explore this endpoint to cancel a booking
  ```bash
  http://localhost:8000.bookings/cancel/:id
  ```
  This endpoint takes a parameter in the request; the `:id` indicates that your are trying to cancel a booking by its id.
  Before hitting send for this one, replace `:id` with the id of the particular booking you're trying to cancel.

  The expected result is a json object that looks like it holds everything it did after hitting send on the post request, but if you observe closely, you'll notice that the success status shows false and the upcoming status shows false. Like so;

  ```bash
  "success": false,
  "upcoming": false,
  ```

## Contributing

Please, do feel free if you feel the need to add to this project to do so. I'd appreciate your input a lot. Just ensure you follow the following steps to ensure there's no ensuing chaos:

1. Fork the repository
2. Create a new branch
3. Knock yourself out making your addition
4. Push your branch
5. Create a pull request

## Contact

Please reach out at chinonsoigweic@gmail.com if you have any queries.

_Happy coding..._
