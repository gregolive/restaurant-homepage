# Online Shop Homepage

An online shop for Mind Blown Coffee Roasters made in Javascript.

[Live demo](https://gregolive.github.io/shop-homepage/) 👈

## Functionality

- Simple 3 tab navigation (Home, Coffee List, and Contact buttons) that use Javascript modules and webpack to generate the appropriate HTML
- Additional JS modules for loading nav header and footer 
- HTML file generated dynamically with webpacks's <code>HtmlWebpackPlugin</code>

## Reflection

This was the first project I built using webpack, but using the excellent [webpack guides](https://webpack.js.org/guides/) made implementing webpack quite easy. I used webpack's asset modules to load in CSS, images, and fonts, in addition to the JS modules. One of the most useful features was setting <code>clean: true</code> on the output directory to keep the dist folder free of unused files. Another aweosme feature is the ability to generate the entire HTML file dynamically, while still being able to set up a favicon, etc.

Something that I still need to figure out with is properlly controlling the size of the output files. When I set the webpack mode to production, I got warnings that some of the files were above the recommended 244KiB size. I was surprised to see that even the font files were deemed to be possibly impacting performance and need to look into fixing this for a project that I will want to use in production.