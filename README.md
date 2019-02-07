# What's your Content Security Policy (Demos)

Demo apps showcasing XSS and CSP mitigations

## How to run

### Add certificates

Perform the following instructions in `./src/certs`

<https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node>

### Development

Run the following commands

    npm i

    npm run dev:react

In a separate shell

    npm run dev:site

In a separate shell

    npm run dev:api

### Build and start apps

Run the following commands

    npm i

    npm run build:react
    npm run site

And in a separate shell

    npm run api

The site will run on <https://localhost:3000> and the api will run on <https://localhost:3001>

## Related Links

- Cool Console package <https://www.npmjs.com/package/cool-console>
- Meeup - What is your Content Security Policy? <https://www.meetup.com/Akron-Software-Craftsmanship-MeetUp/events/258190933/>
