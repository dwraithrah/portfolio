This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

as soon as you clone this repo, be sure to type this into the command <br>
```
npm install
```
this will install all node-module dependencies the project needs to run. after installing is complete, I recommend getting famalliar with the file structure.<br>

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    containers/
      App.css
      App.tsx
      App.test.tsx
      container folders...
    components/
      component folders...
    assets
      just examples of assets you could use...
    hoc
      empty, this is for sake of standard orginization in a react app, if you need/want to use a higher order component
    Store
      reducers/
      actions/
      sagas/
      TypeKeys.ts
    index.css
    index.tsx
```

for most of the documentation in working in this enviroment, I highly recommend you reference the react-create-app documentation. I of course can
help you out on some stuff as needed. <br>

some noticable things that you may have a hard time finding documentation on for typescript however can be found at  the official [Typescript-Documentation](https://www.typescriptlang.org/docs/home.html).<br>

you can also read the readme file at the [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter). <br>

There are some libraries that do not come with react create-app that I have used with this project, most noteworth of these includes this includes...<br>

[Material-ui](https://material-ui-next.com/)
I used this libaries for buttons, grids when needed and the toolbar <br>

[React-Router](https://reacttraining.com/react-router/web/guides/philosophy)
This is how we get a multipage feel for this single page app <br>

[Redux](https://redux.js.org/)
This is the stat management for any data used in your app if you want, this may be the hardest thing to learn as it requires a lot of boilerplating, but totally worth it.<br>

[Enzyme](http://airbnb.io/enzyme/)
This is basically best friends with Jest, which is the testing enviroment for most react.apps, enzyme allows you to easily mock components and containers and test the state of your components/containers. <br>

