# Majestic Waffle

A set of controls and tools made for WinJS applications, it contains a lot of controls, that can be used in a declarative way or via code, the same way as of WinJS UI controls, and a set of tools that I find interesting, and helped me accomplish the tools

## Requirements & Dependencies

To use these controls you will have to install WinJS in your project, and all WinJS scripts have to be called before calling any control of Majestic Waffle.

Head over to WinJS Git Repo to get informations about how to use WinJS in your app [here](https://github.com/winjs/winjs)

Some of Majestic Waffle controls depends on these libraries in order to run correctly:

- [Moment.js](https://github.com/moment/moment)
- [Validate.js](https://github.com/ansman/validate.js)
- [Markdown-js](http://github.com/evilstreak/markdown-js)

Please make sure you called them before calling any control that depends on any of them. Specific versions of dependencies can be found in [`bower.json`](/bower.json)

## Installation

| Provider | Command |
| -------- | ------- |
<!--| npm | `$ npm i -S majestic-waffle` |-->
| bower | `$ bower install majestic-waffle` |
| yarn | `$ yarn add majestic-waffle` |
| clone/download via Git | `$ git clone https://github.com/SouhailRazzouk/majestic-waffle.git` |

## Usage

Inorder to include any needed control in your app, you have to follow these steps after calling WinJS in your app.

1. Add a script tag where the `src` attribut points to the script of the desired control:

``` html
<script src="path/to/control.js"/>

example: (Alert control)

<script src="bower_components/majestic-waffle/dist/Alert/Alert.js"/>

```

2. Correct the `MajesticWaffle.UI.controlsPath` variable value in the start of your app, this variable should contain the location where your controls exist:

```javascript

MajesticWaffle.UI.controlsPath = "/path/to/majestic-waffle";

// Example:

/*This is the default value, so your browser will look for your controls in bower_components folder for majestic-waffle*/
MajesticWaffle.UI.controlsPath = "/bower_components/majestic-waffle"; 

```

3. Call the desired control in your app:

  - Declarative: 
  
  ```html

  <div id="myControl" data-win-control="MajesticWaffle.UI.[control_name]" data-win-options="{...}"></div>

  example: (Alert control)

  <div id="myAlert" data-win-control="MajesticWaffle.UI.Alert" data-win-options="{...}"></div>
  
  ```

  - Via code (Javascript):

  ```javascript
  
  let control = new MajesticWaffle.UI.[control_name](element, options);

  // example: (Alert control)

  let alertElement = document.getElementById('some-element-id');

  let alert = new MajesticWaffle.UI.Alert(alertElement, {...});

  ```

`element` is the HTML element where you want to display the control, and `options` is the initialization options object, you can get more details about `options` [here](https://github.com/SouhailRAZZOUK/majestic-waffle/wiki)

> **Note:** _Some controls have more dependencies then their own script, you may need to include the `Utilities.js` or `Navigation.js` script or both of them._

## Documentation

You can find more documentation and API in details in the [Wiki section](https://github.com/SouhailRAZZOUK/majestic-waffle/wiki).

## Issues Reporting and Improvments

If any control(s) or tool(s) are malfunctioning, please feel free to file an issue in the issues section, and it would be great if you mentioned the platform (OS, Browser ...) and other libraries you used so we can reproduce the issue and fix it effectively.

All types of issues are welcome, including but not limited to, slow loading, glishing ... etc. We will be more than happy to fix them.

Improvment suggestions are very welcome too, you can 

## Contribution

As usual, github fork and pull request are available, feel free to use them :D . Accepted pull requests are the ones that enclude new features(controls, tools ...) or fix any of the issues mentioned in the issues section.

You can add yourself to the contributors section of [`package.json`](/package.json) too if you want to.