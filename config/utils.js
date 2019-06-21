const webpack = require('webpack');
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new webpack.DefinePlugin(env)],
  };
};

const root = path.join(__dirname, '..');
const srcPath = path.join(root, 'src');
const buildPath = path.join(root, 'build');

const before = (app) => {
  const colors = {
    log: 'white',
    info: 'white',
    warn: 'yellow',
    error: 'red',
  };

  app.use(bodyParser.json());
  app.post("/remote-console", bodyParser.json(), function(req, res){
    const {type, args} = req.body;
    const time = (new Date()).toLocaleTimeString();
    console[type](`[${time}][App]` + chalk[colors[type]](`[${type}]`), ...args);
    res.send();
    // res.send("[POST res sent from webpack dev server]")
  })
}

module.exports = {
  setFreeVariable,
  srcPath,
  buildPath,
  before,
};
