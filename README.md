
# react-native-mobx-project-structure

## Getting started

### Installation

##### Javascript
1. Create new project using

```
`react-native init YourProjectName`
```

2. Go inside your newly created project and copy `App.js, index.js, and js folder ` from react-native-mobx-structure.
- Also, check  `dependecies and devDependencies`  from package.json
- Versions may differ but make sure whatever version you use that must be compatible with one another.

```
"dependencies": {
  "@react-native-community/netinfo": "^4.1.3",
  "mobx": "^5.9.4",
  "mobx-react": "^5.4.3",
  "react": "16.8.3",
  "react-native": "0.59.3",
  "react-native-gesture-handler": "^1.3.0",
  "react-navigation": "^3.11.1"
},
"devDependencies": {
  "@babel/core": "^7.5.5",
  "@babel/plugin-proposal-decorators": "^7.4.4",
  "@babel/runtime": "^7.5.5",
  "babel-jest": "^24.7.1",
  "jest": "^24.7.1",
  "metro-react-native-babel-preset": "^0.53.1",
  "react-test-renderer": "16.8.3"
},

```

3. Execute following commands to install dependencies and devDependencies.
  Using npm
    - `npm install` 
    - `npm install --save-dev`

  Using yarn
    - `yarn install` 
    - `npm install --dev`

4. Open babel.config.js inside your main project folder and check for following code:
```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
      "legacy": true
      }
    ]
  ]
};
```


## Usage
This is demo for react native project structure using mobx architecture.

We are ready to start with our run project by 'react-native run android' and 'react-native run ios' in terminal. 


