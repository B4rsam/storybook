Simple front-end design library made with [Storybook](https://github.com/storybookjs/storybook), written with Typescript and Sass and built using [Vite](https://github.com/vitejs/vite).

### Background
This is a small project I worked on during my front-end web design internship to gain more experience in the field.
I used [Pixelmatters Design System](https://www.figma.com/community/file/1055785285964148921) as a reference, guideline and inspiration.

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

And finally, you can use the components within your project!

### Contributions and project structure
All components must be within the `storybook-training/src/components` directory and their related .stories.tsx file in the `storybook-training/src/stories` directory.
Each component must be contained in its own folder that it shares with its own .module.sass stylesheet.
Icons and images are in .svg format and are located in `storybook-training/src/assets`.


