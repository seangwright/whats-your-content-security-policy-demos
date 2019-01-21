# What's your Content Security Policy (Demos)

Demo apps showcasing XSS and CSP mitigations

## How to run

### Add certificates

Perform the following instructions in `./src/certs`

<https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node>

### Build and start apps

Run the following commands

    npm i

    npm run build:react
    npm run start:site

And in a separate shell

    npm run start:api
