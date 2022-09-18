# three-js-boilerplate

Three.js Boilerplate using **Singleton Design Pattern**. </br>
This Boilerplate uses Vite build tool.</br>

### Written Plain using:

- HTML
- SCSS
- Javascript

## Setup

```bash
    # install all dependencies
    npm i
    # start dev server
    npm run dev
    # open on browser using this port
    http://127.0.0.1:5173/
```

## SCSS config

```bash
  # in your VSCode open your settings.json
  `ctrl` + `p`
  # then paste this scss config format to follow the predefined path

  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/src/css"
    }
```

## Three folder

The Three folder uses the `Three.js` as the controller class and holds the static instance.</br>
The Three folder is divided into different files(class) to minimize long codes in singe file.</br>

## assets.js

> always keep the name 'model' for the key name as the `Model.js` uses dot notation `this.resources.items.model`.
> this boilerplate is deisgned for `glbModel` file type only.

```bash
export default [
  {
    name: "model",
    type: "glbModel",
    path: "/models/simple-animation.glb",
  },
];
```

## public folder

- The **assets** folder is the place for img, fonts, videos, and any non-3DObject models.</br>
- The **model** folder consists the glb files that will be your rendered model (follow `assets.js` for file path). </br>
- The **draco** folder is important, it is from the three js module. **!!!DO NOT DELETE!!!**</br>

# IMPORTANT NOTE!

> This method of creating Three.js project was derived from Andrew Woan's video
> https://www.youtube.com/watch?v=rxTb9ys834w&ab_channel=AndrewWoan
> This Boilerplate was not 100% made by me, but modified to meet my comfort in coding Three.js
