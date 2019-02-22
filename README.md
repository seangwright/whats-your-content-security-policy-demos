# What's your Content Security Policy (Demos)

Demo apps showcasing XSS and CSP mitigations

## Demos

This repo has 3 branches that detail the steps taken from identifying vulnerabilities to blocking them.

1. `feat/add-vulnerabilities`

   This branch shows what happens when your application is vunerable to XSS.

2. `feat/reporting`

   This branch enables CSP in `report-only` mode to help identify where the vulnerabilities are and what would be blocked with a very simple CSP

3. `fix/vulnerabilities`

   This branch turns on CSP which is configured in such a way as to allow the application to maintain all features and functionality but prevent XSS

## How to run the demos

### Start Apps

1. To start checkout `feat/add-vulnerabilities`

1. Then run `npm i`

1. If this is the first time running the demos, build the react app by running the following command. This doesn't need to be repeated.

   `npm run build:react`

1. After checking out a branch run the following commands to start the vulnerable web app on <https://localhost:3000>

   `npm run dev:site`

1. In a separate shell run the following command to start the malicious api on <https://localhost:3001>

   `npm run dev:api`

1. Before checking out a new branch stop the ExpressJs apps if they are running and repeat the steps starting at 2. above.

To see the vulnerabilities in action and the mitigations by CSP open your browser devtools console and look at the shell where you started your site and api applications.

## Steps to mitigation

### Add Vulnerabilities

#### Branch `feat/add-vulnerabilities`

Navigate to <https://localhost:3000> after running `npm run dev:site`.

Here are the vulnerabilities:

- The **comment-moderation** page has `<script>` tag injection, simulating coming from a backend data source, which will prevent you from deleting the 'hacked' comment but will cause all other comments to be deleted.

  The scenario here is that while many web frameworks protect against XSS via form/data submission, you don't always control where your data comes from. Maybe it comes from a data load process or from a legacy web app that doesn't have XSS protection.

- The **login-old** page loads a vulnerable package from `npm` using <https://unpkg.com/> to enhance the browser console. This package has obfuscated contents that keylog the username and password field to the malicious api.

  The scenario here is that pulling a package off npm could make your app exploitable. `cool-console` is live on npm and while it only logs data to a localhost endpoint there could easily be packages in the registry that are much more nefarious. The code in this package also does what you expect - it makes your `console.log()` calls look cool. But how many developers read the source code of their package dependencies if the package _does what it is supposed to do_?

- The **login-new** page uses some CSS loaded via stylesheets from the site that use React's attribute update behavior and `background-image` to keylog the username and password field to the malicious api.

  The scenario here is that while each attack vector by itself (React, CSS) isn't viable, by combining the two you create a vector where there wasn't one before. React updates DOM attributes with the component state - something the DOM doesn't do natively. CSS can target those attributes but normally they don't change from their initial values (but this can still be an issue with server rendered, pre-populated values). But take React + CSS and you can send requests to a 3rd party anytime a matching character is found in an attribute.

### Reporting

#### Branch `feat/reporting`

Open up the console to see the CSP reporting notifications when navigating around and interacting with the site.

Notice that no vulnerabilities have been stopped, but information is being collected, logged to your shell from the `/report-csp` endpoint and into the browser console.

### Fix Vulnerabilities

#### Branch `fix/vulnerabilities`

Repeat the same process as in **Reporting** and notice that the requests to send sensitive data to the malicious api are blocked and inline `<script>` tags have been disabled, allowing you to delete the 'hacked' comment.

The blocked vulnerabilities are still reported to the `/report-csp` endpoint and will show up in your shell.

## Related Links

- Slides <https://docs.google.com/presentation/d/1Q_X4Whws-UgW1n9doZNRXWtARYmuPPSqp7Bh_UeoApA/edit?usp=sharing>

- (Exploited) Cool Console package <https://www.npmjs.com/package/cool-console>

- Meeup - What is your Content Security Policy? <https://www.meetup.com/Akron-Software-Craftsmanship-MeetUp/events/258190933/>
