Simple front-end design library made with [Storybook](https://github.com/storybookjs/storybook), written with Typescript and Sass and built using [Vite](https://github.com/vitejs/vite).

### Background
This is a small project I worked on during my front-end web design internship to gain more experience in the field.

## Features
Includes [React](https://react.dev/reference/react/Component) components for many design elements.
As of writing the components are:
>Avatars
>
>Banners
>
>Buttons
>
>Cards
>
>Checkbox
>
>Input and Selection forms
>
>Icons
>
>Logos
>
>Menu/Navigation bar
>
>Modals
>
>Popups
>
>Radio buttons
>
>Element shadows
>
>Tables
>
>Toggle switch
>
>Typography for written text

## Dependencies
npm 8.5.5

node 16.15.0

[Storybook 7.6.12](https://github.com/storybookjs/storybook)

[React 18.2.0](https://react.dev)

[Sass 1.70.0](https://sass-lang.com)

[classnames 2.5.1](https://github.com/JedWatson/classnames)

## Usage

First, install the package:

`npm install storybook-training`

Then import the modules you need, for example:

`import { Button, Logo, Modal} from storybook-training`

And finally, use the components in your project:

`const coolComponent = () => {`
`   return(`
`       <Button btnType="primary" size="medium" children="Click me" classname="btn" />`
`       )}`


