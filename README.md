# gavinshr.com
Source Code For My Portfolio: [gavinshr.com](https://gavinshr.com)  


## Clone the repo
`git clone https://github.com/gshrdr/gavinshr.com.git`

## Requirements
In order to build this project, you'll need [NPM](https://www.npmjs.com).

## Local build-server instructions
In order to run this project locally, do the following:

```
cd <project's local directory>
npm start
```

Visit http://localhost:3000 and you'll be able to view the website.

## Build instructions
In order to build this project (to prepare for deployment), do the following:

```
cd <project's local directory>
npm run build
```

This will create a folder in your local directory entitled "build" - this folder contains a fully working version of your website.
All of the packages will be condensed into this folder and ready to deploy to a live host!

## Deployment instructions
After running a build command you will copy the contents of the build folder into your website host's /public_html directory using FTP.

```
cd <project's local directory>
npm run build
```

I personally use BlueHost for my hosting & CyberDuck for my FTP connection to the host. Your results may vary if you use a different configuration.

## Want to create a website with a similar theme?
Check out the resources/assets I used: [gavinshr.com/acknowledgements](https://gavinshr.com/acknowledgements)
