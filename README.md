# gavinshr.com
Source Code For My Portfolio: [gavinshr.com](https://gavinshr.com)  

## Technologies Used
- [React](https://reactjs.org) (Front-End JavaScript Framework)
- [Three.JS](https://github.com/mrdoob/three.js/) (3D JavaScript Framework)
- HTML5
- CSS3
- JavaScript
- PHP
- MySQL
- JSON

## Want to create a website with a similar theme?
Check out the resources/assets I used: [gavinshr.com/resources](https://gavinshr.com/resources)

# Running The Code

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

## React-Snap Server-Side Pre-Rendering
You will notice when you run "npm run build" that there is a post-build configuration running. This post-build command will run the [react-snap](https://github.com/stereobooster/react-snap) library in order to create static HTML files for the entirety of the site. This is used to speed up the initial page render + improve the "communication" to web-crawling bots. This improves SEO.

In order to run a static version of this outputted build you will navigate to the project's directory, run the build, and then navigate to the "build/" folder. Inside the static build/ folder you can start a local server using "php -S localhost:8008". Now if you visit localhost:8008 in your web browser and completely disable JavaScript, you can see that our application still renders even without JavaScript. 

```
cd <project's local directory>
npm run build
cd build/
php -S localhost:8008
```

I personally use BlueHost for my hosting & CyberDuck for my FTP connection to the host. Your results may vary if you use a different configuration.

# Upcoming Features

- [x] About Me, Skills, Resume, Contact Form, Projects & Resources pages
- [x] Animated starfield background
- [x] Mobile friendly navigation bar menu
- [x] Side project #1 - Maze solving algorithm   
- [x] SEO improvements (React-Router hybrid back-end server)
- [ ] Blog + technical writing content
- [ ] Accessibility improvements
- [ ] Resume improvements (download button, better formatting on document)
- [ ] Performance enhancements (Three.JS minification + general code minification)
- [ ] Analytics + page view statistics
- [ ] iPhone Safari landscape text-size improvements
- [ ] Cleaner code; organize App.js & other larger files into smaller modules
- [ ] Side Project #2 - JavaScript evolution simulator with HTML5 canvas, camera, game loop, entity system, user input, & local state storage
