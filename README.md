
#### CHAP website

### Developers:
All members in CHAP website team channel. 

### Scope
This website will be the front face of our club as it will be the first thing we redirect new members to. It will contain various sections related to our members, our projects, our awards and much more!

### Tech Stack

As this project is pure front-end for now, the tech stack is constrained to [ReactJs](https://reactjs.org/) boostraped with [NextJs](https://nextjs.org/). This makes our developement and deployment very easy as we can deploy with Vercel. 

### how to run
Dependencies: Npm, Nodejs.  <br/>
Set up environment: `npm install` <br/>
run development server: `npm run dev` <br/>

### File System

- .next (Next modules, Ignore)
- components
    - <All pages have a folder>
    - General (General react components)
    - Layout (Layout file, Sidebar, Footer)
- pages
    - Index (Home page)
    - <All pages have file> (A react component that represents a hmtl file)
 - public (public assets downloaded directly in the browser, like images and favicon)
 - styles
    - Components (folder matches components folder and should have a style moudule for every react component)
    - globals.module.css (Global styles)


for more information on how NextJs' filesystem works please consult the [routing documentation](https://nextjs.org/docs/routing/introduction) 

