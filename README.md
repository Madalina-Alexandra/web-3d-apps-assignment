# About

## Statement of Originality

This project is submitted as requirement for H7006: Web 3D Applications at the University of Sussex - May 2022. It is the product of my own labour except where indicated otherwise. References can be found at the bottom of this page.


## Important notes

### Warning
As this project uses [React](https://reactjs.org/) , it needs to use [Webpack](https://webpack.js.org/) to compile the project into code that can be used in the browser. The command to do this is `yarn build`. However, the University server has no way of running this command. To get around this, the project has been compiled locally so it can be served statically on the university server. Please only mark the code in the `non-compiled` folder, this is the project code before it has been compiled. It can also be found on [Github](https://github.com/Madalina-Alexandra/web-3d-apps-assignment). This is because the compiled code is not readable.


### Info
This project does not use any CSS frameworks and all of the components (not including [react-three-fiber](https://github.com/pmndrs/react-three-fiber) and [react-three-drei](https://github.com/pmndrs/drei) components) in the views have been designed in [Figma](https://www.figma.com/) and custom built using [SCSS](https://sass-lang.com/) and [React](https://reactjs.org/).


## Technologies:

- [React](https://reactjs.org/), this is the front-end framework used for the project, It allowed the project views to use the Atomic design methodology.

- [GSAP](https://greensock.com/gsap/), this is the animation library used for the project and was used for animations such as the mobile navigation dropdown.

- [SCSS](https://sass-lang.com/), this is a CSS preprocessor that allowed this project to use the [BEM](https://css-tricks.com/bem-101/) naming convention for its element class names and added advanced functionality to the CSS with the use of [mixins](https://sass-lang.com/documentation/at-rules/mixin) and [functions](https://sass-lang.com/documentation/at-rules/function).

- [Three.js](), this is the 3D framework used to render the 3D elements on the 3d-experience page. It was also used in conjunction with react-three-fiber and react-three-drei.

- [PHP](https://www.php.net/), the backend language used to build the API that served converted [GLTF](https://www.khronos.org/gltf/) files as JSON to the frontend.

- [Cinema 4D](https://www.maxon.net/en/), the software used to build 3D models for this project in conjunction with Redshift for texturing and rendering the images in the gallery. (Adobe Photoshop and Illustrator were used for creating the textures).

- [Figma](https://www.figma.com/), this is the design and prototyping tool that was used to design the project screens.


## How MVC is used in the project:

As this project uses React, the model view controller architecture is set up slightly differently. It works by using the [React context API](https://www.loginradius.com/blog/engineering/react-context-api/), this is not the API that servers the GLTF data to the project frontend (covered in next section) but instead it's React's built-in state management solution similar to [Redux](https://redux.js.org/).

The project has a main model called `MainAppProvider` found in the `main.model.js` file. This allows all of the application's views to have access to the state object. When the application first loads, it is initialized with the initialState object shown below.

```
const initialState = {
  loading: false,
  gltfs: [],
  showTooltip: true,
  modal: null,
  // More code ...
}
```
However, if the user wants to make an update to a view, the application needs a way to do this, this is done with the application controller in `main.controller.js`. In React these controllers are called actions and the example below shows the `SET_SHOW_WIRE_FRAME` controller. This controller updates the model to show or hide the wireframe for the 3d model in the 3d-experience page based on the `action.payload`.

```
case "SET_SHOW_WIRE_FRAME":
  return {
   ...state,
   current3DModel: {
     ...state.current3DModel,
     showWireFrame: action.payload,
   },
  };
```

Lastly, views need a way of accessing the model and dispatching controllers, this is done via the use of the [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) hook. The example below shows how the `useContext` hook is implemented in a view and how the `SET_SHOW_WIRE_FRAME` controller is dispatched from a view.

```
const { model, dispatch } = useContext(MainAppModel);

// Some code...

// This handles showing showing the wireframe
const handleShowWireframe = () => {
  dispatch({ type: "SET_SHOW_WIRE_FRAME", payload: !showWireFrame });
};
```

## How AJAX is implemented in this project:
This application makes use of a small PHP REST API to serve JSON data that is then converted to a GLTF to be rendered as a 3D model on the 3D-experience page. Because of this, the application needs a way of making asynchronous requests. Luckily, React has the [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) hook that allows the application to make a fetch request to the API to get the JSON data it needs. The code for this can be found in `loading-page.jsx` and is shown below. Note that the `useEffect` hook can only be use inside components (views) thats why the AJAX request is not made in a controller or in the model's `initialState` object.

```
useEffect(() => {
  if (model.gltfs.length === 0 && loadGLTFS) {
    fetch('http://users.sussex.ac.uk/~mm2086/api/post/read.php')
     .then((res) => res.json())
     .then(
       (result) => {
         const gltfs = [];
         // Some code that adds the textures to each item in the
         // result & pushes them to gltfs ...

         // Add GLTFS to our modal and set current model to coke
         dispatch({ type: 'SET_GLTFS', payload: gltfs });
         dispatch({ type: 'SET_CURRENT_MODEL', payload: 'coke' });
        },
        (error) => {
          console.log(error);
        }
     );
   }

  // If gltfs have been loaded to the model navigate back to experience page
  if (model && model.gltfs.length > 0 && loadGLTFS) {
    navigate('/3d-experience');
  }
}, [model.gltfs]);
```
