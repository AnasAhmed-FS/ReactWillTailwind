# To run The React projet in github, Using these steps:

1- install gh-pages packeges by --> npm i gh-pages

2- Write these dependency in #package.json:-

\* "homepage": "https://UserName_github.github.io/ReposName/",

\* "scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
},

3- To run project in github domain \* Open teminal and write #npm run deploy
