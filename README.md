# vite-build-issue

Steps to reproduce the issue:
`npm install`
`npm run build`
then inside the dist folder in `vite-build-issue.es.js` search for `.body({`. 
for example: `ge.body({` click on `ge` to go to its definition, it will be an empty object where it should hold a value containing the `body`
NOTE:
`ge` may be a different name after making a new build
